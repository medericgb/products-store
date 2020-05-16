const initialState = {
  fruits: [
    { key: 1, name: "Lemon", price: 3 },
    { key: 2, name: "Banana", price: 5 },
    { key: 3, name: "Coconut", price: 12 },
    { key: 4, name: "Papaya", price: 4 }
  ]
};

const reducer = (state = initialState, action) => {
  if (action.type === "DELETE") {
    return {
      ...state,
      fruits: state.fruits.filter(f => f.key !== action.key)
    };
  }
  return state;
};

// We can combine multiple reducers into one.

// import { combineReducers } from 'redux';
// const rootReducers({
//   aReducer,
//   anotherReducer,
//   someOtherReducer
// });

export default reducer;
