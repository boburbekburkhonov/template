import http from 'http'

export const errorHandlerMiddleware = (err, req, res, next) => {
  if(process.env.node_env == 'development') {
    return res.json({
      message: err.message,
      status: err.status
    })
  }

  if(process.env.node_env == 'production') {
    return res.json({
      message: http.STATUS_CODES[err.status],
      status: err.status
    })
  }
}
