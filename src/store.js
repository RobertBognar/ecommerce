import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { saveState, loadState } from './localStorage';

const initialState = {};
const middleware = [thunk];
const persistedState = loadState();

const store = createStore(
    rootReducer,
    //initialState,
    persistedState,
    composeWithDevTools(applyMiddleware(
        ...middleware,
    ))
);

store.subscribe(() => {
    saveState({
        store: store.getState()
    });
});

export default store;
