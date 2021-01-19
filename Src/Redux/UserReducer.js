const initialState= {
    user : {
        name :'Hanzo'
    },
    status : false
}
export const user = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return {...state,user :action.payload.user }
        case 'CHANGE_STATUS':
            return {...state,status:action.payload.status}
        default : 
            return state
    }
}