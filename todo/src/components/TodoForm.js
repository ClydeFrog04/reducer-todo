import React, {useReducer, useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import {initialState, reducer} from "../reducers/reducer";

const TodoForm = ({dispatch, state}) => {

    const [todoItem, setTodoItem] = useState("");

    const submitItem = e => {
        e.preventDefault();
        dispatch({type:"ADD_TODO", payload:todoItem});
        clearForm();
    }
    const handleChange = e => {
        setTodoItem(e.target.value);
    }
    const clearForm = () =>{
        setTodoItem("");
    }

    return (
        <div className="todoForm">
            <Form onSubmit={submitItem}>
                <FormGroup>
                    <Label for="todoItem">Add Todo Item:</Label>
                    <Input
                        value={todoItem}
                        onChange={handleChange}
                        type="todoItem"
                        name="todoItem"
                        id="todoItem"
                        placeholder="todo..."/>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    );
}

export default TodoForm;