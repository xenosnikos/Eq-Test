import { START_TEST } from '../constants'
import { INITIATOR_ANSWERS } from '../constants'
import { REMOVE_INITIATOR_ANSWERS } from '../constants';

const initialState = {
    questionData: [],
    currentQuestion: 0,
    answerData: []
}

const startReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TEST:
      return { ...state, questionData: action.data, currentQuestion: action.current};
    case INITIATOR_ANSWERS:
      return { ...state, answerData: [...state.answerData,action.data]};
    case REMOVE_INITIATOR_ANSWERS:
      return {...state,answerData: state.answerData.filter((item, index) => index !== action.data)}
    default:
      return state;
  }
};

export default startReducer;