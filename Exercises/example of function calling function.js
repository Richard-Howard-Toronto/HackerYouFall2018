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


//Take the above code and pass in an argument in FUNCTION passInValue and it stops working.



console.log('----this works too ----')

function passFromValue1(numberYouChangeALot1){
    var x1 = 20 * numberYouChangeALot1;
    console.log(`pass from x1 ${x1}`);
    return x1;
}

function intermediateValue(num2) {
  var w = 12 * passFromValue1(100);
  console.log(`pass from value1 to w ${w}`);
  return w;
}

function passToValue1() {
    var y1 = passFromValue1(100);
    console.log(`pass from x1 to y1 ${y1}`);
    var y1 = passFromValue1(100) * intermediateValue(2);
    console.log(`pass from x1 and w to y1 ${y1}`);
}

passToValue1();
