export const UPDATE_TIME = 'UPDATE_TIME'

const today = new Date();

export const initialState = {
    date: `${today.getMonth()+1}-${today.getDate()}-${today.getFullYear()}`,
    weather: '0000',
    time: '00:00:00',
    dayOfWeek: 'Sunday'
    
} 

export const appReducer = (state = initialState, action)=>{

    switch(action.type){
        case UPDATE_TIME:
            return {...state, [action.payload.input]: action.payload.update}
        default: 
            return state
    }
}

