function containsString(var1,var2) {
  console.log(`we are looking to match ${var1}`);

      for (var i = 0; i < var2.length; i++) {
        if (var2[i] === var1) {
          console.log(`YAAAA! a ${var2[i]} is === ${var1} !`)
      } else {
        console.log(`hmmm, nope, a ${var2[i]} is not a ${var1}`)
      }
    }
}

containsString('turtle',['hammer','dog','cheese','turtle']);
