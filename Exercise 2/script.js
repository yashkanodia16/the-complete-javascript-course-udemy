var avgTeam1, avgTeam2, avgTeam3;
avgTeam1 = (89 + 120 + 103)/3;
avgTeam2 = (116 + 94 + 123)/3;
avgTeam3 = (97 + 134 + 105)/3;

if((avgTeam1 > avgTeam2) && (avgTeam1 > avgTeam3)){
    console.log("John Team wins with Average:" + avgTeam1);
}
else if((avgTeam1 < avgTeam2) && (avgTeam3 < avgTeam2)){
    console.log("Mike Team wins with Average:" + avgTeam2);
}
else if((avgTeam3 > avgTeam1) && (avgTeam3 > avgTeam2)) {
    console.log("Mary Team wins with Average:" + avgTeam3);
}
else{
    console.log("Match is Draw");
}