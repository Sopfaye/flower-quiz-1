let currentQuestion = 0;
let score = 0;
let countHint = 0;
let countAnswer = 0;
let questions = [
  {
     //question 1
  "question": "What is the world's most expensive flower?",
  "a": "Saffron Crocus",
  "b": "Kadupul",
  "c": "Juliet Rose",
  "d": "Gloriosa",
  "image":"quizimages/q1.jpg",
  "answer": "b",
  "hint": "The answer almost has an action word in it"
  },
  {
     //question 2
  "question": "Which flower of the following is toxic to dogs?",
  "a": "Rose",
  "b": "Orchid",
  "c": "Sunflower",
  "d": "Daffodil",
  "image":"quizimages/q2.jpg",
  "answer": "d",
  "hint": "They bloom in early spring"
  },
  {
     //question 3
  "question": "What is the national flower of Canada?",
  "a": "Bunchberry",
  "b": "Iris",
  "c": "Jasmine",
  "d": "Cherry Blossom",
  "image":"quizimages/q3.jpg",
  "answer": "a",
  "hint": "It has fruits in it's name"
  },
  {
     //question 4
  "question": "Lotus is the national flower of __",
  "a": "India",
  "b": "Austria",
  "c": "Ukraine",
  "d": "France",
  "image":"quizimages/q4.jpg",
  "answer": "a",
  "hint": "It's a country in South Asia"
  },
  {
     //question 5
  "question": "What is the rarest colour of Rose?",
  "a": "Red",
  "b": "Yellow",
  "c": "Blue",
  "d": "White",
  "image":"quizimages/q5.jpg",
  "answer": "c",
  "hint": "Maybe think the rarest colour in nature"
  },
  { //question 6
  "question": "What is the rarest flower in the world?",
  "a": "Ghost Orchid",
  "b": "The Middlemist's Red Camellia",
  "c": "Flame Lily",
  "d": "Corpse Flower",
  "image":"quizimages/q6.jpg",
  "answer": "b",
  "hint": "The answer has a colour in its name"
  },
  {
     //question 7
  "question": "Which of the following flower is safe to eat?",
  "a": "Tulips",
  "b": "Hydrangeas",
  "c": "Dahlia",
  "d": "Pansies",
  "image":"quizimages/q7.jpg",
  "answer": "d",
  "hint": "A type of cooking equipment is in the name"
  },
  {
     //question 8
  "question": "What is the meaning of Lilac?",
  "a": "Joy Of Youth",
  "b": "Sympathy",
  "c": "Jealousy",
  "d": "Nobility",
  "image":"quizimages/q8.jpg",
  "answer": "a",
  "hint": "Think about happiness"
  },
  {
     //question 9
  "question": "Which two are the December Birth Flowers?",
  "a": "Gladiolus and Poppy",
  "b": "Holly and Narcissus",
  "c": "Marigold and Cosmos",
  "d": "Daisy and Sweet Pea",
  "image":"quizimages/q9.jpg",
  "answer": "b",
  "hint": "One of the flowers rhyme with jolly"
  },
  {
     //question 10
  "question": "Larkspur and Water Lily are the two birth flowers of which month?",
  "a": "May",
  "b": "August",
  "c": "July",
  "d": "March",
  "image":"quizimages/q10.jpg",
  "answer": "c",
  "hint": "It's during the Summer"
  }
];

if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register('/sw.js');
 }

function loadQuestion() {
   
   // close light box for first question
   if (currentQuestion == 0) {
      closeLightBox();
      closeLightBox1();
   }
   
   // load the image
   let img = document.getElementById("image");
   img.src = questions[currentQuestion].image;
   img.style.maxWidth = "70vh";
   img.style.maxHeight = "80vh";
   img.style.borderRadius = "15px";
 
   // load the question and answers
   document.getElementById("question").innerHTML = questions[currentQuestion].question;
   document.getElementById("a").innerHTML = "A. " + questions[currentQuestion].a;
   document.getElementById("b").innerHTML = "B. " + questions[currentQuestion].b;
   document.getElementById("c").innerHTML = "C. " + questions[currentQuestion].c;
   document.getElementById("d").innerHTML = "D. " + questions[currentQuestion].d;
} // loadQuestion
function markIt(ans) {
   let message = "";
     if (ans == questions[currentQuestion].answer) {
     
      // add 1 to score
      score++;
     
      // display score
      document.getElementById("score").innerHTML = score + "/" + questions.length;
     
      message = "Correct!!!! Your score is " + score + "/" + questions.length;
 
   } else {
      message = "Incorrect :< Your score is " + score + "/" + questions.length;
   }// else
 
   // move to the next question
   currentQuestion++;
   if (currentQuestion >= questions.length && score == 10) {
      // create a special message
      message = "YOU GOT " + score + "/" + questions.length + "!!!" +" THAT GETS AN A++++!! KEEP ON BLOOMING!!!";
   } else if (currentQuestion >= questions.length && score >= 5 ) {
     message = "A FOR EFFORT! YOU GOT " + score + "/" + questions.length + " STUDY A BIT MORE BUD TO GET AN A+++!!!";
   } else if (currentQuestion >= questions.length && score < 5 ) {
     message = "UH OH BUD YOU GOT " + score + "/" + questions.length + " SORRY BUT THAT'S A F! " +" YOU SHOULD STUDY A LOT MORE!!";
   }
     else {
      loadQuestion();
   }
 
 
   // show the lightbox
   document.getElementById("lightbox").style.display = "block";
   document.getElementById("message").innerHTML = message;
}
  // markIt
function closeLightBox() {
   document.getElementById("lightbox").style.display = "none";
} // closeLightbox


function hintBtn() {
  let message1 = "";
  if (countHint < 1) {
  if (questions[currentQuestion].hint){
  message1 = "Your hint is that " + questions[currentQuestion].hint;
  document.getElementById("lightbox1").style.display = "block";
  document.getElementById("message1").innerHTML = message1;
  countHint ++;
}
} else {
  alert("You already used your hint!");
}
}
function closeLightBox1() {
   document.getElementById("lightbox1").style.display = "none";
}
