$(document).ready(function(){

var x = function(){
  return 'foo';
}

// select the body
var body = $('body');
console.log(`hey RICHARD!! ${body}`);

// select all paragraphs
var ps = $('p');
console.log(ps);

// Log "There are __ paragraph tags in this site"
console.log('There are ' + ps.length + ' paragraphs on this page');

// select all the heading 2 elements and log them
let heading2 = $('h2');
console.log({heading2});

// select all the links in the nav

let linksInNAV = $('.nav a');
console.log({linksInNAV});


// log how many links are in the nav

let linksInNAVCount = $('.nav a').length;
console.log({linksInNAVCount});

// There are 9 points in the first section of the website  (Web Typography CSS3 Techniques Advanced Styling...). Select all of these.


// select the last point

let lastpoint = $('ul.learned li:last-child');


// Select the sentence underneath "Work" that says "please take a second to check..."

// skills and services is an unordered list, select it, but only it

// select all the skills inside the skill meter

// select the even skills

// select the odd skills

// select every other skill starting at the thrid one

// select all spans

// select the "good" and "hero" spans in a single selector

// Select the link inside the h1 at the top of the page AND the "© Hacker You" at the bottom of the page

// select all the section divs

// select the process div

// select "your name, your email and your message" in the contact form

// select the "send message" input[type="text"]

// select all paragraphs in the footer

// select all the process boxes

// select all the work boxes

// select all the titles inside of them

}); // END doc ready
