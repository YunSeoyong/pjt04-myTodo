import { useCallback, useReducer, useRef } from "react";

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
} | {
    type: 'TOGGLEDONE';
    id: number;
} | {
    type: 'EDIT';
    id: number;
    newContent: string;
}

const reducer = (state: Todo[], action: Action) => {
    switch(action.type) {
        case 'CREATE': {
            return [action.data, ...state];
        }
        case 'DELETE': {
            return state.filter(todo => todo.id !== action.id);
        }
        case 'TOGGLEDONE': {
            return state.map(todo =>
                todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
            );
        }
        case 'EDIT': {
            return state.map(todo =>
                todo.id === action.id
                ? {...todo, content: action.newContent, date: new Date()}
                : todo
            )
        }
        default: return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, []);
    const idRef = useRef(0);

    const onCreateTodo = useCallback((
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
    }, []);

    const onDeleteTodo = useCallback((
        id: number
    ) => {
        dispatch ({
            type: 'DELETE',
            id: id,
        });
    }, []);

    const onToggleDone = useCallback((
        id: number
    ) => {
        dispatch ({
            type: 'TOGGLEDONE',
            id: id,
        });
    }, []);

    const onEditTodo = useCallback((
        id: number,
        newContent: string,
    ) => {
        dispatch ({
            type: 'EDIT',
            id,
            newContent,
        });
    }, [])

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
                        onToggleDone={onToggleDone}
                        onEditTodo={onEditTodo}
                    />
                )}
            </ul>
    	</div>
  	);
}

export default App;
