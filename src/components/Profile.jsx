import { useState } from "react"
import { connect, useDispatch } from "react-redux"

const Profile = ({user}) => {
    const [editar, setEditar] = useState(null)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setEditar({...editar, [e.target.name]: e.target.value})
    }

    const handleUpdate = (e) => {
        e.preventDefault()

        dispatch({type: "UPDATE_USER", user: editar})
        setEditar(null)
    }

    return(
        <div className="container max-w-2xl m-auto">
            {editar === null
            ?
                <>
                    <h2 className="font-bold m-10">
                        <span className="font-bold text-green-500">Nombre: </span> 
                        {user.name === "" ? "-- Sin nombre --" : user.name}
                    </h2>
                    <h3 className="font-bold m-10">
                        <span className="font-bold text-green-500">Usuario: </span> 
                        {user.username === "" ? "-- Sin usuario --" : user.username}
                    </h3>
                    <button className="p-5 rounded-lg bg-green-700 font-bold mx-10" onClick={() => setEditar(user)}>Editar</button>
                </>
            :   
                <>
                    <h2 className="font-bold m-10">
                        <span className="font-bold text-green-500">Nombre: </span>
                        <input className="w-full bg-transparent p-3 outline-none text-lg border-b-2 border-gray-600 focus:border-green-400" type="text" value={editar.name} onChange={handleChange} name="name" />
                    </h2>
                    <h3 className="font-bold m-10">
                        <span className="font-bold text-green-500">Usuario: </span> 
                        <input className="w-full bg-transparent p-3 outline-none text-lg border-b-2 border-gray-600 focus:border-green-400" type="text" value={editar.username} onChange={handleChange} name="username" />    
                    </h3>
                    <div className="flex gap-2 align-center mx-10">
                        <button className="p-5 rounded-lg bg-green-700 font-bold" onClick={handleUpdate}>Guardar</button>
                        <button className="p-5 rounded-lg bg-green-700 font-bold" onClick={() => setEditar(null)}>Cancelar</button>
                    </div>
                </>
            }
        </div>
    )
}

const mapStateToProps = (estado) => {
    return {user: estado}
}

export default connect(mapStateToProps)(Profile)