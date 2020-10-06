import { applyMiddleware, createStore, compose } from "redux";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

const middlewares = [];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

export { store, persistor };
