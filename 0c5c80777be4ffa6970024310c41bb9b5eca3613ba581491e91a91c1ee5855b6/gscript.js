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
var vid = gP.get("v");
function clearPlayer() {
    document.getElementById("videoPlayer").innerHTML = '';
}


//プレイヤー埋め込み
function emP(vid){
    document.getElementById("videoPlayer").innerHTML = '<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="'+vid+'"></div>';
}
if(vid != "" && vid != null) {
    if(vid == "sasameshi"){emP("W0jNXAmR04c");}
    if(vid == "ayabye"){emP("OK5QAwgd3_8");}
    if(vid == "kinkangyoza"){emP("79isKVtXjGw");}
    if(vid == "kochiVlog"){emP("UKWkzPtPmKA");}
    if(vid == "midnightGame"){emP("8cqg7Vg4aZY");}
    if(vid == "mngumi"){emP("bIcCtfqZCRw");}
    if(vid == "mnsub"){emP("-UTecd8K0dA");}
    if(vid == "youmeanpn"){emP("9egwNIDfNJI");}
    if(vid == "bp3_hanami"){emP("Wal9MAt31Lw");}
    if(vid == "bp3_manno"){emP("OE4Udt75zTc");}
    if(vid == "killbba"){emP("8fAXvZTAySg");}
    if(vid == "harutaParking"){emP("eaIy5zH7IZw");}
    if(vid == "kurashikiTour"){emP("OXs_8D1XR8Y");}
    if(vid == "kindakaiChopstick"){emP("tyuudbPxVuE");}
    if(vid == "kawataRade"){emP("ZeNqmX3rsjM");}
    if(vid == "mng2mk8d"){emP("QP3-W7_au7M");}
    if(vid == "mng2mbros"){emP("jGU4GMZV-7w");}
}
console.log(vid);

