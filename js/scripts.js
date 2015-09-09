var pigLatinify = function(string) {
  var vowels = ["a", "e", "i", "o", "u"];
  var array = string.split("");
  if (vowels.indexOf(array[0]) !== -1) {
  } else {
    for(var i = 0; i < array.length; i++) {
      if (vowels.indexOf(array[i]) !== -1) {
        if (array[i-1] === "q"){
          var add = string.slice(0, i+1);
          string = string.substr(i+1);
        }else {
          var add = string.slice(0, i);
          string = string.substr(i);
        }
        string += add;
        break;
      }
    }
  }
  if (string !== "-") {
    string += "ay";
  }
  return string;
};

var interpretPunctuation = function(string) {
  var punctuation = ["!", "?", ",", ".", ":", ";"];
  var arr = string.split('');
  for(var j = 0; j < arr.length; j++) {
    if (punctuation.indexOf(arr[j]) !== -1) {
      arr.push(arr[j]);
      arr.splice(j, 1);
      break;
    }
  }
  string = arr.join('');
  return string;
};

var pigLatinSentence = function(string) {
  var arr = string.split(' ');
  var newarr = [];
  var newWord
  for(var i = 0; i < arr.length; i++) {
    newWord = pigLatinify(arr[i]);
    newarr.push(interpretPunctuation(newWord));
  }
  var str = newarr.join(' ');
  return str;
};

$(document).ready(function(){
  $('form#message').submit(function(event){
    var string = $('input#text').val();
    var result = pigLatinSentence(string);

    $(".result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
