(function(){

//object set up

function Traveler(name) {
    var food = 0;
    var name = name;
    var isHealthy = true;

    this.getName = function() {
      return name;
    }
    this.getFood = function() {
      return food;
    }
    this.setFood = function(huntSuccess) {
      food = (food + huntSuccess);
    }


  } //close traveler

  function Wagon(capacity) {
    var passengers = [];
    var capacity = capacity;

    this.getCapacity = function(){
      return capacity;
    }

    this.addPassengers = function(traveler) {
      passengers.push(traveler);
    }

    this.getPassengers = function() {
      return passengers;
    }

  } //closes wagon

  //creating new instances of the traveler and traveler related functions - that change the instance of traveler

  // this returns an integer either 0 or 1 * 100 = 0 or 100 to add to food.
   function getRandomIntInclusive(min, max) {
     return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   function makeTraveler(name) {
     let food = getRandomIntInclusive(20, 80); //passes in min max values to assign food value
     let traveler = new Traveler(name);
     traveler.setFood(food);
     return traveler;
   }

   //determines if the traveler is successful at hunting

   function hunt(traveler) {
     let huntSuccess = ((getRandomIntInclusive(0, 1)) * 100);
     console.log(huntSuccess);
     traveler.setFood(huntSuccess);
   }


   function eat(traveler) {
     let eat = -20;
     traveler.setFood(eat);
     //after we eat we need to see if current food of traveler is < 20
     //if < 20 then set the health to false
     if (traveler.food < 20) {
       traveler.isHealthy = false;
     }
   }


   //generate new instance of a wagon


   function makeWagon(capacity) {
     return new Wagon(capacity);
   }


   //set up to run functions that assess health

   function join(Wagon, traveler) {
     if ( Wagon.getPassengers().length  <=  Wagon.getCapacity()) {
       Wagon.addPassengers(traveler);
     }
   }

   function quarantine(wagon) {
     let passengers = wagon.getPassengers();
      for (var i = 0; i < passengers.length; i++) {
        if (passengers[i].getFood() < 20) {
          return true;
        }
      }
      return false;
    }

    function food(wagon){
      let passengers = wagon.getPassengers();
      let total = 0;
      for (var i = 0; i < passengers.length; i++) {
        total += passengers[i].getFood();
      }
      return total;
    }

    // Create a wagon called 'wagon'
    let wagon = makeWagon(5);
    // Create a traveler with the name 'Henrietta' called 'traveler'
    let traveler = makeTraveler('Henrietta');
    // Create a traveler with the name 'Juan' called 'traveler2'
    let traveler2 = makeTraveler('Juan');

    hunt(traveler); // maybe get more food
    eat(traveler2);
    eat(traveler2); // juan is hungry
    join(wagon, traveler);
    join(wagon, traveler2);

    console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
    console.log(food(wagon)); // print juan's food + henrietta's food


  })();
