class Pet {
    constructor(name) {
        // set the name
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }
    isDead() {
        console.log("isDead()")
        if (this.hunger === 11 || this.sleepiness === 11 || this.boredom === 11) {
            return true
        } else {
            return false
        }

    }
    eat() {
        // make pet less hungry
        this.hunger -= 5;
        if (this.hunger < 0) {
            // make it zero
            this.hunger = 0;
        }
        game.printStats();
        // $('.sprite').velocity('callout.tada', 2000)
        $('img').velocity({
            perspective: [215, 50],
            translateY: 60,
            rotateZ: 360,
        }, {
            duration: 1000,
            loop: 1
        })

    }
    play() {
        this.boredom -= 5;
        if (this.boredom < 0) {
            // make it zero
            this.boredom = 0;
        }
        game.printStats();
        $('img').velocity({
            perspective: [215, 50],
            translateZ: 60,
            rotateY: 360,
        }, {
            duration: 1000,
            loop: 1
        })
    }
    sleep() {
        this.sleepiness -= 5;

        // if the number is less than zero
        if (this.sleepiness < 0) {
            // make it zero
            this.sleepiness = 0;
        }
        game.printStats();
        $('.sprite').velocity('callout.swing', 2000)
    }
}




//game object & FUNCTIONS
const game = {
    interval: null, // null is initial value
    runTime: 0,
    timer: 0,
    pet: null, // initial value
    start() {
        // get name
        const petName = $('#name-pet').val()

        // instantiate, 
        // make this.pet be the instance
        this.pet = new Pet(petName)

        // do the jQuery stuff you were doing in the listener(hide/show input etc)
        $('#display-name').append(this.pet.name)
        $('#name-pet').hide()
        // start the timer
        this.startTimer();
    },
    controlLights() {
        //timer starts at 0 and goes up to 10

    },
    printStats() {
        $('#timer').text('Age ' + this.pet.age);
        $('#play-timer').text('Boredom level: ' + this.pet.boredom);
        $('#lights-timer').text('Sleepiness level: ' + this.pet.sleepiness);
        $('#feed-timer').text('Hunger level: ' + this.pet.hunger)
        $('#clock').text('Runtime: ' + this.runTime + 's')

    },
    //will start his age
    startTimer() {
        this.interval = setInterval(() => {
            this.printStats();
            this.runTime++;
            this.timer++;
            if (this.timer % 5 === 0) {
                this.pet.age++;
            }

            if (this.timer % 3 === 0) {
                this.pet.sleepiness++;
            }
            // if timer is evenly divisible by 1, 
            if (this.timer % 2 === 0) {
                this.pet.hunger++;
                this.pet.boredom++;
            }
            // pet.hunger++;

            // pet.boredom++;
            if (this.timer === 101) {
                clearInterval(this.interval);
                $('.sprite').velocity('callout.swing', 5000)
                $('.sprite').velocity('callout.bounce', 5000)
                $('img').velocity({
    				perspective: [215, 50],
    				translateY: 60,
    				rotateZ: 360,
				}, {
    				duration: 1000,
    				loop: 4
				})
                $('.sprite').velocity('callout.tada', 5000)
                $('.sprite').velocity('callout.shake', 5000)
                $('.you-win').append().text('YOU WIN!')


            }
            if (this.pet.isDead()) {
                clearInterval(this.interval);
                $('.sprite').velocity('callout.flash', 2000)
                $('.sprite').velocity('transition.expandOut', 2000)
                $('.game-over').append().text('GAME OVER')

            }

        }, 1000)

    },




}

//-------------EVENTS INPUT



//BUTTONS EVENTS
//button to reduce hunger count
$('.feed').on('click', () => {
    console.log('feed button')
    game.pet.eat();

})
$('.play').on('click', () => {
    console.log('play button')
    game.pet.play();

})
$('.lights').on('click', () => {
    console.log('lights button')
    game.pet.sleep();

})
//----------------------------------


// CLICK EVENT/KEY PRESS EVENT

//when user presses enter alert and remove input field
$("#name-pet").on("keydown", (e) => {
    if (e.keyCode == 13) {
        game.start()
    }
});







