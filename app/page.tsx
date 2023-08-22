'use client'

import React, {ChangeEvent, useState} from "react"
import NewTodo from "@/components/NewTodo"
import TodoList from "@/components/TodoList"
import {Todo} from "@/components/Todo"

export default function Home() {
    const [inputVal, setInputVal] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([])
    const [id, setId] = useState<number>(1)

    const todoChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputVal(event.target.value);
    }

    const handleClick = () => {
        console.log("hi")
        setTodos([...todos, {val: inputVal, isDone: false, id: id}])
        setId(id + 1)
        setInputVal("")
    }

  return (
    <>
        <NewTodo input={inputVal} onChange={todoChangeHandler} onClick={handleClick}/>
        <TodoList todos={todos}/>
    </>
  )
}
