import React from 'react'
import { type TodoType } from '../interfaces/todos.interface'
import Filters from './Filters'
import { SELECTED_FILTER } from '../consts/filters'

interface Props {
    todos: TodoType[]
    filterSelected: typeof SELECTED_FILTER[keyof typeof SELECTED_FILTER]
    handleFiltersChange: (filter: typeof SELECTED_FILTER[keyof typeof SELECTED_FILTER]) => void
    deleteAllCompletedTodos: () => void
}

const Footer = ({ todos, filterSelected, handleFiltersChange, deleteAllCompletedTodos }: Props) => {
    const getIncompletedTask = () => {
        const incompletedTodos = todos.filter(todo => todo.completed !== true)
        return incompletedTodos.length
    }

    return (
        <footer className='flex flex-col w-full h-full justify-center items-center bg-black mt-4'>
            <div className='h-0.5 max-w-[1024px] w-full bg-purple-500 mt-6 my-2' />
            <span className='text-lg font-thin text-purple-500'>
                <strong className='mr-2 font-semibold'>{todos.length}</strong>
                total tasks and <strong className='font-semibold'>{getIncompletedTask()}</strong> incompleted.
            </span>
            <Filters filterSelected={filterSelected} onFilterChange={handleFiltersChange} />
            <button onClick={deleteAllCompletedTodos} className='text-purple-500 border-[1px] py-1 px-2 rounded-md border-purple-500 my-4'>Delete all completed todos</button>
        </footer>
    )
}

export default Footer
