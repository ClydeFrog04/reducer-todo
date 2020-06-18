export const initialState = [
    {
        item: 'Learn about reducers',
        completed: true,
        id: 3892987589
    },
    {
        item: 'Finish this project',
        completed: false,
        id: 3892987588
    }
];

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log("Reducer add todo called");
            console.log([...state, {item:action.payload, completed: false, id:Date.now()}]);
            return [...state, {item:action.payload, completed: false, id:Date.now()}];
        case "TOGGLE_COMPLETED":
            return state.map(todoItem =>{
                //if(todoItem.item === action.payload) todoItem.completed = !todoItem.completed;//couldn't think of a better way to decide which item to complete
            });
            //return [...state, {item:action.payload, completed: true, id:Date.now()}];
        default:
            return state;

    }
};