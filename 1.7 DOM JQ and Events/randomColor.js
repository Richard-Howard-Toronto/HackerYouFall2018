function pickColor() {

    const colours = ["red","orange","yellow","green","blue","indigo","violet"];
    let max = colours.length-1;
    let min = 0;
    let index =  Math.floor(Math.random() * (max - min + 1)) + min;

      console.log(`you picked ${colours[index]}`);
}

pickColor();
