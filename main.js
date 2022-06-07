const play = document.querySelector('.play');
const sec = document.querySelector('.sec .time');

let count = 10;

play.addEventListener('click', function(){
    sec.textContent = count;
    setInterval(function () {
    count--;
    if (count >= 0) {
        sec.textContent = count;
    }
    if (count == 0) {
        alert('Finish');
    }
    }, 1000);
})