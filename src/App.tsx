import { useCallback, useEffect, useReducer, useRef } from "react";

import "./App.scss";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Item from "./components/Item";

import { Todo } from "./types/types";

const dummy: Todo[] = [
    {
        id: 0,
        content: "청소하기",
        date: new Date(2024, 1, 29),
        isDone: true
    },
    {
        id: 1,
        content: "스터디 모임",
        date: new Date(2024, 2, 1),
        isDone: false
    },
    {
        id: 2,
        content: "동네 뒷산 등산",
        date: new Date(2024, 2, 3),
        isDone: false
    },
]

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
    switch (action.type) {
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
                    ? { ...todo, content: action.newContent, date: new Date() }
                    : todo
            )
        }
        default: return state;
    }
}

function App() {
    const [todos, dispatch] = useReducer(reducer, dummy);
    const idRef = useRef(3);

    const onCreateTodo = useCallback((
        text: string,

    ) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: idRef.current++,
                content: text,
                date: new Date(),
                isDone: false
            },
        });
    }, []);

    const onDeleteTodo = useCallback((
        id: number
    ) => {
        dispatch({
            type: 'DELETE',
            id: id,
        });
    }, []);

    const onToggleDone = useCallback((
        id: number
    ) => {
        dispatch({
            type: 'TOGGLEDONE',
            id: id,
        });
    }, []);

    const onEditTodo = useCallback((
        id: number,
        newContent: string,
    ) => {
        dispatch({
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
