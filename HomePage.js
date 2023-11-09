//最終更新日をアップデート
function StoreLastUpdated(){
    let date = Get2DigitsDate();
    localStorage.setItem("LastUpdated", date);
    GetLastUpdated();
}

//最終更新日を取得して出力
function GetLastUpdated(){
    let item = localStorage.getItem("LastUpdated");
    document.getElementById("LastUpdated").textContent = "Last Updated:　" + item;
}

//現在時刻を出力
function PrintRealTime(){
    let date = Get2DigitsDate();
    document.getElementById("RealTimeClock").innerHTML = date;
}

setInterval("PrintRealTime()", 1000);

//フォーマット
function Get2DigitsDate(){
    let now = new Date();
    const Y = now.getFullYear();
    const M = ("0" + (now.getMonth() + 1)).slice(-2);
    const D = ("0" + (now.getDate())).slice(-2);
    const h = ("0" + (now.getHours())).slice(-2);
    const m = ("0" + (now.getMinutes())).slice(-2);
    const s = ("0" + (now.getSeconds())).slice(-2);
    
    let date = Y +  "/" + M + "/" + D + " " + h + ":" + m + ":" + s;

    return date;
}



//ハンバーガーメニュー内の<a>タグコンテンツがクリックされた
function CloseHumbergerMenu(){
    const links = document.querySelectorAll("#contents .nav_item");
    links.forEach((link)=>{
        link.addEventListener("click",()=>{
            document.getElementById("drawer_input").checked = false;
        });
    });
}


//情報の隠蔽
function HideInfo(){
    document.querySelectorAll(".hideInfo").forEach((element)=>{
        element.textContent = "**";
    });

    //プロフの一行を<div>で囲って、":"が出現する位置までの文字をカウント・取得し、それを"**"と結合する
}

//モーダルのテキストの縦幅がモーダルウィンドウの縦幅を越えてキモい状態になるのを避ける
window.onresize = function(){
    if(window.innerHeight < 630){
        ModalClose();
    }
}