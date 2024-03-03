import './index.html';
import './index.scss';

import universal from '../index';

let animate = new universal.ScrollViewElementAnimation({ track: true, timeAnimate: 5 })
animate.slideFromLeft();
animate.opacityAnimate();




