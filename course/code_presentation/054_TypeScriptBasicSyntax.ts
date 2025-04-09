// Function declarations:
function addTwoNumbers(a: number, b: number): number {
    return a + b;
}

// Still use `?` for optional values
// TS can probably "infer" that the result is a number
function addTwoOrThreeNumbers(a: number, b: number, c?: number) {
    let result = a + b;

    // Must check to see if `c` is defined before using!
    if (c !== undefined) {
        result += c;
    }

    return result;
}


function addManyNumbers(a: number, ...others: number[]) {
    let finalResult = others.reduce((sum, current) => {
        return sum + current;
    }, a);
}

// You can use "type guards" to ensure that a value is
// the correct type in a particular code branch
function lower(x: string | string[]) {
    if (typeof x === 'string') {
        // x is guaranteed to be a string
        return x.toLowerCase();
    } else {
        // definitely a string[], so we can use reduce
        return x.reduce((val: string, next: string) => {
            return val += `, ${next.toLowerCase()}`;
        }, '');
    }
}

function clearElement(element: string | HTMLElement) {
    if (element instanceof HTMLElement) {
        // element is guaranteed to be an HTMLElement in here
        // so we can access its innerHTML property
        element.innerHTML = '';
    } else {
        // element is a string in here
        const el = document.querySelector(element);
        el && el.innerHTML == '';
    }
}