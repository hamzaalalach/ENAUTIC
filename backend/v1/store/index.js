const store = function() {
  let data = {
    speeds: [],
    batteries: []
  };

  const getSpeeds = () => {
    return data.speeds;
  };

  const getBatteries = () => {
    return data.batteries;
  };

  const addBattery = battery => {
    console.log('Battery received: ', battery);
    data.batteries.push(battery);
  };

  const addSpeed = speed => {
    console.log('Speed received: ', speed);
    data.speeds.push(speed);
  };

  return {
    getBatteries,
    getSpeeds,
    addBattery,
    addSpeed
  };
};

module.exports = store();
