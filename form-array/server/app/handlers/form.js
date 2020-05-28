// Handle Form
exports.handleForm = function (req, res) {
  res.json({
    data: {
      bank: req.body.bank,
      account: req.body.account,
      name: req.body.name
    }
  })
}
