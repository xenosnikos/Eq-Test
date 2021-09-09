import {GET_INITIATOR_DETAIL} from '../constants';
import {INITIATOR_CODE} from '../constants';

export const get_initiator_detail = (data) =>{
    return{
        type: GET_INITIATOR_DETAIL,
        data: data,
    }
}

export const initiator_code = (code) =>{
    return{
        type: INITIATOR_CODE,
        data:code,
    }
}