import { START_FEEDBACK_TEST, FEEDBACK_ANSWERS } from '../constants';
import { REMOVE_FEEDBACK_ANSWERS } from '../constants';


export const startFeedbackTest = (data, no) =>{
    return{
        type: START_FEEDBACK_TEST,
        data:data,
        current:no
    }
}

export const feedbackAnswers = (payload) =>{
    return{
        type: FEEDBACK_ANSWERS,
        data: payload
    }
}

export const removeAnswers = (data) => {
    return {
        type: REMOVE_FEEDBACK_ANSWERS,
        data:data
    }
}