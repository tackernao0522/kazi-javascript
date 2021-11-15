function div(a, b) {
    if (b === 0) {
        // throw "Second Parameter can't be zero"; // Uncaught Second Parameter can't be zero

        // throw new Error("Second Parameter can't be zero"); // Uncaught Error: Second Parameter can't be zero

        throw new SyntaxError("Second Parameter can't be zero"); // Uncaught SyntaxError: Second Parameter can't be zero
    }
    return a / b;
}

console.log(div(4, 0));
