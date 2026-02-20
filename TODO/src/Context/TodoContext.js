import { createContext, useContext } from "react";

const TodoContext = createContext({
    todo: [],
    addTodo: () => { },
    deleteTodo: (id) => { },
    editTodo: (id) => { },
    saveTodo: (id) => { },
    updateTitle: (id, newTitle) => { },
    toggleCompleted: (id) => { },
});

const useTodo = () => {
    return useContext(TodoContext);
};

const TodoProvider = TodoContext.Provider;

export { TodoContext, useTodo, TodoProvider };