import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button, Card} from "reactstrap";

const TodoForm = ({dispatch, state}) => {

    const [todoItem, setTodoItem] = useState("");

    const submitItem = e => {
        e.preventDefault();
        if(todoItem) {
            dispatch({type: "ADD_TODO", payload: todoItem});
            clearForm();
        }
    }
    const handleChange = e => {
        setTodoItem(e.target.value);
    }
    const clearForm = () =>{
        setTodoItem("");
    }

    return (
        <div className="todoForm">
            <Card style={{padding: "10px"}} color="secondary">
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
                <Button color="success">Submit</Button>
            </Form>
            </Card>
        </div>
    );
}

export default TodoForm;