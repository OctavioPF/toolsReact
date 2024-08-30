// src/components/ToDoList.js
import React, { useState, useEffect } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      const updatedTasks = [...tasks, { text: newTask, completed: false }];
      setTasks(updatedTasks);
      setNewTask("");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todoList">
      <h2>To-Do List</h2>
      <div className="inputContainer">
        <input className="green-input"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="add-button" onClick={addTask}>Add</button>
      </div>
      <ul className="taskList">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task ${task.completed ? "completed" : ""}`}
          >
            <span
              className="taskText"
              onClick={() => toggleTask(index)}
            >
              {task.text}
            </span>
            <button
              className="deleteButton"
              onClick={() => deleteTask(index)}
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
