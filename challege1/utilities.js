// This module handles the sort buttons and the add button. It also displays the amount of tasks in the list.

// Imports necessary variables and functions
import {newTask} from './ToDos.js';
import { renderTasks } from './ls.js';

// Initializes variables for each button, the task list, and the place where the amount of tasks will be displayed
const addTaskButton = document.getElementById('add-task')
const showAllTasks = document.getElementById('all-button')
const showActiveTasks = document.getElementById('active-tasks')
const showFinishedTasks = document.getElementById('completed-tasks')
const taskList = document.getElementById('task-list')
const numberOfTasks = document.getElementById('tasks-left')

document.addEventListener('DOMContentLoaded', () => {
    console.log("Got to here") 
    renderTasks()
})


// Adds event listener to the "+" button
addTaskButton.addEventListener('click', () => {
    newTask()
})

// Adds event listener to the "All Tasks" button
showAllTasks.addEventListener('click', () => {

    // Gets all tasks
    let allTasks = taskList.querySelectorAll('li')

    // Shows all tasks
    allTasks.forEach(task => {
        task.style.display = 'block'
    })
})

// Adds event listener to the "Active" button
showActiveTasks.addEventListener('click', () => {

    // Gets both the complete and incomplete tasks
    let activeTasks = taskList.querySelectorAll('.incomplete')
    let finishedTasks = taskList.querySelectorAll('.complete')

    // Shows the active tasks if they were previously hidden
    activeTasks.forEach(task => {
        task.style.display = 'block'
    })

    // Hides completed tasks
    finishedTasks.forEach(task => {
        task.style.display = 'none'
    })

})

// Adds event listener to the "Completed" button
showFinishedTasks.addEventListener('click', () => {

    // Gets both the complete and incomplete tasks
    let activeTasks = taskList.querySelectorAll('.incomplete')
    let finishedTasks = taskList.querySelectorAll('.complete')

    // Shows the completed tasks if they were previously hidden
    finishedTasks.forEach(task => {
        task.style.display = 'block'
    })

    // Hides unfinished tasks
    activeTasks.forEach(task => {
        task.style.display = 'none'
    })
})

// Shows the amount of tasks in the list

if (taskList.length === 0) {
    numberOfTasks.textContent = '0'
} else {numberOfTasks.textContent = document.querySelectorAll('.incomplete').length}