import { INCREASE_LIKE_SUCCESS } from '../constants/actionTypes'

const initialState = 0

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_LIKE_SUCCESS: {
      return state + action.payload
    }
    default: {
      return state
    }
  }
}

export default likeReducer