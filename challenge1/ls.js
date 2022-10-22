function storeTask(newItem) {
    let tasks = JSON.parse(localStorage.getItem('toDoList') || "[]")
    tasks.push(newItem)
    console.log(tasks)
    localStorage.setItem('toDoList', JSON.stringify(tasks))
}

export {storeTask}