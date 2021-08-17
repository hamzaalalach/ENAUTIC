const cron = require('node-cron');
const { addSpeed, addBattery } = require('../v1/store');
const internals = {};

internals.generateSpeed = () => {
  const speedPayload = {
    speed: Math.ceil(Math.random() * 80),
    timestamp: Date.now()
  };

  addSpeed(speedPayload);
};

internals.generateBatteryPercentage = () => {
  const batteryPayload = {
    batteryPercentage: Math.ceil(Math.random() * 100),
    timestamp: Date.now()
  };

  addBattery(batteryPayload);
};

module.exports = () => {
  cron.schedule('*/2 * * * * *', internals.generateSpeed);
  cron.schedule('*/2 * * * * *', internals.generateBatteryPercentage);
};
