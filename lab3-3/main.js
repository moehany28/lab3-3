var counter = document.getElementById('counter');
var charcounter = document.getElementById('charcounter');
var input = document.getElementById('input');

input.addEventListener('keyup', function(e) {
  wordCounter(e.target.value);
  characterCounter(e.target.value);
});

function wordCounter(text) {
  var text = input.value.split(' ');
  var wordCount = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] !== ' ' && isWord(text[i])) {
      wordCount++;
    }
  }
  counter.innerText = wordCount;
}

function characterCounter(text) {
  var text = input.value.length;
  
  var charCount = text;
  charcounter.innerText = charCount;
}

function isWord(str) {
  var numPresent = false;
  for (var i = 0; i < str.length; i++) {
    var character = str.charCodeAt(i);
    if ((character > 47 && character < 58) || // numbers
      (character > 64 && character < 91) || // capital letters
      (character > 96 && character < 123)) { // lowercase letters
      numPresent = true;
      return numPresent;
    }
  }
  return numPresent;
}