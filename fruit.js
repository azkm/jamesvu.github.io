i = 0
var score = 0
var currAns;
var ques = ["null", 
"Which of the following is a fruit?",
"What type of fruit is the pineapple?", 
"Which statement does NOT define the difference between lemon and lime? ", 
"Which fruit does not have  seeds inside?",
"Which name is described as the study of fruits?",
"Which type of banana does not easily rot?",
"Which fruit shows a sign of wealth?", 
"Which type of  fruit juice is uncommon in markets?",
"Which citrus fruit can be mixed with honey to soothe your throat?",
"Which fruit has the most color variety?"
];
var ansA = ["null",
"Apple",
"Citrus",
	"One is yellow, one is green",
    "Strawberry", 
    "Cardiology",
    "Cavendish Banana",
    "Pineapple", 
    "Apple", 
    "Lemon",
    "Orange"
];
var ansB = ["null", 
"Avocado",
"Apple", 
"Lemons are bigger",
"Blueberry", 
"Pomology", 
"Red Banana", 
"Dragon Fruit", 
"Grape", 
"Orange", 
"Apple",
];
var ansC = ["null", 
"tomato", 
"Berry",
	"Lemons are acids, Limes are bases", 
    "Olive", 
    "Psychology", 
    "Lady Finger Banana",
    "Both of the above", 
    "Pomegranate", 
    "Grapefruit", 
    "Grape"
];
var ansD = ["null", 
"corn", 
"Melon",
	"All of the above are correct", 
    "Apple",
    "Neurology", 
    "Apple Banana", 
    "Squash", 
    "Orange", 
    "Lime", 
    "Lemon"
    ];
var realAns = ["null", "D", "C", "D", "A", "B", "D", "C", "C", "A", "B"];

function main(){
if (i==10)  {
    if (score > 8){
    alert("Congratulations! You passe the test with " + score * 10 + "% correct!")
    }
    else    {
    alert("Too bad. You failed the test with " + score * 10 + "% correct.")
    }
}
else    {
    
i++
document.getElementById("quesNum").innerHTML=i
document.getElementById("question").innerHTML=ques[i]
document.getElementById("choiceA").innerHTML=ansA[i]
document.getElementById("choiceB").innerHTML=ansB[i]
document.getElementById("choiceC").innerHTML=ansC[i]
document.getElementById("choiceD").innerHTML=ansD[i]
document.getElementById("nextQuestion").style.visibility = 'hidden';
document.getElementById("displayScore").innerHTML=score
}
}
function answer()   {
var currAns= document.selection.answer.value;
if (currAns === realAns[i]) {
alert("Correct!")
score++
document.getElementById("displayScore").innerHTML = score;
}
else    {
alert("Incorrect!")
}
document.getElementById("submit").style.visibility = 'hidden';
document.getElementById("nextQuestion").style.visibility = 'visible';
}
