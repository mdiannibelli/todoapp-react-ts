import React from 'react'
import { FILTER_BUTTONS, SELECTED_FILTER } from '../consts/filters'

interface Props {
    filterSelected: typeof SELECTED_FILTER[keyof typeof SELECTED_FILTER]
    onFilterChange: (filter: typeof SELECTED_FILTER[keyof typeof SELECTED_FILTER]) => void
}

const Filters = ({ filterSelected, onFilterChange }: Props) => {
    return (
        <ul className='flex gap-x-4 mt-2'>
            {
                Object.entries(FILTER_BUTTONS).map(([key, { literal, href }]) => {
                    return (
                        <li key={key}>
                            <a
                                href={href}
                                className={`${filterSelected === key ? 'px-2 py-1 border-[1px] border-purple-500 rounded' : ''} text-purple-500`}
                                onClick={(e) => {
                                    e.preventDefault()
                                    onFilterChange(key as typeof SELECTED_FILTER[keyof typeof SELECTED_FILTER])
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
            {/* <li>
                <a
                    className={`${filterSelected === 'all' ? 'underline' : ''}`}
                    onClick={() => onFilterChange('all')}
                >Todos</a>
            </li>
            <li>
                <a
                    className={`${filterSelected === 'incompleted' ? 'underline' : ''}`}
                    onClick={() => onFilterChange('incompleted')}
                >Incompleted</a>
            </li>
            <li>
                <a
                    className={`${filterSelected === 'completed' ? 'underline' : ''}`}
                    onClick={() => onFilterChange('completed')}
                >Completed</a>
            </li> */}
        </ul>
    )
}

export default Filters
