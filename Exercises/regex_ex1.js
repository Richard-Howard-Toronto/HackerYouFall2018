// PROGRAM TO MAKE SURE EMAIL IS A VALID EMAIL

function isa(str) {

  //first, make sure there is an @ .
    var amp = '@';
    var patt1 = /['@']/g;
    var result = '';
    result = str.match(patt1);

  //second, make sure there is only one  @ .
    if (result=='@') {
      console.log('one @, ok');
    } else {
      console.log('you have more than one @')
      return false;
    }

  //third, look for any backslashes

  var backslash = '\\';
  var patt2 = backslash;
  var result2 = '';
  // var result2 = str.match(patt2);

  console.log(`the backslash is ${patt2}`);
  console.log(typeof patt2)

  // result2 = str.match(patt2);

  // if (result2==patt2) {
  //   console.log('you have a backslash \\');
  // } else {
  //   console.log('no \\ (backslash) so ok')
  //
  // }


  // look for any 'apostrophes'

  var apostrophes = '\'';
  var patt3 = apostrophes;
  var result3 = str.match(patt3);
  console.log(`the apostrophe is ${patt3}`);
  console.log(result3);




  //fourth, look for any pluses

  var pattern = '/d\+/'
  console.log(pattern);
  var result4 = str.search(pattern);
  console.log(result4);



  }

isa("Visit + W3Schools \ in India @ com");

// isEmail('john.smith@example.com');
