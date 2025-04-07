import { createStore } from "@reduxjs/toolkit";

const initialState = { value: true};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { ...state, value: !state.value };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;