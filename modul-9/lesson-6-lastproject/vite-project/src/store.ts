import { combineReducers, createStore } from "redux";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
    user: UserReducer
})

export const store = createStore(
    rootReducer
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch