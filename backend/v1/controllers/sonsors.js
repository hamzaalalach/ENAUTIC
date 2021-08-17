const { getSpeeds } = require('../store');

exports.getSensorSpeeds = (req, res) => {
  const speeds = getSpeeds();

  res.status(200).json({
    success: true,
    data: speeds,
    count: speeds.length
  });
};
