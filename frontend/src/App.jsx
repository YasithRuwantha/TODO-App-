import React, { useEffect, useState } from "react";
import axios from "axios";
import Board from "./components/Board";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const API = "http://localhost:5000/api/todos";

  const fetchTodos = async () => {
    try {
      const res = await axios.get(API);
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async () => {
    if (!title.trim()) return alert("Title required");

    try {
      await axios.post(API, { title, description });
      setTitle("");
      setDescription("");
      fetchTodos();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold text-center mb-6">
    Task Board
  </h1>

  
  <div className="flex justify-center gap-3 mb-8">
  <input
    className="border p-3 rounded-lg w-52 shadow"
    placeholder="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <input
    className="border p-3 rounded-lg w-72 shadow"
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
  <button
    className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
    onClick={addTodo}
  >
    Add Task
  </button>
</div>

  <Board todos={todos} refresh={fetchTodos} />
</div>
  );
}

export default App;