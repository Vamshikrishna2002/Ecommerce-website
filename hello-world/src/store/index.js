import {createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import mainReducer from '../reducer/mainreducer'

// import {composeWithDevTools} from 'redux-devtools-extension'

const store=createStore(mainReducer,
    {

    },
    applyMiddleware(thunk)
)
export default store