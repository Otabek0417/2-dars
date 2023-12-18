const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const applyMiddleWare = redux.applyMiddleware;
const logger = require("redux-logger").createLogger();
const reduxLogger = applyMiddleWare(logger);
// store
const initialState = {
  lavash: 10,
  shaurma: 20,
};

// actions create
const LAVASH_INCREASE = "LAVASH_INCREASE";
const LAVASH_DECREASE = "LAVASH_DECREASE";
const SHAURMA_INCREASE = "SHAURMA_INCREASE";
const SHAURMA_DECREASE = "SHAURMA_DECREASE";

const lavashIncrease = (qty = 1) => {
  return {
    type: LAVASH_INCREASE,
    payload: qty,
  };
};

const lavashDecrease = (qty = 1) => {
  return {
    type: LAVASH_DECREASE,
    payload: qty,
  };
};

const shaurmaIncrease = (qty = 1) => {
  return {
    type: SHAURMA_INCREASE,
    payload: qty,
  };
};
const shaurmaDecrease = (qty = 1) => {
  return {
    type: SHAURMA_DECREASE,
    payload: qty,
  };
};

const lavashReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LAVASH_INCREASE:
      return { ...state, lavash: state.lavash + payload };
    case LAVASH_DECREASE:
      return { ...state, lavash: state.lavash - payload };
    default:
      return state;
  }
};

const shaurmaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHAURMA_INCREASE:
      return { ...state, shaurma: state.shaurma + payload };
    case SHAURMA_DECREASE:
      return { ...state, shaurma: state.shaurma - payload };
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  lavash: lavashReducer,
  shaurma: shaurmaReducer,
});

const store = createStore(rootReducer, reduxLogger);

const subscribe = store.subscribe(() => console.log(store.getState()));

const actions = bindActionCreators(
  { lavashIncrease, lavashDecrease, shaurmaIncrease, shaurmaDecrease },
  store.dispatch
);

actions.lavashIncrease(2);

subscribe();
