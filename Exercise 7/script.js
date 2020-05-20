
(function(){
var Question = function(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

var questionArray = new Array();
questionArray.push(new Question('What\'s the professor name?',['Mark','John','Kageyama'],0));
questionArray.push(new Question('Which course are you enrolled in?',['Html5','CSS','JavaScript'],2));
questionArray.push(new Question('Did you like the course?',['Yes','No'],0));

var quesNo = [Math.floor(Math.random() * questionArray.length)];

Question.prototype.random = function(){
    return this.question;
}

var randomElem = questionArray[quesNo].random();
console.log(randomElem);

for(var x=0;x<questionArray[quesNo].answers.length;x++){
    console.log(x+':'+" "+questionArray[quesNo].answers[x]);
}

var ans = prompt('which is the correct option?');

Question.prototype.isCorrect = function(ans){
    if(ans == this.correct)
        console.log('Correct Answer!');
    else
        console.log('Try Again!');  
}

questionArray[quesNo].isCorrect(ans);

})();
