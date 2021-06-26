                 //Timer
var hourHead = document.getElementById('hour')
var minHead = document.getElementById('min')
var secHead = document.getElementById('sec')

var p1 = "00";
var p2 = "05";
var p3 = "00";

hourHead.innerHTML = p1
minHead.innerHTML = p2
secHead.innerHTML = p3



function reverse() {

    console.log(p3)
    if (p3 == 0) {
        p2--;
        minHead.innerHTML = p2;
        p3 = 60;

    } else if (p2 == 0) {
        p1--;
        hourHead.innerHTML = p1
        p2 = 60;

    }
    p3--;
    secHead.innerHTML = p3;

}

function start() {
    setInterval(reverse, 1000)


    //Quiz
    function Quiz(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    Quiz.prototype.getQuestionIndex = function() {
        return this.questions[this.questionIndex];
    }

    Quiz.prototype.guess = function(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }

        this.questionIndex++;
    }

    Quiz.prototype.isEnded = function() {
        return this.questionIndex === this.questions.length;
    }


    function Question(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    Question.prototype.isCorrectAnswer = function(choice) {
        return this.answer === choice;
    }


    function populate() {
        if (quiz.isEnded()) {
            showScores();
        } else {
                             //question
            var element = document.getElementById("question");
            element.innerHTML = quiz.getQuestionIndex().text;

                              //options
            var choices = quiz.getQuestionIndex().choices;
            for (var i = 0; i < choices.length; i++) {
                var element = document.getElementById("choice" + i);
                element.innerHTML = choices[i];
                guess("btn" + i, choices[i]);
            }

            showProgress();
        }
    };

    function guess(id, guess) {
        var button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            populate();
        }
    };


    function showProgress() {
        var currentQuestionNumber = quiz.questionIndex + 1;
        var element = document.getElementById("progress");
        element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
    };

    function showScores() {
        var gameOverHTML = "<h1>Result</h1>";
        gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
        var element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
    };

                                    //questions here
    var questions = [
        new Question("The height of K2, the second highest mountain on the Earth, is _____ feet above see level.", [28251, 28451, 28651, 28851], 28251),
        new Question("Pakistan’s LNG terminals are located at", ["Karachi Port", "Port Qasim", "Gwadar Port", "Keti Bandar"], "Port Qasim"),
        new Question("The famous “Hanna Lake” is located in the Pakistani city of", ["Islamabad", "Gwadar", "Peshawar", "Quetta"], "Quetta"),
        new Question("Pakistan is located in the", ["East Asia", "West Asia", "South Asia", "Central Asia"], "South Asia"),
        new Question("Pakistan has a 1046 kilometer coastline in Sindh and Baluchistan. The coastline is located along the", ["Arabian Sea", "Gwadar Coast", " Iranian Sea", "Gulf Sea"], "Arabian Sea"),
        new Question("Which from the following countries is not bordered by Pakistan?", ["India", "Afghanistan", " China", "Bangladesh"], "Bangladesh"),
        new Question("The only country with which Pakistan shares a maritime border (and not the land border) is", ["Iran", "Oman", "UAE", "Saudi Arabia"], "Oman"),
        new Question("K2 the second highest mountain in the world is located along the border of Pakistan and", ["India", "Afghanistsan", "China", "Iran"], "China"),
        new Question("Shimla Agreement between India and Pakistan was signed on 2 July", ["1971", "1972", "1973", "1974"], "1972"),
        new Question("Pakistan tested nuclear weapons on", ["24 May 1998", "26 May 1998", "28 May 1998", "30 May 1998"], "28 May 1998"),
    ];

                                          // create quiz
    var quiz = new Quiz(questions);

                                       // display quiz
    populate();
}