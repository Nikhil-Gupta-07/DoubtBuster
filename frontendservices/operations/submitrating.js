import { endpoints } from '../api'
import { setLoading, setToken } from '@/frontendservices/slices/authSlice'
import { apiConnector } from '../apiconnector'
import { useRouter } from 'next/navigation'

const {
  SENDOTP_API,
  SIGNUP_API,
  SIGNUP_APIi,
  LOGIN_API,
  LOGIN_APIi,
  CREATEQUESTION,
  GETSTUDENTDATA_API,
  USERTOEXPERTFEED_API,
  EXPERTTOUSERFEED_API,
} = endpoints

export function submitRating(userId, expertId, feedback, rating) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))

      const response = await apiConnector('POST', USERTOEXPERTFEED_API, {
        userId,
        expertId,
        feedback,
        rating,
      })
      console.log('SENDOTP API RESPONSE............', response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
    } catch (err) {
      console.log(err)
    }
    dispatch(setLoading(false))
  }
}
export function submitRatingtoUser(userId, expertId, feedback, rating) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true))

      const response = await apiConnector('POST', EXPERTTOUSERFEED_API, {
        userId,
        expertId,
        feedback,
        rating,
      })
      console.log('SENDOTP API RESPONSE............', response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
    } catch (err) {
      console.log(err)
    }
    dispatch(setLoading(false))
  }
}
