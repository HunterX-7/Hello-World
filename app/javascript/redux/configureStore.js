import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "../components/Greeting";

const rootReducer = {
    greetings: greetingReducer
}

const store = configureStore({reducer: rootReducer})

export default store;