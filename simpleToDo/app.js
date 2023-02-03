const addTaskBtn = document.getElementById('addTaskBtn')
const addTaskSection = document.querySelector('.addTaskSection')
const addTaskInput = document.querySelector('.addTaskInput')
const taskListUL = document.querySelector('.taskListUL')

const taskArray = []

//remove all children from UL 
const removeAllTasks = () => {
 while (taskListUL.firstChild) {
  taskListUL.firstChild.remove()
 }
}

//function which will add all task from task array to DOM
const addTasksToDOM = (task, index) => {
 const taskLi = document.createElement('li')
 taskLi.textContent = task

 //add styles
 // taskLi.classList.add(`${index}`)

 //add delete button
 const btn = createDeleteBTN(index)
 taskLi.append(btn)

 //appent task to DOM
 taskListUL.append(taskLi)
}

//add all task to UL
const addTasksToUL = () => {
 taskArray.forEach((task, index) => addTasksToDOM(task, index))
}

//function to delete task
const deleteTask = (index) => {
 //delete task
 taskArray.splice(index, 1)
 //remove and add tasks again
 removeAllTasks()
 addTasksToUL()
}

//add btn to delete task when completed
const createDeleteBTN = (index) => {
 const deleteBTN = document.createElement('span')
 deleteBTN.textContent = 'Delete'
 deleteBTN.classList.add('deleteBTN')
 deleteBTN.id = `${index}`
 deleteBTN.addEventListener('click', () => deleteTask(index))
 return deleteBTN
}


//add task handler
const addTask = () => {

 //push task to array with all tasks 
 taskArray.push(addTaskInput.value)

 //clean input
 addTaskInput.value = ''

 //remove all task from dom
 removeAllTasks()

 //add all task to dom again with new task
 addTasksToUL()
}

addTaskBtn.addEventListener('click', addTask)

