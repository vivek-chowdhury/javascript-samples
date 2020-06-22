let count = 0;

function onKeyUpInvoked() {
    console.log('Throttling invoked ', count++);
}

function throttling(fn, delay) {
    let isThrottling = false;
    return function () {
        const context = this;
        const arg = arguments;
        if (!isThrottling) {
            fn.apply(context, arguments);
            isThrottling = true;
            setTimeout(() => {
                isThrottling = false;
            }, delay);
        }
    }
}

let startThrottling = throttling(onKeyUpInvoked, 300);