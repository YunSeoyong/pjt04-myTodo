import { useRef, useState } from "react";
import Button from "../elements/Button";
import styled from "styled-components";
import Items from "./Item";

interface Props {
    onCreateTodo: (text: string) => void;
}
const Editor = (props: Props) => {
    const [text, setText] = useState<string>('');

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const clickBtn = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        props.onCreateTodo(text);
        setText('');
    };
    return (
        <div className="Editor">
            <Form name="edit">
                    <input 
                        type="text"
                        value={text}
                        onChange={onChangeInput}
                        placeholder="할 일을 작성해주세요."
                        name={"edit"}
                    />
                    <Button 
                        text={"추가"}
                        type={"add"}
                        size={"medium"}
                        color={"white"}
                        click={clickBtn}
                        name={"edit"}
                    />
            </Form>
        </div>
    );
};

export default Editor;
const Form = styled.form`
    position: relative;
    min-width: 300px;
    width: 70vw;
    max-width: 500px;
    margin: 0 auto 40px auto;
    
    input{
        box-sizing: border-box;
        width: 100%;
        height: 45px;
        padding: 0 1.2rem;
        border-radius: 0.5rem;
        border: 1.5px solid var(--theme-color);
        font-size: var(--font-sm);
        color: var(--theme-dark);

        &::placeholder{
            color: var(--theme-color);
        }
        &:focus{
            outline: none;
        }
    }
    .Button{
        position: absolute;
        right: 0;
        top: 0;
    }
`;