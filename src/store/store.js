import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default () => {
    const store = createStore(
        combineReducers({
           REDUCER_NAME : IMPORT_REDUCER,
        }), applyMiddleware(thunk, logger)
    );
    return store;
};