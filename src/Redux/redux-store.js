import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;