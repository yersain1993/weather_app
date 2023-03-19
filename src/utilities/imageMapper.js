import cloudsImage from '../svg/disper_clouds/Frame.svg';
import stormImage from '../svg/storm/Frame.svg';
import drizzleImage from '../svg/drizzle/Frame.svg';
import cleanSkyImage from '../svg/sun/Frame.svg';
import rainImage from '../svg/rain/Frame.svg';
import cloudyImage from '../svg/clouds/Frame.svg';
import dispperCloudsImage from '../svg/sun_clouds/Frame.svg';

export const imageMapper = {
  nubes: cloudsImage,
  'llovizna ligera': drizzleImage,
  'cielo limpio': cleanSkyImage,
  'lluvia ligera': rainImage,
  tormenta: stormImage,
  'muy nuboso': cloudyImage,
  'algo de nubes': dispperCloudsImage,
};
