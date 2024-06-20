export const SELECTED_FILTER = {
    ALL: 'all',
    INCOMPLETED: 'incompleted',
    COMPLETED: 'completed'
} as const

export const FILTER_BUTTONS = {
    [SELECTED_FILTER.ALL]: {
        literal: 'Todos',
        href: `/?filters=${SELECTED_FILTER.ALL}`
    },
    [SELECTED_FILTER.INCOMPLETED]: {
        literal: 'Incompleted',
        href: `/?filters=${SELECTED_FILTER.INCOMPLETED}`
    },
    [SELECTED_FILTER.COMPLETED]: {
        literal: 'Completed',
        href: `/?filters=${SELECTED_FILTER.COMPLETED}`
    },
}