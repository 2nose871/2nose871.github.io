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
var vd = gP.get("v");
function iframeVideo(videoId) {
    document.getElementById("videoPlayer").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/"+videoId+"?autoplay=1&loop=1&playlist="+videoId+"></iframe>";
}

if (vd == "true") {
    document.getElementById("video1").innerHTML = "<a href=\"javascript:iframeVideo(W0jNXAmR04c)\">晩飯を誘いに電話をかけるの巻</a>";
}

console.log(vd);
