import {combineReducers} from 'redux'
import {user} from './UserReducer'
import {movie} from './MovieReducer'

export const appReducer = combineReducers({
    user,
    movie 
})