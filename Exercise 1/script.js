var markMass,markHeight,johnMass,johnHeight,bmiMark,bmiJohn;
markMass = prompt('Enter Mark Mass in Kg:');
markHeight = prompt('Enter Mark Height in Meters:');
johnMass = prompt('Enter John Mass in kg:');
johnHeight = prompt('Enter John Height in Meters:');
bmiMark = markMass /(markHeight * markHeight);
bmiJohn = johnMass /(johnHeight * johnHeight);
var taller = bmiMark >= bmiJohn;
console.log("Is Mark's BMI higher than John's?" + taller);


