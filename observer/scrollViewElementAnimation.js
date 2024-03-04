"use strict"

class ScrollViewElementAnimation {
    #targetElement;
    #animationShift;
    #opacity;
    #viewElement;
    #timeAnimate;
    #track;
    #warn;
    #warns;
    constructor({ targetElement, animationShift, opacity, viewElement = 0, timeAnimate = 1, track = false, warn = false } = {}) {
        this.#targetElement = targetElement;
        this.#animationShift = animationShift;
        this.#opacity = opacity;
        this.#viewElement = viewElement;
        this.#timeAnimate = timeAnimate;
        this.#track = track;
        this.#warn = warn;
        this.#warns = [];
    }

    slideFromTop() {

        let [targetElement, animationShift, viewElement, timeAnimate, track, warn] = [this.#targetElement, this.#animationShift, this.#viewElement, this.#timeAnimate, this.#track, this.#warn];

        //проверка элемент или присвоение
        targetElement = targetElement ?? 'slide-from-top';
        animationShift = animationShift ?? -75;

        //обращаемся к элементам
        let animateElements = document.querySelectorAll(`.${targetElement}`);

        // передано ли значение сдига?
        animationShift = this.#animationShifMethodMinus(animationShift, 0, -400, -150, warn) ?? animationShift;

        //область видимости элемента для срабатывания
        viewElement = this.#viewElementMethod(viewElement, warn) ?? viewElement;

        //добавление времени анимации
        timeAnimate = this.#timeAnimateMethod(timeAnimate, warn) ?? timeAnimate;

        //наблюдатель за элементами
        const observer = this.#observerTransformMethod(viewElement, `translateY(${animationShift}px)`, "translateY(0px)", track);


        //установка первоначального смешения элемента и добавление элементов в обработчик
        if (animateElements.length > 0) {
            for (const animateElement of animateElements) {
                animateElement.style.transform = `translateY(${animationShift}px)`;
                animateElement.style.transition = `${timeAnimate}s`;
                observer.observe(animateElement);
            }
        } else {
            if (warn) {
                this.#warns.push('You fogot added class. Pass the class as the first parameter in scrollAppearAnimation.topAnimation((*)(2)(3)(4))');
                this.#displayWarn();
            }
        }

    }

    slideFromBottom() {

        let [targetElement, animationShift, viewElement, timeAnimate, track, warn] = [this.#targetElement, this.#animationShift, this.#viewElement, this.#timeAnimate, this.#track, this.#warn];

        //проверка элемент или присвоение
        targetElement = targetElement ?? 'slide-from-bottom';
        animationShift = animationShift ?? 75;

        console.log(this)

        //обращаемся к элементам
        let animateElements = document.querySelectorAll(`.${targetElement}`);

        // передано ли значение сдвига?
        animationShift = this.#animationShifMethodPlus(animationShift, 0, 400, 150, warn) ?? animationShift;

        //область видимости элемента для срабатывания
        viewElement = this.#viewElementMethod(viewElement, warn) ?? viewElement;

        //добавление времени анимации
        timeAnimate = this.#timeAnimateMethod(timeAnimate, warn) ?? timeAnimate;
        //наблюдатель за элементами
        const observer = this.#observerTransformMethod(viewElement, `translateY(${animationShift}px)`, "translateY(0px)", track)


        //установка первоначального смешения элемента и добавление элементов в обработчик
        if (animateElements.length > 0) {
            for (const animateElement of animateElements) {
                animateElement.style.transform = `translateY(${animationShift}px)`;
                animateElement.style.transition = `${timeAnimate}s`;
                observer.observe(animateElement);
            }
        } else {
            if (warn) {
                this.#warns.push('You fogot added class. Pass the class as the first parameter in scrollAppearAnimation.bottomAnimation((*)(2)(3)(4))');
                this.#displayWarn();
            }
        }
    }

    slideFromLeft() {

        let [targetElement, animationShift, viewElement, timeAnimate, track, warn] = [this.#targetElement, this.#animationShift, this.#viewElement, this.#timeAnimate, this.#track, this.#warn];

        //проверка элемент или присвоение
        targetElement = targetElement ?? 'slide-from-left';
        animationShift = animationShift ?? -75;

        //обращаемся к элементам
        let animateElements = document.querySelectorAll(`.${targetElement}`);

        // передано ли значение сдвига?
        animationShift = this.#animationShifMethodMinus(animationShift, 0, -400, -150, warn) ?? animationShift;

        //область видимости элемента для срабатывания
        viewElement = this.#viewElementMethod(viewElement, warn) ?? viewElement;

        //добавление времени анимации
        timeAnimate = this.#timeAnimateMethod(timeAnimate, warn) ?? timeAnimate;

        //наблюдатель за элементами
        const observer = this.#observerTransformMethod(viewElement, `translateX(${animationShift}px)`, "translateX(0px)", track);

        //установка первоначального смешения элемента и добавление элементов в обработчик
        if (animateElements.length > 0) {
            for (const animateElement of animateElements) {
                animateElement.style.transform = `translateX(${animationShift}px)`;
                animateElement.style.transition = `${timeAnimate}s`;
                observer.observe(animateElement);
            }
        } else {
            if (warn) {
                this.#warns.push('You fogot added class. Pass the class as the first parameter in scrollAppearAnimation.rightAnimation((*)(2)(3)(4))');
                this.#displayWarn();
            }
        }
    }


    slideFromRight() {

        let [targetElement, animationShift, viewElement, timeAnimate, track, warn] = [this.#targetElement, this.#animationShift, this.#viewElement, this.#timeAnimate, this.#track, this.#warn];

        //проверка элемент или присвоение
        targetElement = targetElement ?? 'slide-from-right';
        animationShift = animationShift ?? 75;

        //обращаемся к элементам
        let animateElements = document.querySelectorAll(`.${targetElement}`);

        // передано ли значение сдвига?
        animationShift = this.#animationShifMethodPlus(animationShift, 0, 400, 150, warn) ?? animationShift;

        //область видимости элемента для срабатывания
        viewElement = this.#viewElementMethod(viewElement, warn) ?? viewElement;

        //добавление времени анимации
        timeAnimate = this.#timeAnimateMethod(timeAnimate, warn) ?? timeAnimate;


        //наблюдатель за элементами
        const observer = this.#observerTransformMethod(viewElement, `translateX(${animationShift}px)`, "translateX(0px)", track);


        //установка первоначального смешения элемента и добавление элементов в обработчик
        if (animateElements.length > 0) {
            for (const animateElement of animateElements) {
                animateElement.style.transform = `translateX(${animationShift}px)`;
                animateElement.style.transition = `${timeAnimate}s`;
                observer.observe(animateElement);
            }
        } else {
            if (warn) {
                this.#warns.push('You fogot added class. Pass the class as the first parameter in scrollAppearAnimation.leftAnimation((*)(2)(3)(4))');
                this.#displayWarn();
            }
        }

    }


    opacityAnimate() {

        let [targetElement, opacity, viewElement, timeAnimate, track, warn] = [this.#targetElement, this.#opacity, this.#viewElement, this.#timeAnimate, this.#track, this.#warn];

        //проверка элемент или присвоение
        targetElement = targetElement ?? 'opacity';
        opacity = opacity ?? 0;

        //обращаемся к элементам
        let animateElements = document.querySelectorAll(`.${targetElement}`);


        //область видимости элемента для срабатывания
        viewElement = this.#viewElementMethod(viewElement, warn) ?? viewElement;

        //добавление времени анимации
        timeAnimate = this.#timeAnimateMethod(timeAnimate, warn) ?? timeAnimate;


        //наблюдатель за элементами
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = `1`;

                    if (!track) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    entry.target.style.opacity = `${opacity}`;
                }
            })
        }, { threshold: viewElement });


        //установка первоначального смешения элемента и добавление элементов в обработчик
        if (animateElements.length > 0) {
            for (const animateElement of animateElements) {
                animateElement.style.opacity = `${opacity}`;
                animateElement.style.transition = `${timeAnimate}s`;
                observer.observe(animateElement);
            }
        } else {
            if (warn) {
                this.#warns.push('You fogot added class. Pass the class as the first parameter in scrollAppearAnimation.opacityAnimation((*)(2)(3)(4))');
                this.#displayWarn();
            }
        }

    }

