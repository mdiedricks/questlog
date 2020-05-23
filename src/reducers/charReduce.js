const charReducer = (state=[], action) => {
    switch(action.type){
        case 'ADD_CHAR':
            return state + 1;
        case 'DEL_CHAR':
            return state + 1;
        case 'EDIT_CHAR':
            return state + 1
        default:
            return state;
    }
}

export default charReducer