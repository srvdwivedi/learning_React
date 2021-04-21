const redux = require('redux');


//reducer

const counterReducer =  (state = { counter : 0 } , action) => {

    if(action.type === 'INCREMENT') {
        return {
            counter : state.counter + 1
        }

    }
    return state

}

//store
const store = redux.createStore(counterReducer);

//subscriber
const counterSubscriber = () => {
    const latestState = store.getState() 
    console.log(latestState);
}
 
store.subscribe(counterSubscriber);

//action dispatch

store.dispatch({type : 'INCREMENT'})