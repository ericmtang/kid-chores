import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { chores } from "./chores";
import { behaviors } from "./behaviors";
import { rewards } from "./rewards";
import { settings } from "./settings";
import { persistStore, persistCombineReducers } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const config = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
};

export const ConfigureStore = () => {
  const store = createStore(
    persistCombineReducers(config, {
      chores,
      behaviors,
      rewards,
      settings,
    }),
    applyMiddleware(thunk)
  );

  const persistor = persistStore(store);

  return { persistor, store };
};
