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

//動画リンク
var gP = new URLSearchParams(document.location.search);
var vid = gP.get("id");
function clearPlayer() {
    document.getElementById("videoPlayer").innerHTML = '';
}

//プレイヤー埋め込み
if(vid != "" && vid != null) {
    document.getElementById("videoPlayer").innerHTML = '<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="'+vid+'"></div>'
}
console.log(vid);
