import { combineReducers } from "redux";
import { darkModeReducer } from "./themeReducers";
import { userLoginReducer } from "./userReducer";

const reducer = combineReducers({
  //lista de los reducers
  darkMode: darkModeReducer, //otra forma seria solo poner darkModeReducer solo porque es lo mismo darkModeReducer:darkModeReducer
  userLogin: userLoginReducer,
});

export default reducer;
