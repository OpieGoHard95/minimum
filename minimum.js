var min = function(x,y) {
  var result = 1
  if (x < y)
    result = x;
  else if (y < x)
    result = y;
  else if (x == y)
  	result = "These numbers are the same!";
  return result;
}
console.log(min(-10,-100))
