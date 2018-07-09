

const initialState = {
    list: null,
    message: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "USER_FOUND": return Object.assign({}, state, {list: action.data, message: ''});

        case "USER_NOT_FOUND": return Object.assign({}, state, {list: [], message: 'No Such User'});

        case "FETCH_ERROR": return Object.assign({}, state, {list: [], message: `${action.err}`});

        case "NO_REPOS": return Object.assign({}, state, {list: [], message:`${action.userName} has no repos`});

        default: return state;  
    }
}

export default reducer; 
