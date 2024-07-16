import { useState } from "react"
import { useDispatch } from "react-redux"

export const Form = ({addTask}) => {
    const [form, setForm] = useState({
        id: Date.now(),
        name: "",
        completed: false
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(addTask(form))
        setForm({
            id: Date.now(),
            name: "",
            completed: false
        })
    }

    return(
        <form onSubmit={handleSubmit} className="flex gap-5 flex-col md:flex-row mx-3 md:mx-0">
            <input
                onChange={handleChange} 
                value={form.name}
                className="w-full bg-transparent p-3 outline-none text-lg border-b-2 border-gray-600 focus:border-green-400" 
                type="text" 
                placeholder="Nueva tarea"
                name="name"
            />
            <button type="submit" className="bg-green-700 rounded-full p-4 m-auto md:m-0">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
            </button>
        </form>
    )
}