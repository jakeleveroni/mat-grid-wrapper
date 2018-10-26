import { MatGridConfig } from "src/app/models/mat-grid-config.model";

export const leftSidenavAndHeader: MatGridConfig<string> = {
    headerRow: [{
        colSpan: 2,
        contentRef: null,
        rowSpan: 1
    }, {
        colSpan: 2,
        contentRef: 'header 1',
        rowSpan: 1
    }, {
        colSpan: 2,
        contentRef: 'header 3',
        rowSpan: 1
    },
    {
        colSpan: 2,
        contentRef: 'header 3',
        rowSpan: 1
    },
    {
        colSpan: 2,
        contentRef: 'header 3',
        rowSpan: 1
    }],
    leftAlignedSidenav: {
        colSpan: 2,
        contentRef: 'left sideNav Content',
        backgroundColor: 'green'
    },
    tiles: [
        {
            colSpan: 2,
            contentRef: 'content 1',
            rowSpan: 1
        }, {
            colSpan: 2,
            contentRef: 'content 2',
            rowSpan: 1
        },
        {
            colSpan: 2,
            contentRef: 'content 3',
            rowSpan: 1
        }, {
            colSpan: 2,
            contentRef: 'content 4',
            rowSpan: 1
        },
        {
            colSpan: 2,
            contentRef: 'content 5',
            rowSpan: 1
        },
        {
            colSpan: 2,
            contentRef: 'content 6',
            rowSpan: 1
        },
        {
            colSpan: 2,
            contentRef: 'content 7',
            rowSpan: 1
        },
        {
            colSpan: 2,
            contentRef: 'content 8',
            rowSpan: 1
        },
    ],
    totalColumns: 10
} as MatGridConfig<string>;

export const noHeaderNoSidenav: MatGridConfig<string> = {
    tiles: [
        {
            colSpan: 2,
            contentRef: 'content 1',
            rowSpan: 1
        }, {
            colSpan: 2,
            contentRef: 'content 2',
            rowSpan: 1
        },
        {
            colSpan: 2,
            contentRef: 'content 3',
            rowSpan: 1
        }, {
            colSpan: 2,
            contentRef: 'content 4',
            rowSpan: 1
        },
        {
            colSpan: 2,
            contentRef: 'content 5',
            rowSpan: 1
        },
        {
            colSpan: 5,
            contentRef: 'content 6',
            rowSpan: 1
        },
        {
            colSpan: 5,
            contentRef: 'content 7',
            rowSpan: 1
        },
        {
            colSpan: 10,
            contentRef: 'content 8',
            rowSpan: 1
        },
    ],
    totalColumns: 10
}

export const rightSidenavAndHeaderWithSingleContentArea: MatGridConfig<string> = {
    headerRow: [{
        colSpan: 8,
        contentRef: 'header 1',
        rowSpan: 1
    },
    {
        colSpan: 2,
        contentRef: 'header 2',
        rowSpan: 1
    }],
    rightAlignedSidenav: {
        colSpan: 2,
        contentRef: 'right sideNav Content',
        backgroundColor: 'yellow'
    },
    tiles: [
        {
            colSpan: 8,
            contentRef: 'content 1',
            rowSpan: 4
        }
    ],
    totalColumns: 10
};

export const noHeaderWithSidenav = {
    leftAlignedSidenav: {
        colSpan: 2,
        contentRef: 'left sideNav Content',
        backgroundColor: 'green'
    },
    tiles: [
        {
            colSpan: 3,
            contentRef: 'content 1',
            rowSpan: 1
        }, {
            colSpan: 2,
            contentRef: 'content 2',
            rowSpan: 1
        },
        {
            colSpan: 3,
            contentRef: 'content 3',
            rowSpan: 1
        }, {
            colSpan: 3,
            contentRef: 'content 4',
            rowSpan: 1
        },
        {
            colSpan: 2,
            contentRef: 'content 5',
            rowSpan: 1
        },
        {
            colSpan: 3,
            contentRef: 'content 6',
            rowSpan: 1
        },
        {
            colSpan: 3,
            contentRef: 'content 4',
            rowSpan: 1
        },
        {
            colSpan: 2,
            contentRef: 'content 5',
            rowSpan: 1
        },
        {
            colSpan: 3,
            contentRef: 'content 6',
            rowSpan: 1
        },
    ],
    totalColumns: 10
}
