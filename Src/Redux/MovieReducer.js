const initialState= {
    movies : []
}
export const movie = (state = initialState, action) => {
    switch(action.type){
        case 'FILL_MOVIES':
            return {...state,movies:action.payload.movies}
        default : 
            return state
    }
}