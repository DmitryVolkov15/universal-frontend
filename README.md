# universal-frontend

Universal-Frontend is my personal JavaScript library created to enhance my web development experience and streamline project work. It includes functions I frequently use when crafting web application interfaces, such as animations, class management, event handling, and more.

## installation
```bash
npm i universal-frontend
```

## Includes

Global object - universal;
Classes: scrollViewElementAnimation, ScrollViewAddClass

## Usage example

```javascript
import universal from "universal-frontend";

const animation = new universal.scrollViewElementAnimation();
animation.bottomAnimation();
```

```html
<div class="slide-from-bottom">Example</div>
```

### Object: `universal.scrollViewElementAnimation`

List of methods:
- `slideFromBottom()`
- `slideFromTop()`
- `slideFromRight()`
- `slideFromLeft()`
- `opacityAnimate()`

Accepts optional options:
- `targetElement`
- `animationShift`
- `opacity`
- `viewElement`
- `timeAnimate`
- `track`
- `warn`

Default classes:
- `.slide-from-top`
- `.slide-from-bottom`
- `.slide-from-left`
- `.slide-from-right`
- `.opacity`

### Object: `universal.scrollViewAddClass`

List of methods:
- `addClass()`

Accepts optional options:
- `targetElement`
- `activeClass`
- `viewElement`
- `timeAnimate`
- `track`
- `warn`

Default classes:
- `.scroll-animate`
- `.active-animate`


