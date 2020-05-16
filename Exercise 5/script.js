
var john = {
    tip : [],
    total : [],
    amount : [124,48,268,180,42],
    calculate : function(){
        for(var i=0;i<this.amount.length;i++){
            if(this.amount[i]<=50){
                this.tip.push(this.amount[i]*0.2);
                this.total.push(this.amount[i] + (this.amount[i]*0.2));
            }
            else if((this.amount[i]>50) && (this.amount[i]<=200))
                 {
                    this.tip.push(this.amount[i]*0.15);
                    this.total.push(this.amount[i] + (this.amount[i]*0.15));
                 }
            else {
                this.tip.push(this.amount[i]*0.1);
                this.total.push(this.amount[i] + (this.amount[i]*0.1));
            }
        }
    }
};

john.calculate();

var mike = {
    tip : [],
    total : [],
    amount : [77,375,110,45],
    calculate : function(){
        for(var i=0;i<this.amount.length;i++){
            if(this.amount[i]<=100){
                this.tip.push(this.amount[i]*0.2);
                this.total.push(this.amount[i] + (this.amount[i]*0.2));
            }
            else if((this.amount[i]>100) && (this.amount[i]<=300))
                 {
                    this.tip.push(this.amount[i]*0.1);
                    this.total.push(this.amount[i] + (this.amount[i]*0.1));
                 }
            else {
                this.tip.push(this.amount[i]*0.25);
                this.total.push(this.amount[i] + (this.amount[i]*0.25));
            }
        }
    }
};

mike.calculate();

function average(ave){
    var sum=0;
    for(var i=0;i<ave.length;i++)
        sum = sum + ave[i];
    var avg = sum / ave.length;
    return avg;
}

if(average(john.tip) > average(mike.tip))
    console.log("John Family gave more tip");
else if(average(john.tip) < average(mike.tip))
    console.log("Mike Family gave more tip");
else
    console.log("Both Families gave same tip");
