const counterReducer = (state, action) => { 
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'increment2':
            return state + action.payload;
        default:
            return state;
    }
}

export default counterReducer;