import React, { useState } from 'react'
import todoData from './mocks/todos.json'
import Todos from './components/Todos'
import Footer from './components/Footer'
import { SELECTED_FILTER } from './consts/filters'
function App() {
  const [todos, setTodos] = useState(todoData.todos)
  const [filters, setFilters] = useState<typeof SELECTED_FILTER[keyof typeof SELECTED_FILTER]>(SELECTED_FILTER.ALL)
  const [inputValue, setInputValue] = useState("")

  const removeTodo = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const changeCompletedTodo = (id: number, completed: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !completed }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const deleteAllCompletedTodos = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleFiltersChange = (filter: typeof SELECTED_FILTER[keyof typeof SELECTED_FILTER]) => {
    setFilters(filter)
  }

  const createNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const lastIdTodo = todos.findLastIndex(todo => todo.id) + 2
    const newTodo = {
      title: inputValue,
      id: lastIdTodo,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const handleEditTodo = (e: React.FormEvent<HTMLFormElement>, title: string, id: number) => {
    e.preventDefault()
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter((todo) => {
    if (filters === SELECTED_FILTER.COMPLETED) return todo.completed
    if (filters === SELECTED_FILTER.INCOMPLETED) return !todo.completed
    return todo
  })



  return (
    <>
      <main className='flex items-center flex-col bg-black'>
        <div className="absolute inset-0 -z-10 items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        <div className='mt-16'>
          <h1 className='text-6xl uppercase font-medium tracking-widest text-white'>Daily tasks!</h1>
        </div>
        <form onSubmit={createNewTodo} className='mt-8 w-full max-w-[1280px]'>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className='h-12 w-full select-none outline-none bg-slate-800 border-[1px] border-purple-500 text-white p-2'
            placeholder='Add a new task that you need to complete...' />
        </form>
        <section className='w-full px-24'>
          <Todos
            todos={filteredTodos}
            removeTodo={removeTodo}
            changeCompletedTodo={changeCompletedTodo}
            handleEditTodo={handleEditTodo} />
        </section>
        <Footer
          todos={todos}
          handleFiltersChange={handleFiltersChange}
          filterSelected={filters}
          deleteAllCompletedTodos={deleteAllCompletedTodos} />
      </main>
    </>
  )
}

export default App
