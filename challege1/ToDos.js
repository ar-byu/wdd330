// This module takes care of the creation of tasks, as well as the completion and delete buttons for each task

//import {setLocalStorage} from './ls.js'

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

    storeTask(newItem)

    let completedButton = createComplete(newItem)
    newLI.appendChild(completedButton)

    let deleteButton = createDelete()
    newLI.appendChild(deleteButton)
    taskList.appendChild(newLI)
}

function displayStoredTask(task) {
    let newLI = document.createElement('li')
    newLI.textContent = task.taskName
    if (task.completed === true) {
        newLI.setAttribute('class', 'complete')
    } else {
        newLI.setAttribute('class', 'complete')
    }
    let completedButton = createComplete(newLI)
    newLI.appendChild(completedButton)

    let deleteButton = createDelete()
    newLI.appendChild(deleteButton)
    taskList.appendChild(newLI)
}

function storeTask(newItem) {
    tasks.push(newItem)
    console.log(tasks)
    localStorage.setItem('toDoList', JSON.stringify(tasks))
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

function createDelete() {
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete-button')
    deleteButton.innerHTML = 'Delete'

    deleteButton.addEventListener('click', () => {
        deleteTask(deleteButton)
    })
    return deleteButton
}

// Function to mark a task as complete

function markComplete(button, newItem) {
    const identifier = newItem.id
    const index = tasks.findIndex(task => task.id === identifier)
    tasks[index].completed = true
    button.parentElement.removeAttribute('class', 'incomplete')
    button.parentElement.setAttribute('class', 'complete')
    localStorage.setItem('toDoList', JSON.stringify(tasks))
}

// Function to delete a task

function deleteTask(button, task) {
    button.parentElement.remove()
    tasks.pop(task)
    localStorage.setItem('toDoList', JSON.stringify(tasks))
}

// Exports necessary functions

export {newTask, displayStoredTask}