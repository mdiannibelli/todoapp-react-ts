import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

interface Props {
    id: number
    title: string,
    isCompleted: boolean
    removeTodo: (id: number) => void
    changeCompletedTodo: (id: number, completed: boolean) => void
    handleEditTodo: (e: React.FormEvent<HTMLFormElement>, title: string, id: number) => void
}

const Todo = ({ id, title, isCompleted, removeTodo, changeCompletedTodo, handleEditTodo }: Props) => {
    const [isCompletedState, setIsCompletedState] = useState(isCompleted)
    const [hoverText, setHoverText] = useState<string | null>(null)
    const [modalEdit, setModalEdit] = useState(false)
    const [inputValue, setInputValue] = useState("")


    const handleCompleted = () => {
        setIsCompletedState(!isCompletedState)
        changeCompletedTodo(id, isCompletedState)
    }

    const handleMouseEnter = () => {
        setHoverText(isCompletedState ? 'To complete' : 'Completed')
    }

    const handleMouseLeave = () => {
        setHoverText(null)
    }
    return (
        <li className='flex justify-center gap-x-4 w-full items-center bg-purple-950 py-2 px-4'>
            <span className='text-xl font-bold text-white'>{id}.</span>
            {
                modalEdit ?
                    <form onSubmit={(e) => {
                        handleEditTodo(e, inputValue, id)
                        setModalEdit(false)
                    }}>
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder='Edit your task...'
                            className='h-12 w-full select-none outline-none bg-slate-800 border-[1px] border-purple-500 text-white p-2' />
                    </form>
                    :
                    <p className={`text-xl ml-4 w-full text-white ${isCompletedState && 'line-through'}`}>{title}</p>
            }
            <div className='flex gap-x-4'>
                <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleCompleted}
                    className={`border-[1.5px] rounded-xl w-64 py-1 ${isCompletedState ? 'text-green-500 border-green-500 hover:text-white hover:border-red-500 hover:bg-red-600' : 'text-red-500 border-red-500 hover:text-white hover:border-green-500 hover:bg-green-600'} my-2 duration-500`}>
                    {hoverText !== null ? hoverText : (isCompletedState ? 'Completed' : 'To complete')}</button>
                <button onClick={() => setModalEdit(!modalEdit)}><FaRegEdit size={30} className='text-purple-500' /></button>
                <button onClick={() => removeTodo(id)} className='text-white rounded-xl text-xs mt-8 flex gap-2 items-center w-full justify-end'><MdDelete />Delete task</button>
            </div>
        </li>
    )
}

export default Todo
