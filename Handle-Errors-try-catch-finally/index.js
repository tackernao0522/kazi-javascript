function div(a, b) {
    if (b === 0) {
        throw new SyntaxError("Second Parameter can't be zero");
    }
    return a / b;
}

try { console.log(div(4, 0)); }
catch (e) {
    console.log(e); // SyntaxError: Second Parameter can't be zero
    console.log(e.name); // SyntaxError
    console.log(e.message); // Second Parameter can't be zero
}
finally { console.log('Its work ') } // Its work
console.log('HI ariyan'); // HI ariyan
