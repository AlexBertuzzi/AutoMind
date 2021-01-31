module.exports = function(req, res, next) {
  if (req.salesPerson) {
    return next();
  }
  return res.redirect("/");
};
