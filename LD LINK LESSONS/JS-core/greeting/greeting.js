
var date = new Date()
var hour = date.getHours

// if it's morning, I write "Good morning!" - morning is until 12 noon
// otherwise if it's lunch, I write "Enjoy lunch!"
// otherwise if it's afternoon, I write "Good afternoon!"
//otherwise if it's evening, I write "Good evening!"


if (hour < 4) {
    document.write('Good night!')
}
else if (hour < 12) {
    document.write('Good morning')
} else if (hour==12) {
    document.write('Enjoy lunch!')
} else if (hour >12 && hour < 18) {
    document.write ('Good afternoon!')
} else if (hour < 22) {
    document.write ('Good evening!')
} else {
    document.write('Good night!')
}



