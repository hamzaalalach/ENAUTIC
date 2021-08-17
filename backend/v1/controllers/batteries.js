const { getBatteries } = require('../store');

exports.getBatteriesSoc = (req, res) => {
  const batteries = getBatteries();

  res.status(200).json({
    success: true,
    data: batteries,
    count: batteries.length
  });
};
