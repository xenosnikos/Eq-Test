import { GET_INITIATOR_DETAIL } from '../constants'
import { INITIATOR_CODE } from '../constants'

const initialState = {
    data: '',
    code: '',
}

const initiatorDetail = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIATOR_DETAIL:
      return { ...state, data: action.data};
    case INITIATOR_CODE:
      return { ...state, code: action.data};
    default:
      return state;
  }
};

export default initiatorDetail;