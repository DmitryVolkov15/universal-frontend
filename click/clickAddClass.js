"use strict"


class ClickAddClass {
    #triggerElement;
    #targetElement;
    #targetClass;
    #warn;
    #warns;

    constructor({ triggerElement, targetElement, targetClass, warn = false } = {}) {
        this.#triggerElement = triggerElement;
        this.#targetElement = targetElement;
        this.#targetClass = targetClass;
        this.#warn = warn;
        this.#warns = [];
    }

    toggleClass() {
        let [triggerElement, targetElement, targetClass, warn] = [this.#triggerElement, this.#targetElement, this.#targetClass, this.#warn];

        //проверка элемент или присвоение
        triggerElement = triggerElement ?? 'click-toggle';
        targetElement = targetElement;
        targetClass = targetClass ?? 'active';

        //обращаемся к элементам
        let triggerElements = document.querySelectorAll(`.${triggerElement}`);
        let targetElements = document.querySelectorAll(`.${targetElement}`);


        if (triggerElements.length > 0) {
            for (const triggerElement of triggerElements) {
                triggerElement.addEventListener("click", () => {
                    if (targetElements.length > 0) {
                        for (const targetElement of targetElements) {
                            targetElement.classList.toggle(`${targetClass}`);
                        }
                    } else {
                        triggerElement.classList.toggle(`${targetClass}`);
                    }
                })
            }
        } else {
            if (warn) {
                this.#warns.push('You fogot added class. Pass the class as the first parameter in scrollAppearAnimation.addClass((*)(2)(3)(4))');
                this.#displayWarn();

            }
        }
    }

    addClass() {

        let [triggerElement, targetElement, targetClass, warn] = [this.#triggerElement, this.#targetElement, this.#targetClass, this.#warn];


        //проверка элемент или присвоение
        triggerElement = triggerElement ?? 'click-add';
        targetElement = targetElement;
        targetClass = targetClass ?? 'active';


        //обращаемся к элементам
        let triggerElements = document.querySelectorAll(`.${triggerElement}`);
        let targetElements = document.querySelectorAll(`.${targetElement}`);


        if (triggerElements.length > 0) {
            for (const triggerElement of triggerElements) {
                triggerElement.addEventListener('click', () => {
                    if (targetElements.length > 0) {
                        for (const targetElement of targetElements) {
                            targetElement.classList.add(`${targetClass}`);
                        }
                    } else {
                        triggerElement.classList.add(`${targetClass}`);
                    }
                })
            }
        } else {
            if (warn) {
                this.#warns.push('You fogot added class. Pass the class as the first parameter in scrollAppearAnimation.addClass((*)(2)(3)(4))');
                this.#displayWarn();
            }
        }

    }

    removeClass() {

        let [triggerElement, targetElement, targetClass, warn] = [this.#triggerElement, this.#targetElement, this.#targetClass, this.#warn];

        //проверка элемент или присвоение
        triggerElement = triggerElement ?? 'click-remove';
        targetElement = targetElement;
        targetClass = targetClass ?? 'active';

        //обращаемся к элементам
        let triggerElements = document.querySelectorAll(`.${triggerElement}`);
        let targetElements = document.querySelectorAll(`.${targetElement}`);


        if (triggerElements.length > 0) {
            for (const triggerElement of triggerElements) {
                triggerElement.addEventListener('click', () => {
                    if (targetElements.length > 0) {
                        for (const targetElement of targetElements) {
                            targetElement.classList.remove(`${targetClass}`);
                        }
                    } else {
                        triggerElement.classList.remove(`${targetClass}`);
                    }
                })
            }
        } else {
            if (warn) {
                this.#warns.push('You fogot added class. Pass the class as the first parameter in scrollAppearAnimation.addClass((*)(2)(3)(4))');
                this.#displayWarn();
            }
        }

    }

    //обработка пердупреждений
    #displayWarn() {
        console.warn(this.#warns.join('\n'));
    }
}

export default ClickAddClass;