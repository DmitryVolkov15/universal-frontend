import ScrollViewElementAnimation from "./observer/scrollViewElementAnimation";
import ScrollViewAddClass from "./observer/scrollViewAddClass";

import ClickAddClass from "./click/clickAddClass";

const universal = {
    universalObserver: {
        ScrollViewElementAnimation: ScrollViewElementAnimation,
        ScrollViewAddClass: ScrollViewAddClass,
    },

    //as an options
    universalClick: {
        ClickAddClass: ClickAddClass,
    },

    universaDoubleClick: {
        // in developing
    },

    universalMouseMove: {
        // in developing
    },

    universalScroll: {
        // in developing
    },

    universalResize: {
        // in developing
    },

    universalForm: {
        // in developing
    },
}




export default universal;
