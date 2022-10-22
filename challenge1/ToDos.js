// This module takes care of the creation of tasks, as well as the completion and delete buttons for each task

//import {setLocalStorage} from './ls.js'
import {storeTask} from './ls.js'
import { getNumberOfTasks } from './utilities.js';

const tasks = []
const taskList = document.getElementById('task-list');

// Function to add a new task to the list

function newTask() {

    let taskValue = document.getElementById('task-input').value

    let newLI = document.createElement('li')
    newLI.textContent = taskValue

    newLI.setAttribute('class', 'incomplete')

    let newItem = {
        taskName: taskValue,
        id: Date.now(),
        completed: false,
    }

    storeTask(newItem, tasks)

    let completedButton = createComplete(newItem)
    newLI.appendChild(completedButton)

    let deleteButton = createDelete(newItem)
    newLI.appendChild(deleteButton)
    taskList.appendChild(newLI)
    getNumberOfTasks()
}

function displayStoredTask(task) {
    let newLI = document.createElement('li')
    newLI.textContent = task.taskName
    if (task.completed === true) {
        newLI.setAttribute('class', 'complete')
    } else {
        newLI.setAttribute('class', 'incomplete')
    }
    let completedButton = createComplete(task)
    newLI.appendChild(completedButton)

    let deleteButton = createDelete(task)
    newLI.appendChild(deleteButton)
    taskList.appendChild(newLI)
}

// Creates a completion button

function createComplete(newItem) {
    let completedButton = document.createElement('button')
    completedButton.setAttribute('class', 'completed-button')
    completedButton.innerHTML = 'Mark Completed'

    completedButton.addEventListener('click', () => {
        markComplete(completedButton, newItem)
    })
    return completedButton
}

// Creates a delete button

function createDelete(task) {
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete-button')
    deleteButton.innerHTML = 'Delete'

    deleteButton.addEventListener('click', () => {
        deleteTask(deleteButton, task)
    })
    return deleteButton
}

// Function to mark a task as complete

function markComplete(button, item) {
    const identifier = item.id
    const tasks = JSON.parse(localStorage.getItem('toDoList'))
    const index = tasks.findIndex(task => task.id === identifier)
    tasks[index].completed = true
    button.parentElement.removeAttribute('class', 'incomplete')
    button.parentElement.setAttribute('class', 'complete')
    localStorage.setItem('toDoList', JSON.stringify(tasks))
    getNumberOfTasks()
}

// Function to delete a task

function deleteTask(button, item) {
    const identifier = item.id
    const tasks = JSON.parse(localStorage.getItem('toDoList'))
    const index = tasks.findIndex(task => task.id === identifier)
    if (index >= 0)
    {button.parentElement.remove()
    tasks.splice(index, 1)
    localStorage.setItem('toDoList', JSON.stringify(tasks))
    getNumberOfTasks()
    }
}

// Exports necessary functions

export {newTask, displayStoredTask}