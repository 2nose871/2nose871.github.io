//時計
function setfig(num) {
    var ret;
    if( num < 10 ) { ret = "0" + num; }
    else { ret = num; }
    return ret;
 }
 
 function set2fig(Num) {
    var Ret;
    if( Num < 100 ) { Ret = "0" + Num; }
    else { Ret = Num; }
    return Ret;
 }
 
 function showClock1(){
 var nowTime = new Date();
 var nowHour = setfig( nowTime.getHours() );
 var nowMin = setfig( nowTime.getMinutes() );
 
 var sTm = nowHour + ":" + nowMin;
 document.getElementById("ClockArea").innerHTML = sTm;
 }
 setInterval('showClock1()',100);