var car = {
  make: "Chevy",
  model: "BelAir",
  year: 1957,
  color: "red",
  batteryCapacity: 100,
  avgConsumption: 8,
  batteryCharge: 100,
  drive: function(distance) {
    this.batteryCharge -= 8 * distance / 100
    document.write('Driving car' + '<br>');
  },
  paint: function(color) {
      this.color = color
  },
  fullCharge: function() {
    this.batteryCharge = this.batteryCapacity
  }
}

document.write('The color is ' + car.color + '<br>');
document.write('<br>')

car.paint('blue')
document.write('The color is ' + car.color + '<br>');
document.write('<br>')

car.drive(300)
document.write('Charge: ' + car.batteryCharge + '<br>');

car.fullCharge()
document.write('Charge: ' + car.batteryCharge + '<br>');
