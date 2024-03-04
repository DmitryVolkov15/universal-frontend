import './index.html';
import './index.scss';

import { universalObserver } from '../index';

let animate = new universalObserver.ScrollViewElementAnimation({ track: true, timeAnimate: 5 });

animate.slideFromLeft();
animate.opacityAnimate();




