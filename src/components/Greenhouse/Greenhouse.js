import { useTheme } from '../../context/ThemeContext'

import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const { themeName } = useTheme();

  let image = dayImage;
  if (themeName === 'night') {image = nightImage}

  return (
    <section>
      <img  className='greenhouse-img'
            src={image}
            alt='greenhouse'
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
