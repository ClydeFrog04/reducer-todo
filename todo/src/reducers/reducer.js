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
            return [...state, {item:action.payload, completed: false, id:Date.now()}];
        case "TOGGLE_COMPLETED":
            return state.map(todoItem =>{
                if(todoItem.item === action.payload) return {...todoItem, completed: !todoItem.completed};
                return todoItem;
            });
        case "CLEAR_COMPLETED":
            return state.filter(todoItem => {
                console.log("Clear called");
                if(!todoItem.completed) return todoItem;
            });
        default:
            return state;

    }
};