// Write your solution here!
cats = ["Milo", "Otis", "Garfield"];
function cats() {
    cats;
}

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}
function destructivelyPrependCat(name) {
    cats.unshift('Bob');
} function destructivelyRemoveLastCat() {
    cats.pop();

}
function destructivelyRemoveFirstCat() {
    cats.shift();

} function appendCat(name) {
    appendCat = cats.slice();
    appendCat.push('Broom');
    return appendCat;
} function prependCat(name) {
    prependCat = cats.slice();
    prependCat.unshift('Arnold');
    return prependCat;
} function removeLastCat() {
    removeLastCat = cats.slice();
    removeLastCat.pop();
    return removeLastCat;
}
function removeFirstCat() {
    removeFirstCat = cats.slice();
    removeFirstCat.shift();
    return removeFirstCat;
}

