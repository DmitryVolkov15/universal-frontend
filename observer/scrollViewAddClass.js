"use strict"

class ScrollViewAddClass {

    constructor({ targetElement, activeClass, viewElement = 0, timeAnimate = 1, track = false, warn = false } = {}) {
        this.targetElement = targetElement;
        this.activeClass = activeClass;
        this.viewElement = viewElement;
        this.timeAnimate = timeAnimate;
        this.track = track;
        this.warn = warn;
        this.warns = [];
    }

    addClass() {

        let { targetElement, activeClass, viewElement, timeAnimate, track, warn } = this;

        //проверка элемент или присвоение
        targetElement = targetElement ?? 'scroll-animate';
        activeClass = activeClass ?? 'active-animate';

        //обращаемся к элементам
        let animateElements = document.querySelectorAll(`.${targetElement}`);

        //область видимости элемента для срабатывания
        viewElement = this.viewElementMethod(viewElement, warn) ?? viewElement;

        //добавление времени анимации
        timeAnimate = this.timeAnimateMethod(timeAnimate, warn) ?? timeAnimate;

        //наблюдатель за элементами
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(`${activeClass}`);
                    if (!track) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    entry.target.classList.remove(`${activeClass}`);
                }
            })
        }, { threshold: viewElement });

        if (animateElements.length > 0) {
            for (const animateElement of animateElements) {
                animateElement.style.transition = `${timeAnimate}s`;
                observer.observe(animateElement);
            }
        } else {
            if (warn) {
                this.warns.push('You fogot added class. Pass the class as the first parameter in scrollAppearAnimation.addClass((*)(2)(3)(4))');
                this.displayWarn();
            }
        }
    }

    viewElementMethod(viewElement, warn) {
        if (viewElement < 0 || viewElement > 1) {
            if (warn) {
                this.warns.push('The value "viewElement" must be between 0 and 1');
                this.displayWarn();
            }
            return viewElement = 0.1;
        }
    }

    timeAnimateMethod(timeAnimate, warn) {
        if (timeAnimate < 0 || timeAnimate > 10) {
            if (warn) {
                this.warns.push('The value "timeAnimate" must be between 0 and 10');
                this.displayWarn();
            }
            return timeAnimate = 1;
        }
    }

    //обработка пердупреждений
    displayWarn() {
        console.warn(this.warns.join('\n'));
    }
}

export default ScrollViewAddClass;