import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './RootReducer';

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    ((window as any)._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any)._REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose
));