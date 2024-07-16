import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { Link, Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import userReducer from "../reducers/userReducer"

const createStorage = () => {
    const actualStorage = localStorage.getItem("user")
    if (!actualStorage) localStorage.setItem("user", JSON.stringify({name: "", username: "", tasks: []}))
  }

export const Layout = () => {
    const store = configureStore({reducer: userReducer})
    const location = useLocation()


    store.subscribe(() => {
        const state = store.getState()
        const serializedState = JSON.stringify(state)
        localStorage.setItem("user", serializedState)
    })

    useEffect(() => {
        createStorage()
      }, [])

    return(
        <>
            <Provider store={store} >
                <h1 className='text-5xl font-bold text-center py-10'>Tasks</h1>
                <nav className="flex justify-center">
                    <ul className="flex flex-row gap-2">
                        <li className={`rounded-lg font-bold flex align-center hover:bg-green-600 ${location.pathname === "/" ? "bg-green-600" : "bg-green-700"}`}>
                            <Link className="p-4" to={""}>Inicio</Link>
                        </li>
                        <li className={`rounded-lg font-bold flex align-center hover:bg-green-600 ${location.pathname === "/profile" ? "bg-green-600" : "bg-green-700"}`}>
                            <Link className="p-4" to={"profile"}>Perfil</Link>
                        </li>
                    </ul>
                </nav>

                <Outlet />
            </Provider>
        </>
    )
}