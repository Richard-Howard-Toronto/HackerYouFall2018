function pickColor() {

    const colours = ["red","orange","yellow","green","blue","indigo","violet"];
    let max = colours.length-1;
    let min = 0;
    let index =  Math.floor(Math.random() * (max - min + 1)) + min;

      console.log(`index is ${index}`);

        if (index === 0) {
          console.log('index is 0');
        } else if (index === 1) {
          console.log('index is 1');
        } else {
          console.log('not 0 or 1');
        }


}

pickColor();
