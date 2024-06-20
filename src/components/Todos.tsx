import React from 'react'
import type { TodoType } from '../interfaces/todos.interface'
import Todo from './Todo'
import { useAutoAnimate } from '@formkit/auto-animate/react'

interface Props {
    todos: TodoType[]
    removeTodo: (id: number) => void
    changeCompletedTodo: (id: number, completed: boolean) => void
    handleEditTodo: (e: React.FormEvent<HTMLFormElement>, title: string, id: number) => void
}

const Todos = ({ todos, removeTodo, changeCompletedTodo, handleEditTodo }: Props) => {
    const [parent] = useAutoAnimate() /* Auto animate */
    return (
        <ul ref={parent} className='grid justify-items-center items-center border-[1px] bg-purple-900 border-purple-500 py-8 px-12 mt-12 gap-8'>
            {
                todos.length <= 0 ? <span className='text-purple-500 text-2xl'>You dont have any todos.</span> : (
                    todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            title={todo.title}
                            isCompleted={todo.completed}
                            removeTodo={removeTodo}
                            changeCompletedTodo={changeCompletedTodo}
                            handleEditTodo={handleEditTodo}
                            id={todo.id} />
                    ))
                )
            }
        </ul>
    )
}

export default Todos
