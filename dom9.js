function makebubble() {
    document.querySelector("#btn").innerHTML = "";
    for (var i = 1; i < 127; i++) {
        var rn = Math.floor(Math.random() * 10);
        document.querySelector("#btn").innerHTML += `<div class="bubble" > ${rn} </div> `
    }
}

var timer = 60;
function handletime() {
    setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerdiv").textContent = timer;
        }
        else {
            document.querySelector("#btn").innerHTML = `<h1> Game over </h1> `;
        }

    }, 1000);
}
var hitnum;
function getNewHit() {
    hitnum = Math.floor(Math.random() * 10)
    document.querySelector("#hitdiv").textContent = hitnum;
}

var score = 0;
function increaseScore() {
    document.querySelector("#scorediv").textContent = score;
    score = score + 10;
}
function handelBubbleClick() {
    document.querySelector("#btn").addEventListener("click", function (dets) {
        if (Number(dets.target.textContent) === hitnum) {
            getNewHit();
            makebubble();
            handelBubbleClick();
            increaseScore();
            
        }



    })

}
handelBubbleClick()
makebubble();
handletime();
getNewHit();
increaseScore();
