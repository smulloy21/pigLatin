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
  string += "ay";
  return string;
};

var pigLatinSentence = function(string) {
  var arr = string.split(' ');
  var newarr = [];
  for(var i = 0; i < arr.length; i++) {
    newarr.push(pigLatinify(arr[i]))
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
