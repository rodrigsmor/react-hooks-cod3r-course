import numberReducers from "./number";
import userReducers from "./user";

export default function reducers(state, action) {
    let newState = numberReducers(state, action);
    return userReducers(newState, action);
}