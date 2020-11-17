const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const submit = document.getElementById("submit");
const form = document.getElementById("comment-form");

const likes = document.querySelector("ul.likes");
const comments = document.getElementById("list");

function incrementCounter() {
    const num = parseInt(counter.innerText);
    counter.innerText = `${num + 1}`;
}

function decrementCounter() {
    const num = parseInt(counter.innerText);
    counter.innerText = `${num - 1}`;
}

let interval = window.setInterval(incrementCounter, 1000);

minus.addEventListener('click', function(e) {
    decrementCounter();
});

plus.addEventListener('click', function(e) {
    incrementCounter();
});

heart.addEventListener('click', function(e) {
    const num = counter.innerText;
    let like = document.getElementById(num);
    if (!!like == false) {
        like = document.createElement('li');
        like.id = num;
        like.dataset.numLikes = 1;
        like.innerText = `${num} has been liked 1 time`;
        likes.appendChild(like);
        
    }
    else {
        const numLikes = `${parseInt(like.dataset.numLikes) + 1}`;
        like.dataset.numLikes = numLikes;
        like.innerText = `${num} has been liked ${numLikes} times`;
    }
});

pause.addEventListener('click', function(e) {
    if (pause.innerText == "pause") {
        window.clearInterval(interval);
        pause.innerText = "resume";
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
    }
    else {
        interval = window.setInterval(incrementCounter, 1000);
        pause.innerText = "pause";
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
    }
});

form.addEventListener('submit', function(e) {
    const input = document.getElementById("comment-input").value;
    const p = document.createElement("p");
    p.innerText = input;
    comments.appendChild(p);
    e.preventDefault();
    document.getElementById("comment-input").value = "";
});
