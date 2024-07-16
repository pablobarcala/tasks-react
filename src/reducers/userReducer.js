function initialUser(){
    const newUser = JSON.parse(localStorage.getItem("user")) || {name: "", username: "", tasks: []}
    return newUser
}

function userReducer(user = initialUser(), action) {
    switch(action.type){
        case "UPDATE_USER":
            return {...user, ...action.user}
        case "COMPLETE_TASK":
            return {...user, tasks: user.tasks.map(t => t.id === action.task.id ? {...t, completed: !t.completed} : t)}
        case "ADD_TASK":
            return {...user, tasks: [...user.tasks, action.task]}
        case "DELETE_TASK":
            return {...user, tasks: user.tasks.filter(t => t.id !== action.task.id)}
        default:
            return user
    }
}

export default userReducer