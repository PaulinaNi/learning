const addTaskBtn = document.getElementById('addTaskBtn')
const addTaskSection = document.querySelector('.addTaskSection')

const addTask = () => {
 const input = document.createElement('input')

 //input handling
 addTaskSection.append(input)
 input.addEventListener('input', (event) => {
  event.preventDefault()
 })

}

addTaskBtn.addEventListener('click', addTask)