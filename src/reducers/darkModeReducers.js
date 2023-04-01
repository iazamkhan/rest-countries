const darkModeReducer = (state= false, action) => {
    switch(action.type) {
        case "MODE": return !state;
        default: return state;
    }
}

export default darkModeReducer;