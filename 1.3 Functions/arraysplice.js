function reverseN(num) {

  var str = "How are you doing today?";
      var res = str.split(" ");
    var arr = [num];
    console.log(arr);
    arr[0] = "Jani";
    arr[1] = "Hege";
    arr[2] = "Stale";
    arr[3] = "Kai Jim";
    arr[4] = "Borge";

    console.log(arr.join());
    arr.splice(arr.length,0, "XXXXXXs");
    console.log(arr.join());

}

reverseN(123);
