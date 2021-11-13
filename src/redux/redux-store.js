import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {pokeReducer} from "./pokeReducer";

let reducers = combineReducers({
    pokePage: pokeReducer
})



//const store = createStore(reducers, applyMiddleware(thunkMiddleware) )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store