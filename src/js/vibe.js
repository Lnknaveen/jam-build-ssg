const vibes = [
    " ...and you are awesome!",
    " ...have a wonderful day!",
    " ...and you've got this!",
    " ...and so is this puppy!"
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];
document.querySelector(".vibe").append(vibe);

var love = document.querySelector(".love");
setInterval(() => {
    love.style.fontSize = love.style.fontSize  === "3em" ? "4em" : "3em";
}, 200);