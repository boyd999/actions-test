document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-button");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", () => {
    const newItemText = todoInput.value.trim();

    if (newItemText !== "") {
      // Create a new list item element
      const listItem = document.createElement("li");
      listItem.textContent = newItemText;

      // Add it to the list
      todoList.appendChild(listItem);

      // Clear the input field for the next item
      todoInput.value = "";
    }
  });
});
