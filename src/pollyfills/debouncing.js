let counter = 0;

function onKeyUpInvoked() {
    console.log('Key up triggered ', counter++);
}

function startDebouncing(fn, delay) {
    let timeoutId;
    return function () {
        let context = this;
        let args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

const debounceListener = startDebouncing(onKeyUpInvoked, 300);