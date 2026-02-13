import React, { useEffect, useState } from 'react'

type Todo = {

    userId: number;
    id: number;
    title: string;
    completed: string;
}

export const TodoList = () => {

    const [todolist, setTodoList] = useState<Todo[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        try {

            fetch('https://jsonplaceholder.typicode.com/todos/').then((res) => res.json())
                .then((data) => {
                    setTodoList(data)
                    console.log(data.length, 'api data')
                })

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }, [])

    return (
        <>
            <section className=' bg-dark'>

            </section>
        </>
    )

}

export default TodoList