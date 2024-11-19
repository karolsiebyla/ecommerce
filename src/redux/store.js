import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

const store = configureStore({
  reducer: reducers, // Importowane reducery
  devTools: true,    // Automatyczne wsparcie dla Redux DevTools
});

export default store;
