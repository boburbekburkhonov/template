import { errorHandlerError } from "../errors/errorHnadler.error.js"
import { read, write } from "../utils/FS.js"

export const getProfile = async (req, res, next) => {
  const info = await read('info.json')
  .catch(err => next(new errorHandlerError(err.message, 500)))

  if(info) res.render('index.ejs', {info})
}

export const postProfile = async (req, res, next) => {
  const { name, email, message } = req.filtered

  const allRequests = await read('requests.json')
  .catch(err => next(new errorHandlerError(err.message, 500)))

  if(allRequests) allRequests.push({id: allRequests.at(-1)?.id + 1 || 1, name, email, message})

  const newAllRequests = await write('requests.json', allRequests)
  .catch(err => next(new errorHandlerError(err.message, 500)))

  if(newAllRequests) res.send('Ok')
}