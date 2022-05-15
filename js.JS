const addMessage = document.getElementById('message');
const addCard = document.getElementById('add');
addMessage.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
      document.getElementById("add").click();
      
  }
});
addCard.addEventListener('click', function(element) {
  const newCard = document.createElement('taskList');
  const newCardId = document.querySelectorAll('.card').length + 1;
  newCard.innerHTML = `
    <div 
      id='card-${newCardId}'
      class="card"
    >
      <div class='content'>
        <div id='card-date'>${new Date().toDateString()}</div>
        <div class='actions'>
         <button id='edit-${newCardId}' class='edit'>Edit</button>
         <button 
          id='delete-${newCardId}' 
          class='card__button-delete'
          >
          Delete
        </button>
        </div>
      </div>

      <div id='task_message-${newCardId}' contentEditable=false>${addMessage.value}</div>
    </div>
  `;
  document.body.append(newCard);

  const editCard = document.getElementById(`edit-${newCardId}`);
  editCard.addEventListener('click', function(event) {
    const editContent = document.getElementById(`task_message-${newCardId}`);
    editContent.contentEditable=true;
    editContent.focus()
  });

  const deleteCard = document.getElementById(`delete-${newCardId}`);

  deleteCard.addEventListener('click', function(element) {
    newCard.remove(element.target.id.split('-')[1]);
  });
let qwe = [{
  date:`${new Date().toDateString()}`, 
  text:`${addMessage.value}`,
}]
  const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(qwe));
  };
  
  message.value = '';
});
