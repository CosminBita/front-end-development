var i = 2;
var j = 1;
var max = 10;

while (j <= max) {
  // STRING CONCAT
  var message = j + "x" + i + "=" + i * j + "<br>";
  //STRING INTERPOLATION
  message = `${j} x ${i} = ${j * i} <br>`;
  document.write(message);
  j++;
}

document.write('<br>')

for(j = 1; j <= max; j++) {
  message = `${j} x ${i} = ${j * i} <br>;`
  document.write(message)
  
}