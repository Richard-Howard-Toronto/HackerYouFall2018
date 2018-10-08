//THIS WORKS.  FUNCTION passFromValue passed value to FUNCTION passToValue.

console.log('----this works----')

function passFromValue(){
    var complicatedVariable = Math.trunc(20 ** 3/10000 * (Math.PI *100))
    var x = 20 + complicatedVariable;
    console.log(`pass from ${x}`);
    return x;
}

function passToValue() {
    var y = passFromValue();
    console.log(`pass to ${y}`);
}

passToValue();


//Take the above code and pass in an argument in FUNCTION passInValue and it stops working.  You executive the first function but then when you try to run the second, the return value for x1 and y1 is NaN.  I have something in the wrong sequence.  But what?



console.log('----this returns NaN ----')

function passFromValue1(numberYouChangeALot1){
    var x1 = 20 * numberYouChangeALot1;
    console.log(`pass from ${x1}`);
    return x1;
}

passFromValue1(10);

function passToValue1() {
    var y1 = passFromValue1();
    console.log(`pass to ${y1}`);
}

passToValue1();
