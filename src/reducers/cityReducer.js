 // cityReducer.js

const initialState = {
    selectedCity: null,
    notSelected: []
};

const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CITY':
            return {
                ...state,
                selectedCity: action.payload
            };
        case 'UPDATE_NOT_SELECTED':
            return {
                ...state,
                notSelected: action.payload
            };
        default:
            return state;
    }
};

export default cityReducer;
