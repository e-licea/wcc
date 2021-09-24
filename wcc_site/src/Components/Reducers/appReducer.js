export const UPDATE_TIME = 'UPDATE_TIME'

export const initialState = {
    date: '00-00-0000',
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