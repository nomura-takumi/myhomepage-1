
let modalWindow = null;

function ModalOpen(number){
    let modals = document.getElementsByClassName("modal-window");
    modalWindow = modals[number];
    modalWindow.style.display = "block";

    // スクロール禁止
    document.addEventListener('touchmove', disableScroll, {passive: false});
    document.addEventListener('mousewheel', disableScroll, {passive: false});
}


function ModalClose(){
    if(modalWindow){
        modalWindow.classList.add("modal-close-anim");

        setTimeout(()=>{
            modalWindow.classList.remove("modal-close-anim");
            modalWindow.style.display = "none";
            modalWindow = null;
            
        }, 400);
    }
    // スクロール解除
    document.removeEventListener('touchmove', disableScroll, {passive: false});
    document.removeEventListener('mousewheel', disableScroll, {passive: false});
}

addEventListener("click", OutSideClose);
function OutSideClose(event){
    if(event.target == modalWindow){
        ModalClose();
    }
}

//スクロール操作
function disableScroll(event) {
    event.preventDefault();
}

//ホバー無効
function NonHover(){
    const nonHover = document.getElementsByClassName("hover-text");
        nonHover.addEventListener("mouseover", (event)=>{
            event.preventDefault();
        });
}


//プレイ
function PlayClick(name){
    let value = localStorage.getItem(name + "_Play");
    ++value;

    localStorage.setItem(name + "_Play", value);
}

function GetPlay(name){
    //nullチェックをしておく
    let item = localStorage.getItem(name + "_Play");
    document.write(item);
}

//高評価
function GoodClick(name){
    let value = localStorage.getItem(name + "_Good");
    ++value;

    localStorage.setItem(name + "_Good", value);
}

function GetGood(name){
    //nullチェックをしておく
    let item = localStorage.getItem(name + "_Good");
    document.write(item);
}


//テンプレート
{/* <div class="title"></div>
                <div class="modalOpen">
                    <img class="img" src="images/othello.png" onclick="ModalOpen(1)">
                </div>
                <div class="modal-window">
                    <div class="modal-contents">
                        <div class="modal-header">
                            <h1></h1>
                            <span class="modalClose" onclick="ModalClose()">&times;</span>
                        </div>
                        <div class="modal-body">
                            <div class="text">
                                <div class="free-text">
                                    
                                </div>
                                <div class="text-border"></div>
                                <div class="info-text">
                                    制作期間：<br>
                                    制作時間：<br>
                                    使用言語：<br>
                                    技術　　：<br>
                                    評価　　：<br>
                                </div>
                            </div>
                            <video src="videos/KnifeSurvivor_promo.mp4" controls playsinline volume="0.5"></video>
                        </div>
                    </div>
                </div> */}