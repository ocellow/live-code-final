function showError(err, req, res, next) {
  // console.log(err);
  if (err.status) {
    res.status(err.status).json(err.msg)
  // } else if () {
  }

  res.status(500).json(err)
}

module.exports = showError