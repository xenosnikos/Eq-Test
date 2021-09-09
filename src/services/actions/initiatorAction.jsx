import { START_TEST } from '../constants';
import { INITIATOR_ANSWERS } from '../constants';
import { REMOVE_INITIATOR_ANSWERS } from '../constants';

export const startTest = (data, no) =>{
    return{
        type: START_TEST,
        data:data,
        current:no
    }
}

export const initiatorAnswers = (data) =>{
    return{
        type: INITIATOR_ANSWERS,
        data:data,
    }
}

export const removeAnswers = (data) => {
    return {
        type: REMOVE_INITIATOR_ANSWERS,
        data:data
    }
}