function Animal(name, speed, focus) {
  this.name = name;
  this.speed = speed;
  this.focus = focus;
  this.position = 0;
  this.move = function() {
    if (Math.floor(10 * this.focus * Math.random()) != 0) {
      this.position += this.speed;
    } else {
      this.focus = 0;	 //The hare has a high chance of losing focus and falling out of the race
    }
  };
}

var length = 30;
var time = 0;
var tortoise = new Animal("Tortoise", 1, 9);
var hare = new Animal("Hare", 5, 1);
var winner;

alert("It's the Tortoise and the Hare!");

//The while loop runs each second

while ((tortoise.position < length) && (hare.position < length)) {
  time++;
  tortoise.move();
  hare.move();
  document.getElementById("tortoise").textContent = "T";
  
  //The for loops amend the text to the corresponding length

  for (var i = 0; i < tortoise.position; i++) {
    document.getElementById("tortoise").textContent += "T";
  }
  
  document.getElementById("hare").textContent = "H";
  
  for (var i = 0; i < hare.position; i++) {
    document.getElementById("hare").textContent += "H";
  }

  alert(time + " second(s)");
}

if (tortoise.position > hare.position) {
  winner = tortoise.name;
} else if (hare.position > tortoise.position) {
  winner = hare.name;
} else {
  winner = "no one! It's a tie";
}

alert("And the winner is " + winner + "!");
