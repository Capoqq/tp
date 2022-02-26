import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import reducer from "./reducer";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["reducer"],
};
const rootReducer = combineReducers({ reducer });
const rootReducerPersist = persistReducer(rootPersistConfig, rootReducer);
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = createStore(
  rootReducerPersist,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store)
