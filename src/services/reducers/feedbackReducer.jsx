import { START_FEEDBACK_TEST, FEEDBACK_ANSWERS, REMOVE_FEEDBACK_ANSWERS } from '../constants';

const initialState = {
    questionData: [],
    currentQuestion: 0,
    answerData: []
}

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FEEDBACK_TEST:
      return { ...state, questionData: action.data, currentQuestion: action.current};
    case FEEDBACK_ANSWERS:
      return { ...state, answerData: [...state.answerData, action.data]};
    case REMOVE_FEEDBACK_ANSWERS:
      return {...state,answerData: state.answerData.filter((item, index) => index !== action.data)}
    default:
      return state;
  }
};

export default feedbackReducer;