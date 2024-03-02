
import { Todo } from "../types/types";
import Button from "../elements/Button";
import { useState } from "react";

interface Props extends Todo {
    onDeleteTodo: (id: number) => void;
}

const Item = (props: Props) => {
    const [done, setDone] = useState<boolean>(false);

    const clickBtnDel = () => {
        props.onDeleteTodo(props.id);
    };

    return (
        <li>
            <div className="contents">
                <div className="check">
                    <input 
                        type="checkbox"
                        id="done"
                        checked={props.isDone}
                        value={props.id}
                        placeholder="isDone"
                    />
                    <label htmlFor="done"></label>
                </div>
                <div className="memo">
                    <p className="text">{props.content}</p>
                    <p className="date">{props.date.toLocaleString()}</p>
                </div>
            </div>
            <div className="form">
                <Button 
                    text={"수정"}
                    type={"edit"}
                    size={"small"}
                    color={"edit"}
                    click={() => {}}
                    name={"edit"}
                />
                <Button 
                    text={"삭제"}
                    type={"delete"}
                    size={"small"}
                    color={"theme"}
                    click={clickBtnDel}
                    name={"delete"}
                />
            </div>
        </li>
    );
};

export default Item;