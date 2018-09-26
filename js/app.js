console.log('tamagotchi')


//Create a repo for your tomagotchi pet

//make a commit after you finish each one of the following

// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi

// Instatiate your Tomagotchi

// Display a character of your choice on the screen to represent your pet

// Display the following metrics for your pet:

// Hunger (1-10 scale)

// Sleepiness (1-10 scale)

// Boredom (1-10 scale)

// Age

// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.

// Add the ability to name your pet.

// Style the page.

// Increase your pet's age every x minutes

// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

// Morph your pet at certain ages.

// Animate your pet across the screen while it's alive.

//------------------Pseudo

// First I should draw my pet on paper to get an idea of what he'll look like.

//add buttons in my HTML for feed, turn off lights, and play with pet.

//Create a class for my tamagotchi with hunger, sleepiness, boredom, and age as its keys

// Create an input box to store the name of the tamagotchi instince with event listener, key press or button click

//tamagotchi will start at age 1

//Increase the age of my tamagotchi every x minutes. Once pet hits certain age, make him morph to next level pet....css?

//animate pet somehow with JQuery perhaps. If i make my character look like Kirby i can expand the circle of his body back and forth.

//--------------------About buttons

//Also increase the hunger, boredom, sleepiness every x minutes
//setInterval

//Display these on the page so user can see^^^^^^^Alert

//Give the user a warning if these levels are getting high

//If user clicks a button that feeds, sleeps, plays. Then decrease the number. 10 is the max.

//if any of those metrics get to 10. Tamagotchi dies

//maybe turn color of low levels to red

//--------------------

//Display how many days the tamagotchi has been alive

//Probably create a function for time passing, and have all of the properties increase my x minutes.

//If user does not complete any button clicks within a certain amount of time display a message saying tamagotchi has died.
// setInterval

//Display message of cause of death.

//reset game after user clicks a restart button

//---------------------------User stories

/*
User should be able to start game

user should be able to name pet

user should be able to feed, play, and turn off lights for pet

user should be able to see the levels of the pets hunger, boredom, and sleepiness.

user should be alerted if levels are low

user should be alerted if pet age is increased by x amount

user should be able to restart game 

*/


class Pet  {
	constructor(name, hunger, sleepiness, boredom, age){
		this.hunger = hunger; 
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
	}
	isDead(){

	}
	eat() {
		// make pet less hungry
		// printStats()
	}
}
const pet = new Pet('User input',0,0,0,0)



//game object & FUNCTIONS
const game = {
	// feedTime: 0,
	// playTime: 0,
	interval: null, // null is initial value
	// bedTime: 0,
	timer: 0,
	controlLights() {
		//timer starts at 0 and goes up to 10
		// game.startTimer();
		// // pet.sleepiness++;
		// if(pet.sleepiness === 10){
		// 	//if timer gets to 0 pet is dead gameOver
		// 		clearInterval(intervalSleep);
		// 		//pet is dead if timer gets to 10
		// }

	},
	printStats() {

	},
	//will start his age
	startTimer() {
		this.interval = setInterval(() => {

			this.timer++;

			if(this.timer % 2 === 0) {

				pet.age++;
			}
			
			pet.boredom++;
			pet.sleepiness++;
			pet.hunger++;
			
			if(this.timer === 100){
				clearInterval(this.interval);
			}

			$('#timer').text('Alive for ' + pet.age + ' days');
			$('#play-timer').text('Boredom level ' + pet.boredom);
			$('#lights-timer').text('Sleepiness level ' + pet.sleepiness);
			$('#feed-timer').text('Hunger level: ' + pet.hunger)



		}, 2000)

	},


	gameOver() {
		if(this.timer === 100){
			//game over
		}

	}

}
//-------------EVENTS INPUT



//BUTTONS EVENTS
//button to reduce hunger count
// $('.feed').on('click', () => {
// 	console.log('feed button')
// 	game.feedPet(-1)
	//on click, subtract timer by one
// })
$('.play').on('click', () => {
	console.log('play button')
	//on click, subtract timer by one
})
$('.lights').on('click', () => {
	console.log('lights button')
	//on click, subtract timer by one
})
//----------------------------------


// CLICK EVENT/KEY PRESS EVENT
//event listener for removing input field
$("#name-pet").on("click", () => {
    if ($('#name-pet').val() == "Enter name")
        $('#name-pet').val("")
    	// let $displayName = $('#name-pet').text
    	// $displayName.append($('#name-pet'));
    	// $('#name-pet').append($displayName)
    // remove input
    // display name there instead
    // ??? timer start?
});
//when user presses enter alert and remove input field
$("#name-pet").on("keydown", (e) => {
    if(e.keyCode == 13) {
    	//#name-pet is input id
        alert($('#name-pet').val() + '? Press enter again to start');
      	// $('#name-pet').val().appendTo($('h2'))
      	$('#display-name').append($('#name-pet').val())
        $('#name-pet').hide().appendTo($('#display-name'))
        

     //    let $displayName = $('#display-name').text()
    	// $displayName.append($('#name-pet'));
        game.startTimer();
        // game.feedPet();
        // game.playWithPet();
        // game.controlLights();
        
    }
});




$('.feed').on('click', () => {
	console.log('feed button')
	// call pet's feed()


	
	// this.feedTime -=1;

	//on click, subtract timer by one
})







