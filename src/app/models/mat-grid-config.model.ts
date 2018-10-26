import { ElementRef } from "@angular/core";
import { compilePipeFromMetadata } from "@angular/compiler";
import { ComponentRef } from "@angular/core/src/render3";

/*
 * NOTE: This only works for symettric grids. Meaning that each row until the
 * very last row must contain a number of columns equal to the maximum number 
 * of columns i.e. you have a 'n' col grid, each row must define 'n' columns 
 * except the last which needs to be <= 'n' columns
*/
export class MatGrid {
    public headerRow?: Tile<string>[];
    public tiles: Tile<string>[];
    public totalColumns: number;
    public rowHeight: string;
    public leftSidenav?: SideNavTile<string>;
    public rightSidenav?: SideNavTile<string>;
    public totalRows: number;

    constructor(config: MatGridConfig<string>) {
        if (config.rightAlignedSidenav && config.leftAlignedSidenav) {
            throw new Error('We can only support one sidenav at this time');
        }
        
        this.headerRow = config.headerRow || null;
        this.tiles = config.tiles;
        this.totalColumns = config.totalColumns;
        this.rowHeight = config.rowHeight || '1:1';
        this.leftSidenav = config.leftAlignedSidenav || null;
        this.rightSidenav = config.rightAlignedSidenav || null;
        this.totalRows = this.calculateNumberOfRows();

        if (config.leftAlignedSidenav && config.rightAlignedSidenav) {
            if (config.leftAlignedSidenav.colSpan + config.rightAlignedSidenav.colSpan > this.totalColumns) {
                throw new Error('Invalid configuration');
            }    
        }
    }

    private calculateNumberOfRows() {
        let reservedColumns = 0;
        if (this.leftSidenav) {
            reservedColumns = this.leftSidenav.colSpan;
        }
        if (this.rightSidenav) {
            reservedColumns += this.rightSidenav.colSpan;
        }

        let colSpanCounter = reservedColumns;
        let rowCounter = 0;

        for (let t of this.tiles){
            colSpanCounter += t.colSpan;

            if (colSpanCounter > this.totalColumns) {
                throw new Error('Another Invalid Configuration');
            } else if (colSpanCounter === this.totalColumns) {
                colSpanCounter = reservedColumns;
                rowCounter++;
            }
        }

        // Check if any of the defined columns are specifically bigger 
        // than the number of rows calculated
        this.tiles.forEach(t => {
            if (t.rowSpan > rowCounter) {
                rowCounter = t.rowSpan;
            }
        });

        return rowCounter;
    }
}

export interface Tile<T> {
    contentRef: string | ComponentRef<T>;
    colSpan: number;
    rowSpan: number;
    backgroundColor?: string;
}

export interface SideNavTile<T> {
    colSpan: number;
    contentRef: string | ComponentRef<T>;
    backgroundColor?: string;
}

export interface MatGridConfig<T> {
    headerRow?: Tile<T | string>[];
    tiles: Tile<T | string>[];
    totalColumns: number;
    rowHeight?: string
    leftAlignedSidenav?: SideNavTile<T>;
    rightAlignedSidenav?: SideNavTile<T>;
}