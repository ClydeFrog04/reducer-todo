import React, {useReducer} from 'react';
import './App.css';
import TodoCard from "./components/TodoCard";
import {initialState, reducer} from "./reducers/reducer";
import TodoForm from "./components/TodoForm";
import {Row, Col, Button, Card} from "reactstrap";


function App() {
    //setup state in app
    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div className="App">
            <Row>
                <Col sm="12" md={{
                    size: 6,
                    offset: 3
                }}>{/*sm 12 means 12 divisions, not sure why we use md for the offset but it centers everything. taken from reactstrap layout docs*/}
                    <TodoForm state={state} dispatch={dispatch}/>
                    <Button color="success" style={{margin: "10px"}}
                            onClick={() => dispatch({type: "CLEAR_COMPLETED"})}>Clear Completed</Button>
                    {state.length > 0 ?
                    <Card color="secondary">
                        {state.map(todoItem => {
                            return <TodoCard dispatch={dispatch} key={todoItem.id} completed={todoItem.completed}
                                             cardTitle={todoItem.item}/>
                        })}
                    </Card> : null}
                </Col>
            </Row>
        </div>
    );
}

export default App;


/*
const Title = () => {
  // const [title, setTitle] = useState('Hello earthlings!');
  // const [editing, setEditing] = useState(false);

  const [newTitleText, setNewTitleText] = useState("");
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{" "}
          <i
            onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
            className="far fa-edit"
          />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: "UPDATE_TITLE", payload: newTitleText });
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;

 */