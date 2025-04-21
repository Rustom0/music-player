let progress = document.getElementById("progress");
let songs = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlicon");

songs.onloadedmetadata = function() {
    progress.max = songs.duration;
    progress.value = songs.currentTime;
}
ctrlIcon.addEventListener("click", () => {
    if (ctrlIcon.classList.contains("fa-pause")) {
        songs.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        songs.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
});
if(songs.play()){
    setInterval(() => {
        progress.value = songs.currentTime;
    },500);

}
progress.onchange = function() {
    songs.play();
    songs.currentTime = progress.value;
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
}