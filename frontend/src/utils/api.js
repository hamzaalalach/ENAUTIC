export const getSpeed = () =>
  fetch('http://127.0.0.1:8080/api/v1/sensor/speed').then(res => res.json()).then(data => data.data.pop());

export const getBattery = () =>
  fetch('http://127.0.0.1:8080/api/v1/battery/soc').then(res => res.json()).then(data => data.data.pop());
