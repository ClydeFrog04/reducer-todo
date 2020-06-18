import React from "react";
import {Card, CardTitle, CardText, Row, Col} from "reactstrap";
import "./TodoCard.css";
import {initialState, reducer} from "../reducers/reducer";


const TodoCard = ({dispatch, cardTitle, completed}) => {

    const toggleCompleted = () => {
        dispatch({type: "TOGGLE_COMPLETED", payload:cardTitle});
    }

    return (
        <div className="todoCard">
            <Row>
                <Col sm="3">
                    <Card color="success" onClick={toggleCompleted}>
                        <CardText
                            className={completed ? "linethrough" : ""}
                            style={{color: '#f1f1f1'}}>{cardTitle}</CardText>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}
export default TodoCard;