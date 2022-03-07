export default function numberReducers(state, action) {
    switch(action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        break;

        case 'numberMulti7':
            return { ...state, number: state.number * 7 }
        break;

        case 'numberDiv25':
            return { ...state, number: state.number / 25 }
        break;

        case 'numberInt':
            return { ...state, number: parseInt(state.number) }
        break;

        case 'numberAddN':
            return { ...state, number: state.number + action.payload }
        break;

        default:
            return state;
    }
}