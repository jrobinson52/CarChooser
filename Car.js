function prequal(car) {
  if(car.mileage > 100000)  {
    return false;
  }
  else if (car.year < 1960) {
    return false;
  }
  return true;
}

function check(car)  {
  if(prequal(car)) {
    document.write("You gotta check out this " + car.make + " " + car.model + "<br />");
  }
  else {
    document.write("You should really pass on this " + car.make + " " + car.model + "<br />");
  }
}

function makeCar() {
  var makes = ["Chevy", "GM", "Ford", "Honda", "Toyota"];
  var models = ["Sedan", "Coupe", "Truck"];
  var colors = ["red", "blue" , "tan", "yellow", "white", "black"];

  var car =
  {
    make: makes[Math.floor(Math.random() * makes.length)],
    model: models[Math.floor(Math.random() * models.length)],
    year: Math.floor(Math.random() * 57) + 1960, //any year from 1960 on
    color: colors[Math.floor(Math.random() * colors.length)],
    passengers: Math.floor(Math.random() * 5),
    convertable: (Math.floor(Math.random() * 2) == 0),
    mileage: Math.floor(Math.random() * 250000),
    drive: function() {
      if(prequal (this))  {
        document.write("Zoom Zoom<br />");
      }
      else {
        document.write("Put Bang...<br />")
      }
    }
  };

  return car;
}

for(i = 0; i < 10; i++) {
  var car = makeCar();
  check(car);
  car.drive();
}
