function errorHandler(err, req, res, next) {
  console.log(err)
  switch (err.name) {
      
      default:
          let status = err.status || 500
          let message = err.message || 'internal server error'
          res.status(status).json({ message })
  }
}

module.exports = errorHandler
