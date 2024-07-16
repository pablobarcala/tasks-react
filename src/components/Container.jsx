import { TaskItem } from "./TaksItem"
import { Form } from "./Form"
import { connect } from "react-redux"

const Container = ({tasks}) => {
    const completeTask = (task) => {
        return {
            type: "COMPLETE_TASK",
            task: task
        }
    }

    const addTask = (task) => {
        return {
            type: "ADD_TASK",
            task: task
        }
    } 

    const deleteTask = (task) => {
        return {
            type: "DELETE_TASK",
            task: task
        }
    }

    return(
        <div className="container max-w-2xl m-auto">
            <Form addTask={addTask} />
            <div className="flex flex-col gap-2 md:gap-5 my-10">
                {tasks.length === 0 
                ? 
                    <p className="text-center font-bold text-xl">*** No hay tareas ***</p> 
                :
                    tasks.map(task => (
                        <TaskItem completeTask={completeTask} deleteTask={deleteTask} key={task.id}>{task}</TaskItem>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (estado) => {
    return {tasks: estado.tasks}
}

export default connect(mapStateToProps)(Container)