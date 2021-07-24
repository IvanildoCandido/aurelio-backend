const LogicalService = require('../services/LogicalService');

module.exports = {
  uniqueValues: (req, res) => {
    const { values } = req.body;
    const uniqueValues = LogicalService.removeRepeat(values);
    res.status(200).json({
      uniqueValues,
    });
  },
};
