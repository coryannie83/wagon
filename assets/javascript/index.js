((function(){

function Traveler(food, name, isHealthy) {
    var food = food;
    var name = name;
    var isHealthy = isHealthy;

    this.getName = function() {
      return name;
    }
    this.getFood = function() {
      return food;
    }
    this.setFood = function() {
      food = food +;
    }

  } //close traveler

  function Wagon(capacity) {
    this.passengers = [];
    this.capacity = capacity;

    this.addPassengers = function(travelerName) {
      this.passengers.push(travelerName);
    }




});
