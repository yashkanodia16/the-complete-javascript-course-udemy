var tip,amount;
var tipsArray = new Array();
var totalArray = new Array();
 function calc(bill){
    switch(true){
    case (bill < 50):
        tip = bill * 0.2;
        amount = bill + tip;
        tipsArray.push(tip);
        totalArray.push(amount);
        break;
    case ((50 < bill) &&(bill < 200)):
        tip = bill * 0.15;
        amount = bill + tip;
        tipsArray.push(tip);
        totalArray.push(amount);
        break;
    case (bill > 200):
        tip = bill * 0.10;
        amount = bill + tip;
        tipsArray.push(tip);
        totalArray.push(amount);
        break;
    }
}

calc(124);
calc(48);
calc(268);