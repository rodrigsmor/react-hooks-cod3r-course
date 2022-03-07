export default function userReducers(state, action) {
    switch(action.type) {
        case 'login':
            return { ...state, user: { name: action.payload } }
        break;

        default:
            return state;
    }
}