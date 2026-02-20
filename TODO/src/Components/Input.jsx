import React from "react";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegSave } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { useTodo } from "../Context/TodoContext";

function Input({ onChange, onClick, onToggle, userInput }) {

    const {
        todo,
        deleteTodo,
        editTodo,
        saveTodo,
        updateTitle,
    } = useTodo();

    return (
        <div className="w-2/3 border-2 border-white h-2/3 rounded-lg flex flex-col items-center p-4">

            {/* Add new todo */}
            <div className="w-full mb-4 relative">
                <input
                    type="text"
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-100 text-sm border border-slate-200 rounded-md pl-3 pr-12 py-3"
                    placeholder="Note"
                    value={userInput}
                    onChange={(e) => onChange(e.target.value)}
                />

                <p
                    className="absolute right-0 top-0 bottom-0 w-10 bg-green-600 flex items-center justify-center text-white rounded-r-md cursor-pointer"
                    onClick={onClick}
                >
                    <IoMdAddCircle />
                </p>
            </div>

            {/* Todo list */}
            <div className="w-full flex flex-col gap-4 overflow-y-auto max-h-80 pr-1">
                {todo.map((i) => (
                    <div key={i.id} className="relative">

                        {i.isEditing ? (
                            <input
                                type="text"
                                value={i.title}
                                className="w-full bg-transparent text-slate-100 text-sm border border-blue-400 rounded-md pl-3 pr-20 py-3"
                                onChange={(e) => updateTitle(i.id, e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") saveTodo(i.id);
                                }}
                            />
                        ) : (
                                <p
                                    className={`w-full bg-transparent text-slate-100 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-3
  ${i.completed ? "line-through opacity-60" : ""}
  `}
                                >
                                    {i.title}
                                </p>
                        )}

                        <div className="absolute right-0 top-0 bottom-0 flex">

                            <button
                                className="w-10 bg-red-600 flex items-center justify-center text-white"
                                onClick={() => deleteTodo(i.id)}
                            >
                                <AiOutlineDelete />
                            </button>

                            {i.isEditing ? (
                                <button
                                    className="w-10 bg-green-600 flex items-center justify-center text-white"
                                    onClick={() => saveTodo(i.id)}
                                >
                                    <FaRegSave />
                                </button>
                            ) : (
                                <button
                                    className="w-10 bg-blue-600 flex items-center justify-center text-white"
                                    onClick={() => editTodo(i.id)}
                                >
                                    <FaPen />
                                </button>
                            )}

                            <div className="w-10 bg-gray-700 flex items-center justify-center text-white rounded-r-md">
                                <input
                                    type="checkbox"
                                    checked={i.completed}
                                    onChange={onToggle(i.id)}
                                />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Input;