var car = {
    make: 'Chevy',
    model: 'BelAir',
    year: 1957,
    color: 'red',
    drive: function() {
        document.write('Driving car')
    }

}

document.write('The color is ' + car.color)
car.drive()