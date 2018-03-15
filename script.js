var questions = [{
    question: "Doctor Doom's Fearfall is a drop tower style ride that is powered by what?",
    choices: ["Magnets", "Air Pressure", "Hydraulic Fluid"],
    correctAnswer: 1
}, {
    question: "SeaWorld's newest roller coaster Mako was designed by which manufacturer?",
    choices: ["Giovanola", "Mack", "Bolliger and Mabillard"],
    correctAnswer: 2
}, {
    question: "The Incredible Hulk Coaster uses which method to launch the ride vehicles?",
    choices: ["Magnets", "Airplane Tires", "Flywheel"],
    correctAnswer: 1
}, {
    question: "Expedition Everest at Disney's Animal Kingdom was built by whom?",
    choices: ["Vekoma", "Custom Coasters", "Arrow Dynamics"],
    correctAnswer: 0
}, {
    question: "At EPCOT, how many wheels does each Test Trach vehicle have?",
    choices: ["22", "4", "8"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("ESTOP!  Select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; 
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("RIDE RESET?");
                    quizOver = true;
                }
            }
        } else { 
            quizOver = false;
            $(document).find(".nextButton").text();
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    $(questionClass).text(question);

    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}