//監聽整個視窗按按鍵
window.addEventListener('keydown', playSound);
window.addEventListener('keyup', stop);

//知道按鍵，觸發按键Unicode值
function play(e) {
    let keyboard = event.keyCode;
    console.log(keyboard);
}

function playSound(e) {
    let keyboard = event.keyCode;
    console.log(keyboard);
    if (
        keyboard === 65 ||
        keyboard === 83 ||
        keyboard === 68 ||
        keyboard === 70 ||
        keyboard === 71 ||
        keyboard === 72 ||
        keyboard === 74 ||
        keyboard === 75 ||
        keyboard === 76
    ) {
        document.getElementById('sound' + keyboard).play();
        document.getElementById('key' + keyboard).classList.add('playing');
    }
}

//load()重新加載 pause()暫停音效，不是結束
function stop(e) {
    let keyboard = event.keyCode;
    console.log(keyboard);
    if (
        keyboard === 65 ||
        keyboard === 83 ||
        keyboard === 68 ||
        keyboard === 70 ||
        keyboard === 71 ||
        keyboard === 72 ||
        keyboard === 74 ||
        keyboard === 75 ||
        keyboard === 76
    ) {
        document.getElementById('sound' + keyboard).load();
        document.getElementById('key' + keyboard).classList.remove('playing');
    }
}

// //官方解法
// window.addEventListener('keydown', function (e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return; //如果沒有找到，直接停止動作返回
//     audio.currentTime = 0; //重製播放進度
//     audio.play();
//     key.classList.add('playing');
// });

// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     this.classList.remove('playing');
// }

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach( key => key.addEventListener('transitionend', removeTransition));
