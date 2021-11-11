// Get all elements
let viewer = document.querySelector('.viewer'),
    progress = document.querySelector('.progress'),
    progressbar = document.querySelector('.progress__filled'),
    toggle = document.querySelector(".toggle"),
    range = document.querySelectorAll('[type="range"]'),
    btnForMusic = document.querySelectorAll("button[data-skip]")
    fullbtn = document.querySelector('.full');


// function
function togglePlay() {
    // if(viewer.paused){
    //     console.log("pausing....")
    //     viewer.play();
    // }
    // else{
    //     console.log("playing Now")
    //     viewer.pause();
    // }
    //simple and short hand methods =================================
    let method = viewer.paused ? 'play' : 'pause';
    viewer[method]();
    toggle.textContent = viewer.paused ? '►' : '❚ ❚';
}
function toggleSlide(e) {
    console.log("name", this.name, e.target.value)
    viewer[this.name] = this.value
}

function changeTime() {
    viewer.currentTime += parseFloat(this.dataset.skip);
}

function toggleProgress() {
    progressbar.style.flexBasis = (viewer.currentTime/viewer.duration)*100 + '%';
}
function skipTime(e){
    console.log("clicked")
    viewer.currentTime = (e.offsetX / progress.offsetWidth) * viewer.duration
}
function fullScreen(){
    viewer.requestFullscreen();
}

// Events
window.addEventListener('load',toggleProgress)
viewer.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
viewer.addEventListener('timeupdate', toggleProgress);
range.forEach((e) => {
    e.addEventListener('mousemove', toggleSlide)
})
btnForMusic.forEach((e) => {
    e.addEventListener('click', changeTime)
})
let click = false;
progress.addEventListener('mousedown',()=>{click = true});
progress.addEventListener('mousemove',(e)=> {click && skipTime(e)})
progress.addEventListener('click',skipTime)
progress.addEventListener('mouseup',()=>{click = false});
fullbtn.addEventListener('click',fullScreen)