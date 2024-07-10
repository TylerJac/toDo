"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // Get the input element for adding a new todo item
    const todoInput = document.getElementById('todo-input');
    // Get the button element for adding a new todo item
    const addTodoButton = document.getElementById('add-todo');
    // Get the unordered list element that will contain the todo items
    const todoList = document.getElementById('todo-list');
    // Add a click event listener to the addTodoButton
    addTodoButton.addEventListener('click', () => {
        // Get the trimmed value of the todoInput element
        const todoText = todoInput.value.trim();
        // Check if the todoText is not an empty string
        if (todoText !== '') {
            // Create a new list item element
            const listItem = document.createElement('li');
            // Set the text content of the list item to the todoText
            listItem.textContent = todoText;
            // Add a click event listener to the list item
            listItem.addEventListener('click', () => {
                // Remove the list item from the todoList
                todoList.removeChild(listItem);
            });
            // Append the list item to the todoList
            todoList.appendChild(listItem);
            // Clear the value of the todoInput element
            todoInput.value = '';
        }
    });
});
