import { INCREASE_LIKE_SUCCESS } from '../constants/actionTypes'

const increaseLikeSuccess = () => ({
  type: INCREASE_LIKE_SUCCESS,
  payload: 1,
})

export {
  increaseLikeSuccess
}