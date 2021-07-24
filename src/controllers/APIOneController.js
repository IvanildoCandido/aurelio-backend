const LogicalService = require('../services/LogicalService');

module.exports = {
  setUpper: (req, res) => {
    const { name, surname } = req.body;
    const nameUpper = LogicalService.putFirstLetterUpper(name);
    res.status(200).json({
      result: `${nameUpper} ${surname}`,
    });
  },
};