    ////////ОБЩИЕ МЕТОДЫ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //методы для избежания дублирования
    #animationShifMethodPlus(animationShift, min, max, middle, warn) {
        if (animationShift < min || animationShift > max) {
            animationShift = middle;
            if (warn) {
                this.#warns.push(`The value "animationShift" must be between ${min} and ${max} `);
                this.#displayWarn();
            }
            return animationShift = middle;
        }
    }

    #animationShifMethodMinus(animationShift, min, max, middle, warn) {
        if (animationShift > min || animationShift < max) {
            if (warn) {
                this.#warns.push(`The value "animationShift" must be between ${min} and ${max} `);
                this.#displayWarn();
            }
            return animationShift = middle;
        }
    }

    #viewElementMethod(viewElement, warn) {
        if (viewElement < 0 || viewElement > 1) {
            if (warn) {
                this.#warns.push('The value "viewElement" must be between 0 and 1');
                this.#displayWarn();
            }
            return viewElement = 0.1;
        }
    }

    #timeAnimateMethod(timeAnimate, warn) {
        if (timeAnimate < 0 || timeAnimate > 10) {
            if (warn) {
                this.#warns.push('The value "timeAnimate" must be between 0 and 10');
                this.#displayWarn();
            }
            return timeAnimate = 1;
        }
    }

    #observerTransformMethod(viewElement, translateStart, translateEnd, track) {
        return new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = `${translateEnd}`;

                    if (!track) {
                        observer.unobserve(entry.target);
                    }
                } else {
                    entry.target.style.transform = `${translateStart}`;
                }
            })
        }, { threshold: viewElement });
    }


    //обработка пердупреждений
    #displayWarn() {
        console.warn(this.#warns.join('\n'));
    }

}

export default ScrollViewElementAnimation;