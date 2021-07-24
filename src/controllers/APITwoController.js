const LogicalService = require('../services/LogicalService');

module.exports = {
  arraySum: (req, res) => {
    const { numbers } = req.body;
    const numbersSum = LogicalService.setSumOfNumbers(numbers);
    res.status(200).json({
      sum: `${numbersSum}`,
    });
  },
};
