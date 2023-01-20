export function invertOutput(output){
    return (parseFloat(output) * -1).toString();
}
export function reciprocalOutput(output) {
    return (1 / parseFloat(output)).toString();
}
export function squareOutput(output) {
    let temporaryValue = parseFloat(output) * parseFloat(output);

    if(temporaryValue <= Math.floor(temporaryValue) + 0.0000001){ // this accounts for a precision error 
        temporaryValue = Math.floor(temporaryValue);
    }
    if(temporaryValue >= Math.ceil(temporaryValue) - 0.0000001){ // this accounts for a precision error 
        temporaryValue = Math.ceil(temporaryValue);
    }
    

    return (temporaryValue).toString();
}
export function rootOutput(output) {
    return (Math.sqrt(parseFloat(output)).toString());
}
export function clearOutput() {
    return "0";
}