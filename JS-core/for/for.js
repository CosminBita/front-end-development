//WHILE
var i = 0;
while (i < 5) {
  document.write(i);
  i++;
}

document.write("<br>");

//FOR
var i = 2;
var j = 1;
var max = 10;
for (j = 1; j <= max; j++) {
  message = `${j} x ${i} = ${j * i} <br>`;
  document.write(message);
}
document.write('<br><br><br>')
//IMBRICATED FOR LOOPS
for (i = 1; i <= 10; i++) {
  for (j = 1; j <= 10; j++) {
    message = `${i} x ${j} = ${i * j} <br>`;
    document.write(message)
  }
  document.write("<br>");
}
