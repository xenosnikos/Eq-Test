import { combineReducers } from 'redux';
import initiatorReducer from "./initiatorReducer";
import feedbackReducer from "./feedbackReducer";
import initiatorDetail from "./initiatorDetail";

const rootReducer = combineReducers({
    initiatorReducer:initiatorReducer,
    feedbackReducer:feedbackReducer,
    initiatorDetail:initiatorDetail,
})

export default rootReducer;