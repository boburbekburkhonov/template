import { Router } from 'express'
import { getProfile, postProfile } from '../controller/getProfile.js'
import { validate } from '../middleware/validate.js'
import { validation } from '../validation/validation.js'

const profileRouter = Router()

export default profileRouter
.get('/profile', getProfile)
.post('/profile/request', validate(validation), postProfile)