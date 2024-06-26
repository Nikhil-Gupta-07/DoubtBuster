import { Expert } from '@/model/expert'
import { User } from '@/model/user'
import mongoose from 'mongoose'
import { serialize } from 'cookie'
import jwt from 'jsonwebtoken'

export const cookieSetter = (res, token, set) => {
  res.setHeader(
    'Set-Cookie',
    serialize('token', set ? token : '', {
      path: '/',
      httpOnly: true,
      maxAge: set ? 15 * 24 * 60 * 60 * 1000 : 0,
    })
  )
  // console.log(token)
}

export const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET)
}

export const checkAuth = async (req, res, next) => {
  try {
    // Extracting JWT from request cookies, body, or header
    // console.log(req.headers.authorization)
    const token =
      req.headers.cookie ||
      req.body.token ||
      (req.headers.authorization &&
        req.headers.authorization.replace('Bearer ', ''))
    console.log(token)
    // If JWT is missing, return 401 Unauthorized response
    if (!token) {
      return res.status(401).json({ success: false, message: `Token Missing` })
    }

    try {
      // Verifying the JWT using the secret key stored in environment variables
      const tokenValue = token.split('=')[1]
      console.log(tokenValue, 'deepsenhaimaharaja')
      const decode = jwt.verify(tokenValue, process.env.JWT_SECRET)
      console.log('deepsen')
      // console.log(decode)
      // Storing the decoded JWT payload in the request object for further use
      req.user = decode

      console.log(decode.role, 'ky roll h bhai')
      if (decode.role == 'Student') {
        return await User.findById(decode.id)
      } else {
        return await Expert.findById(decode.id)
      }
    } catch (error) {
      // If JWT verification fails, return 401 Unauthorized response
      return res
        .status(401)
        .json({ success: false, message: 'Token is invalid' })
    }

    // If JWT is valid, move on to the next middleware or request handler
    // You don't need to call `next()` here since Next.js API routes don't use middleware
  } catch (error) {
    // If there is an error during the authentication process, return 401 Unauthorized response
    return res.status(401).json({
      success: false,
      message: `Something went wrong while validating the token`,
    })
  }
}
// export const cheackIdentity = (token) => {
//   const decode = jwt.verify(token, process.env.JWT_SECRET)
//   return decode.role
// }

export const checkExprt = async (req, res) => {
  const cookie = req.headers.cookie
  if (!cookie) return null
  const decoded = jwt.verify(token, process.env.JWT_Secret)
  return await Expert.findById(decoded._id)
}
