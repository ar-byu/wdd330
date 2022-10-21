import { displayStoredTask } from "./ToDos"

const tasks = localStorage.getItem('toDoList')
console.log(tasks)
if (tasks)
    {let toDoItems = JSON.parse(tasks)
    toDoItems.forEach(task => {
    displayStoredTask(task)
    })
}

export {renderTasks}