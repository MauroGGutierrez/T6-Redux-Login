import actionsTypes from "../actions/actionsTypes";

// export const darkModeReducer = (state = { darkMode: null }, action) => {
  export const darkModeReducer = (state = { status: null }, action) => {
  switch (action.type) {
    case actionsTypes.ON_DARK_MODE:
      // return { darkMode: true };
      return { status: action.payload };
    case actionsTypes.OFF_DARK_MODE:
      // return { darkMode: false };
      return { status: action.payload };
    default:
      return state;
  }
  //nunca ponert fetch, calculos complejos, nada porque esta es una funcion pura -> es algo que hace solo una cosa, una sola tarea
};
