import { useReducer, useRef, useState } from "react";

import "./App.scss";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Item from "./components/Item";

import { Todo } from "./types/types";

type Action = {
    type: 'CREATE';
    data: {
        id: number;
        content: string;
        date: Date;
        isDone: boolean;
    };
} | {
    type: 'DELETE';
    id: number;
}

const reducer = (state: Todo[], action: Action) => {
    switch(action.type) {
        case 'CREATE': {
            return [...state, action.data];
        }
        case 'DELETE': {
            return state.filter((it) => it.id !== action.id);
        }
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    const onCreateTodo = (
        text: string,
    ) => {
        dispatch ({
            type: 'CREATE',
            data: {
                id : idRef.current ++,
                content: text,
                date: new Date(),
                isDone: false
            },
        });
    };

    const onDeleteTodo = (
        id: number
    ) => {
        dispatch ({
            type: 'DELETE',
            id: id,
        });
    }

  	return (
    	<div className="App">
      		<Header />
      		<Editor 
                onCreateTodo={onCreateTodo}
            />
            <ul>
                {todos.map((todo) => 
                    <Item 
                        key={todo.id} {...todo}
                        onDeleteTodo={onDeleteTodo}
                    />
                )}
            </ul>
    	</div>
  	);
}

export default App;
