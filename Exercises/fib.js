//

function fibonacci(number) {

    var p1 = 0, p2 = 1;

    for(var i = 2; i <= number; i++) {
      // the variable for(var..) just counts. you don't use i as output.
        let n = p1 + p2;
        p1 = p2;
        p2 = n;
        console.log(n);
    }
};

fibonacci(100)
