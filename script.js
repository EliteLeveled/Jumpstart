document.addEventListener("DOMContentLoaded", function() {
  function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
      datetimeElement.textContent = now.toLocaleDateString('en-US', options);
    }
  }

  updateTime();
  setInterval(updateTime, 1000);

  const todoList = document.getElementById('todo-list');

  // Add a default bullet point (removed khud add karna hai baadmein if any issue)


  todoList.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // new line nhi insert karni
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const newListItem = document.createElement('li');
      newListItem.textContent = '• '; // Appending a new bullet point to every new item
      range.insertNode(newListItem);
      range.collapse(false); 
    }
  });


  todoList.addEventListener('input', function() {
    const listItems = this.querySelectorAll('li');
    listItems.forEach((item) => {
      if (item.textContent.trim() !== '' && !item.textContent.startsWith('•')) {
        item.textContent = `• ${item.textContent.trim()}`;
      }
    });
  });
});
