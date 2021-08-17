import { getBattery, getSpeed } from './utils/api';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    getBattery().then(setBattery);
    getSpeed().then(setSpeed);
  }, []);

  const [ battery, setBattery ] = useState({});
  const [ speed, setSpeed ] = useState({});

  return (
    <div className="App">
      <table>
        <tr>
          <th>Time</th>
          <th>Battery</th>
          <th>Speed</th>
        </tr>
        <tr>
          <td>{new Date(battery.timestamp).toString()}</td>
          <td style={{ backgroundColor: battery.batteryPercentage <= 25 ? 'red' : 'white' }}>
            {battery.batteryPercentage}
          </td>
          <td>{speed.speed}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
