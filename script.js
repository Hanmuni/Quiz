let questions = [

    {
        "question": "Was ist eine Bogenlampe im Fußball?",
        "answer_1": "Wenn ein Ball angehoben und über den Torwart hinweg ins Tor geschossen wird",
        "answer_2": "Eine Abseitsvariante",
        "answer_3": "Ein Elfmetertor",
        "answer_4": "Lichtershow in der Fankurve",
        "right_answer": 1,
    },

    {
        "question": "Welches ist das größte Fußballstadion in Europa?",
        "answer_1": "Camp Nou in Barcelona",
        "answer_2": "Allianz Arena in München",
        "answer_3": "Wembley-Stadion in London",
        "answer_4": "Parc des Princes in Paris",
        "right_answer": 1,
    },

    {
        "question": "In welchem Land fand die erste Fußball-WM statt?",
        "answer_1": "Deutschland",
        "answer_2": "Brasilien",
        "answer_3": "Uruguay",
        "answer_4": "USA",
        "right_answer": 3,
    },

    {
        "question": "Was ist eine Schwalbe im Fußball?",
        "answer_1": "Eine Drohnenkamera die über dem Feld fliegt",
        "answer_2": "Fußballschuhe mit hoher Sprungkraft",
        "answer_3": "Gesang der Fankurve",
        "answer_4": "Ein vorgetäuschtes Foul",
        "right_answer": 4,
    },

    {
        "question": "Welcher deutscher Verein neben Dortmund und München gewann ebenfalls die Champions League?",
        "answer_1": "Hamburger SV",
        "answer_2": "Schalke 04",
        "answer_3": "Werder Bremen",
        "answer_4": "TSG Hoffenheim",
        "right_answer": 1,
    },

    {
        "question": "In welchem Erdteil wurde 1991 die erste Frauenfußball-WM ausgetragen?",
        "answer_1": "Europa",
        "answer_2": "Asien",
        "answer_3": "Afrika",
        "answer_4": "Australien",
        "right_answer": 2,
    },

    {
        "question": "Was ist ein Hattrick?",
        "answer_1": "Der Champions League Pokal",
        "answer_2": "Die Armbinde des Teamkapitäns",
        "answer_3": "Extra Nachspielzeit",
        "answer_4": "Drei von einem Spieler hintereinander erzielte Tore",
        "right_answer": 4,
    },

    {
        "question": "Welcher Fußballverein ist deutscher Rekordmeister?",
        "answer_1": "Bayern München",
        "answer_2": "Borussia Dortmund",
        "answer_3": "FC Nürnberg",
        "answer_4": "Hamburger SV",
        "right_answer": 1,
    },

    {
        "question": "Was ist die FIFA?",
        "answer_1": "WM-Maskottchen",
        "answer_2": "Hymne der Champions League.",
        "answer_3": "Fußball-Weltverband",
        "answer_4": "Sponsor der Bundesliga",
        "right_answer": 3,
    },

    {
        "question": "Wie wird das Match zwischen Real Madrid und FC Barcelona genannt?",
        "answer_1": "El Derbi Madrileño",
        "answer_2": "El Clásico",
        "answer_3": "El Derbi Barceloní",
        "answer_4": "El Viejo Clásico",
        "right_answer": 2,
    },
];

let currentQuestion = 0;

let rightQuestion = 0;

let audioSucess = new Audio('mp3/success.mp3');
let audioFailure = new Audio('mp3/wrong.mp3');


function loadQuestions() {

    document.getElementById('question-box').innerHTML = generateQuestions(currentQuestion);

    let progress = Math.round(currentQuestion / questions.length * 100);

    document.getElementById('progress-percent').style.width = `${progress}%`;
    document.getElementById('progress-percent').innerHTML = `${progress}%`;

}

function generateQuestions(currentQuestion) {

    return `
    
    
    <div class="center-box-question">

                <div class="question"> ${questions[currentQuestion].question} </div>   
                <div class="progress-bar"> 
                <div class="progress-percent" id="progress-percent" > 

                </div>
                
              </div>

                    <button id="answer_1" class="answer" onclick="answer('answer_1')">

                        
                    <div class="answer-letter" id="answer_1_letter" > 
                    
                    <p> A </p>
                    
                    </div>

                 <div class="answer-option">
                     
                 ${questions[currentQuestion].answer_1}

                 </div>

             </button>

                    <button id="answer_2" class="answer" onclick="answer('answer_2')">

                        
                    <div class="answer-letter" id="answer_2_letter" > 
                    
                    <p> B </p>
                    
                    </div>
                

                 <div class="answer-option">
                     
                 ${questions[currentQuestion].answer_2}

                 </div>

             </button>

             <button id="answer_3" class="answer" onclick="answer('answer_3')">

                        
             <div class="answer-letter" id="answer_3_letter" > 
             
             <p> C </p>
             
             </div>
         

          <div class="answer-option">
              
          ${questions[currentQuestion].answer_3}

          </div>
      </button>

      <button id="answer_4" class="answer" onclick="answer('answer_4')">

                        
      <div class="answer-letter" id="answer_4_letter" > 
      
      <p> D </p>
      
      </div>


   <div class="answer-option">
       
   ${questions[currentQuestion].answer_4}

   </div>

</button>

                <div class="question-status"> 
            
                <p> <b> ${currentQuestion + 1} </b> von <b> ${questions.length} </b> Fragen </p>

                <a href='#' class="next-btn d-none" id="next-btn" onclick="nextQuestion()"> NEUE FRAGE &ensp; <img src="img/arrow.png">
                </a>

                </div>

     </div>
    `;
}

function showQuestion() {
    if (currentQuestion == questions.length) {

        finishQuiz();

    } else {

        document.getElementById('greeting').classList.add('d-none');
        document.getElementById('question-box').classList.remove('d-none');

        loadQuestions();
    }
}



function answer(selection) {

    let selectedAnswer = selection.slice(-1);
    let rightAnswer = questions[currentQuestion].right_answer;

    if (selectedAnswer == rightAnswer) {
        document.getElementById(selection).style = 'background-color: #7FDF59; color: white;';
        document.getElementById('answer_' + `${rightAnswer}_letter`).style = 'background-color: #B7F799; color: white;';
        document.getElementById('next-btn').classList.remove('d-none');
        rightQuestion++;
        audioSucess.play();

    } else { // Falsche Antwort

        document.getElementById(selection).style = 'background-color: #FFA4A4; color: white;';
        document.getElementById(selection + '_letter').style = 'background-color: #F81918; color: white;';
        document.getElementById('answer_' + `${rightAnswer}`).style = 'background-color: #7FDF59; color: white;';
        document.getElementById('answer_' + `${rightAnswer}_letter`).style = 'background-color: #B7F799; color: white;';
        document.getElementById('next-btn').classList.remove('d-none');

        audioFailure.play();

    }
}


function nextQuestion() {

    currentQuestion++;

    showQuestion();

}

function finishQuiz() {

    document.getElementById('question-box').classList.add('d-none');

    document.getElementById('quiz-finish').classList.remove('d-none');

    document.getElementById('right-questions').innerHTML = ` <h1> Anzahl der richtigen Fragen ${rightQuestion} von ${questions.length} </h1>`;
}

function replay() {

    document.getElementById('quiz-finish').classList.add('d-none');
    currentQuestion = 0;
    rightQuestion = 0;

    showQuestion();
}