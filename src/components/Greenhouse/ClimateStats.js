import { ClimateHook } from '../../context/ClimateContext';
import './ClimateStats.css';

function ClimateStats() {
  const {temp, humidity} = ClimateHook();

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temp}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;
