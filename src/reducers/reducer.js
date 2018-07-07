

const initialState = {
    list: null,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "USER_FOUND": return Object.assign({}, state, {list: action.data, message: ''});

        case "USER_NOT_FOUND": return Object.assign({}, state, {list: [], message: 'No Such User'});

        case "NO_REPOS": return Object.assign({}, state, {list: [], message:"No Repos for this User"});

        default: return state;  
    }
}

export default reducer; 
