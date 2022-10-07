var btn = document.querySelector("#my_btn");
var msg1 = document.getElementById("message 1");
var msg2 = document.getElementById("message 2");
var msg3 = document.getElementById("message 3");
var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guesses_num = [];

// do it like this
btn.addEventListener("click", play);

function play() {
    var user_guess = document.getElementById("guess").value;
    console.log(user_guess);
    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter a number only in between 1 to 100");
    } else {
        guesses_num.push(user_guess);
        no_of_guesses += 1;
        if (user_guess < answer) {
            msg1.textContent = "Your Guess is too low";
            msg2.textContent = "No. of Guesses:" + no_of_guesses;
            msg3.textContent = "Guessed Number is: " + guesses_num;
        } else if (user_guess > answer) {
            msg1.textContent = "Your Guess is too high";
            msg2.textContent = "No. of Guesses:" + no_of_guesses;
            msg3.textContent = "Guessed Number is: " + guesses_num;
        } else if (user_guess == answer) {
            var duration = 15 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }

            var interval = setInterval(function() {
                var timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                var particleCount = 50 * (timeLeft / duration);
                // since particles fall down, start a bit higher than random
                confetti(Object.assign({}, defaults, { particleCount: 100, colors: ['#ff0000', '#808080', '#800000'], origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
                confetti(Object.assign({}, defaults, { particleCount: 100, colors: ['#808000', '#800080', '#C0C0C0'], origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
            msg1.textContent = "Yahh You won it!!🎉";
            msg2.textContent = "The number was" + answer;
            msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
        }
    }
}
//TODO: user can enter decimal  numbers too