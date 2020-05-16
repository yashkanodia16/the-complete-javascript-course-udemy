var john = {
    fullName : 'John Oba',
    height : 10,
    mass : 50,
    bmiJohn : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mike = {
    fullName : 'Mike Oba',
    height : 10,
    mass : 60,
    bmiMike : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

if(john.bmiJohn() > mike.bmiMike())
    console.log(john.fullName + " " + john.bmi);
else if(mike.bmiMike() > john.bmiJohn())
    console.log(mike.fullName + " " + mike.bmi);
else
    console.log("Both have same BMI");