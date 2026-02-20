import { useEffect, useState } from "react";
import Input from "./Components/Input";
import { TodoProvider } from "./Context/TodoContext";

function App() {
  const [todo, setTodo] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Load todos
  useEffect(() => {
    const storedTodo = localStorage.getItem("todo");
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);

  // Save todos
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  // Add
  const addTodo = () => {
    if (userInput.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        title: userInput,
        completed: false,
        isEditing: false,
      };

      setTodo(prev => [...prev, newTodo]);
      setUserInput("");
    }
  };

  // Update title while typing
  const updateTitle = (id, newTitle) => {
    setTodo(prev =>
      prev.map(t =>
        t.id === id ? { ...t, title: newTitle } : t
      )
    );
  };

  // Enable edit mode
  const editTodo = (id) => {
    setTodo(prev =>
      prev.map(t =>
        t.id === id ? { ...t, isEditing: true } : t
      )
    );
  };

  // Save (disable edit mode)
  const saveTodo = (id) => {
    setTodo(prev =>
      prev.map(t =>
        t.id === id ? { ...t, isEditing: false } : t
      )
    );
  };

  // Delete
  const deleteTodo = (id) => {
    setTodo(prev => prev.filter(t => t.id !== id));
  };

  // Toggle completed
  const toggleCompleted = (id) => (e) => {
    setTodo(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: e.target.checked } : t
      )
    );
  };

  const handleInputChange = (value) => {
    setUserInput(value);
  };

  return (
    <TodoProvider
      value={{
        todo,
        addTodo,
        deleteTodo,
        editTodo,
        saveTodo,
        updateTitle,
        toggleCompleted
      }}
    >
      <div className="w-full mx-auto h-screen absolute left-56 top-12">
        <Input
          onChange={handleInputChange}
          onClick={addTodo}
          onToggle={toggleCompleted}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          saveTodo={saveTodo}
          updateTitle={updateTitle}
          userInput={userInput}
        />
      </div>
    </TodoProvider>
  );
}

export default App;