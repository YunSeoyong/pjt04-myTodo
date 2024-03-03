
import { Todo } from "../types/types";
import Button from "../elements/Button";
import React, { useState } from "react";

interface Props extends Todo {
    onDeleteTodo: (id: number) => void;
    onToggleDone: (id: number) => void;
    onEditTodo: (id: number, newContent: string) =>  void;
}

const Item = (props: Props) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [localContent, setLocalContent] = useState<string>(props.content);

    
    // 삭제버튼
    const clickBtnDel = () => {
        props.onDeleteTodo(props.id);
    };
    // 완료체크
    const handleToggleIsDone = () => {
        props.onToggleDone(props.id);
    }
    // 수정여부
    const toggleIsEdit = () => {setIsEdit(!isEdit)};
    // 수정취소
    const clickBtnEditQuit = () => {
        setIsEdit(false);
        setLocalContent(props.content);
    }
    // 수정완료
    const clickBtnEdit = () => {
        props.onEditTodo(props.id, localContent);
        toggleIsEdit();
    };

    return (
        <li>
            <div className="li_in">
                <div className="contents">
                    <div className="check">
                        <input 
                            type="checkbox"
                            id={`done-${props.id}`}
                            checked={props.isDone}
                            placeholder="isDone"
                            onChange={handleToggleIsDone}
                        />
                        <label htmlFor={`done-${props.id}`}></label>
                    </div>
                    <div className="memo">
                        {isEdit ? (
                            <>
                                <input
                                    type="text" 
                                    value={localContent}
                                    onChange={(e) => {setLocalContent(e.target.value)}}
                                    placeholder="수정할 내용을 입력해주세요."
                                />
                            </>
                        ) : (
                            <p className={props.isDone ? "text done" : "text"}>{props.content}</p>
                        )}
                        <p className="date">{props.date.toLocaleString()}</p>
                    </div>
                </div>
                <div className="form">
                    {isEdit ? (
                        <>
                            <Button 
                                text={"취소"}
                                type={"edit"}
                                size={"small"}
                                color={"edit"}
                                click={clickBtnEditQuit}
                                name={"edit"}
                            />
                            <Button 
                                text={"완료"}
                                type={"delete"}
                                size={"small"}
                                color={"theme"}
                                click={clickBtnEdit}
                                name={"delete"}
                            />
                        </>
                    ) : (
                        <>
                            <Button 
                                text={"수정"}
                                type={"edit"}
                                size={"small"}
                                color={"edit"}
                                click={toggleIsEdit}
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
                        </>
                    )}
                    
                </div>
            </div>
        </li>
    );
};

export default React.memo(Item);