//THIS WORKS

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
