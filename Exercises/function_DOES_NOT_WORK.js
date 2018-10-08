//THIS DOES NOT


function passFromValue(numberYouChangeALot){
    var x = 20 * numberYouChangeALot;
    console.log(`pass from ${x}`);
    return x;
}

function passToValue() {
    var y = passFromValue();
    console.log(`pass to ${y}`);
}

  passToValue();
