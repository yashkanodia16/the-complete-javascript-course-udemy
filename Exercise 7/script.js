
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


Question.prototype.random = function(){
    console.log(this.question);
    for(var x=0;x<this.answers.length;x++){
        console.log(x+':'+" "+this.answers[x]);
    }
    return prompt('which is the correct option?');
}

Question.prototype.isCorrect = function(randomElem){
    if(randomElem == this.correct){
        console.log('Correct Answer!');
        count++;
    }        
    else
        console.log('Try Again!'); 
    console.log('Total points:' + count); 
    
}

var count =0;

 function infi(){
    var quesNo = [Math.floor(Math.random() * questionArray.length)];
    var randomElem = questionArray[quesNo].random();
    console.log(randomElem);
    if(randomElem != 'Exit' && randomElem != 'exit'){    
        questionArray[quesNo].isCorrect(randomElem);
        infi();
    }
}
infi();


})();
