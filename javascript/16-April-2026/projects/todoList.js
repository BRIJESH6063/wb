

const form = document.querySelector('form') ;
const taskAddElement = document.getElementById('task') ;
const input = document.querySelector('input') ;

form.addEventListener('submit', (event) => {
  event.preventDefault() ;

  const text = input.value.trim() ;
  if(text==='') return ;


  const parent = document.createElement('div') ;

  const task = document.createElement('span') ;
  task.textContent = text ;
  task.style.fontSize = '24px' ;

  task.style.marginRight = '20px' ;

  const deleteButton = document.createElement('button') ;
  deleteButton.textContent = 'DELETE' ;
  deleteButton.style.width = '140px' ;
  deleteButton.style.marginRight = '10px' ;

  const doneButton = document.createElement('button') ;
  doneButton.textContent = 'DONE' ;
  doneButton.style.width = '90px' ;
  doneButton.style.marginRight = '10px' ;

  parent.append(task, deleteButton, doneButton ) ;

  const allTasks = document.getElementById('allTasks') ;
  allTasks.append(parent) ;


  deleteButton.addEventListener('click', () => {
    parent.remove() ;
  })

  doneButton.addEventListener('click', () => {
    task.style.textDecoration = 'line-through' ;
    doneButton.style.backgroundColor = 'green' ;
  })


  
})