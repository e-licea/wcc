export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

export const initialState = {
    darkMode: false
} 

export const darkModeReducer = (state = initialState, action)=>{

    switch(action.type){
        case TOGGLE_DARK_MODE:
            return {...state, darkMode: action.payload}

        default: 
            return state
    }
}