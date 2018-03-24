$(document).ready(function () {
    var random = Math.floor(Math.random() * 101 + 19)

    // to select a random number that will be shown at the start of the game.
    // Number is between 19 - 120.

    $("#randomNumber").text(random);

    // random number for crystals
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    //kepping track of wins and losses
    var userTotal = 0;
    var wins = 0;
    var losses = 0;


    $("#win").text(wins);
    $("#loss").text(losses);


    //reset

    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random)
        $('#randomNumber').text(random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);

        userTotal = 0;

        $("#yourScore").text(userTotal);
    }

    //winning function
    function W() {
        alert("Good Job! You won!");
        wins++;
        $("#win").text(wins);
        reset();
    }
    function L() {
        alert("Naah! You lost!");
        losses++;
        $("#loss").text(losses);
        reset()
    }

    $("#img1").on("click", function () {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $("#yourScore").text(userTotal);

        //sets win/lose conditions
        if (userTotal == random) {
            W();
        }
        else if (userTotal > random) {
            L();
        }
    })

    $("#img2").on("click", function () {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $("#yourScore").text(userTotal);

        //sets win/lose conditions
        if (userTotal == random) {
            W();
        }
        else if (userTotal > random) {
            L();
        }

    })

    $("#img3").on("click", function () {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $("#yourScore").text(userTotal);

        //sets win/lose conditions
        if (userTotal == random) {
            W();
        }
        else if (userTotal > random) {
            L();
        }

    })

    $("#img4").on("click", function () {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $("#yourScore").text(userTotal);

        //sets win/lose conditions
        if (userTotal == random) {
            W();
        }
        else if (userTotal > random) {
            L();
        }

    });

});