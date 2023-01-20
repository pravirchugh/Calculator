export function invertOutput(output){
    return (parseFloat(output) * -1).toString();
}
export function reciprocalOutput(output) {
    return (1 / parseFloat(output)).toString();
}
export function squareOutput(output) {
    return (parseFloat(output) * parseFloat(output)).toString();
}
export function rootOutput(output) {
    return (Math.sqrt(parseFloat(output)).toString());
}
export function clearOutput() {
    return "0";
}