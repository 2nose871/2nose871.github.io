//接続判定
let connection = navigator.connection;
let isMobile = 0;
if (connection) {
    if (connection.type == 'cellular') {
        isMobile = 1;
    }
}

//軽量用設定
let stim = document.getElementsByClassName("thumimg");
function showToast() {
    const toast = document.getElementById("toast");
    toast.innerText = "モバイルデータ通信と判断したため\n軽量版を表示しています";
    
    // クラスを追加して表示
    toast.classList.add("show");

    // 3秒後に自動で消す
    setTimeout(() => {
        toast.classList.remove("show");
    }, 5000);
}
// 通信環境に応じた画質を決定 (isMobileが1なら低画質、0なら高画質)
const quality = isMobile ? "mqdefault.jpg" : "maxresdefault.jpg";
for (let s of stim) {
    const original = s.getAttribute("data-src");
    s.src = original.replace("maxresdefault.jpg", quality);
}
if (isMobile == 0) {
    document.getElementById("headerSub").style.display = "none";
    document.body.style.fontFamily = "LINE Seed JP";
}
if (isMobile == 1) {
    document.getElementById("headerSub").style.display = "";
    document.body.style.fontFamily = "ヒラギノ角ゴ", "Meiryo", "sans-serif";
    showToast();
}

//動画リンク
let gP = new URLSearchParams(document.location.search);
let vid = gP.get("v");
function clearPlayer() {
    document.getElementById("videoPlayer").innerHTML = '';
}


//プレイヤー埋め込み
function emP(vid){
    document.getElementById("videoPlayer").innerHTML = '<div id="player" data-plyr-provider="youtube" data-plyr-embed-id="'+vid+'"></div>';
}
let ytid = "";
if(vid != "" && vid != null) {
    if(vid == "sasameshi"){ytid = "W0jNXAmR04c";}
    if(vid == "ayabye"){ytid = "OK5QAwgd3_8";}
    if(vid == "kinkangyoza"){ytid = "79isKVtXjGw";}
    if(vid == "kochiVlog"){ytid = "UKWkzPtPmKA";}
    if(vid == "midnightGame"){ytid = "8cqg7Vg4aZY";}
    if(vid == "mngumi"){ytid = "bIcCtfqZCRw";}
    if(vid == "mnsub"){ytid = "-UTecd8K0dA";}
    if(vid == "youmeanpn"){ytid = "9egwNIDfNJI";}
    if(vid == "bp3_hanami"){ytid = "Wal9MAt31Lw";}
    if(vid == "bp3_manno"){ytid = "OE4Udt75zTc";}
    if(vid == "killbba"){ytid = "8fAXvZTAySg";}
    if(vid == "harutaParking"){ytid = "eaIy5zH7IZw";}
    if(vid == "kurashikiTour"){ytid = "OXs_8D1XR8Y";}
    if(vid == "kindakaiChopstick"){ytid = "tyuudbPxVuE";}
    if(vid == "kawataRade"){ytid = "ZeNqmX3rsjM";}
    if(vid == "mng2mk8d"){ytid = "QP3-W7_au7M";}
    if(vid == "mng2mbros"){ytid = "jGU4GMZV-7w";}
    if(vid == "shabon"){ytid = "XHxuvVIb4kk";}
    if(vid == "parkandkeiba"){ytid = "1zR9GgzJC2E";}
    if(vid == "shionoesnow"){ytid = "pnVaM9hX_70";}
    if(vid == "kindafish"){ytid = "XIcDiFui-7c";}
    if(vid == "gotoShinspo"){ytid = "XRpk_gBTvLk";}
    if(vid == "flucall"){ytid = "jxToN_0IGgw";}
    if(vid == "snowgotohell"){ytid = "x6vJL1xcB5g";}
}
if (vid !== "" && vid !== null) {
    emP(ytid);
    document.getElementById("topmsg").style.display = "none";
}
console.log(vid);

//動画情報取得
let oEmbedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${ytid}&format=json`;
if (vid != null && vid != "") {
    async function fetchYouTubeTitle() {
                try {
                    const response = await fetch(oEmbedUrl);
                    if (!response.ok) throw new Error('NW Err');
                    const data = await response.json();
                
                    document.getElementById('vtitle').textContent = data.title;
                } catch (error) {
                    document.getElementById('vtitle').style.display = "none;"
                }
            }
            fetchYouTubeTitle();
}
