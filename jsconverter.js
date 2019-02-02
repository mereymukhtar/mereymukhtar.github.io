var cakes = [];

cakes.push({
    "name": "Tiramisu",
    "desc": "",
    "calories": 400,
    "img": "https://i.imgur.com/WvH4cCk.png"
});

cakes.push({
    "name": "Red Velvet",
    "desc": "",
    "calories": 500,
    "img": "https://i.imgur.com/qnR4cZO.png"
});

cakes.push({
    "name": "Honey Cake",
    "desc": "",
    "calories": 450,
    "img": "https://i.imgur.com/FihkHY0.png"
});

cakes.push({
    "name": "Milk Girl",
    "desc": "",
    "calories": 460,
    "img": "https://i.imgur.com/W1dLhfH.png"
});

cakes.push({
    "name": "Tiramisu portion",
    "desc": "",
    "calories": 80,
    "img": "https://i.imgur.com/krrgHhp.jpg"
});

cakes.push({
    "name": "Bagels with cheese",
    "desc": "",
    "calories": 100,
    "img": "https://i.imgur.com/MuvYL4F.jpg"
});

cakes.push({
    "name": "Eclair",
    "desc": "",
    "calories": 120,
    "img": "https://i.imgur.com/4sbgNsN.jpg"
});

cakes.push({
    "name": "Black Prince",
    "desc": "",
    "calories": 550,
    "img": "https://i.imgur.com/EL4RWFv.jpg"
});

cakes.push({
    "name": "Samsa with meat and pumpkin",
    "desc": "",
    "calories": 130,
    "img": "https://i.imgur.com/Uv6laOl.jpg"
});

cakes.push({
    "name": "Samsa with meat",
    "desc": "",
    "calories": 110,
    "img": "https://i.imgur.com/iU5X1Fr.jpg"
});

cakes.push({
    "name": "Cottage cheesecake",
    "desc": "",
    "calories": 95,
    "img": "https://i.imgur.com/XKI0iAK.jpg"
});

cakes.push({
    "name": "Cheesecake",
    "desc": "",
    "calories": 350,
    "img": "https://i.imgur.com/yVGVFtk.jpg"
});

function showCake(id) {
    document.getElementById("cake-detail").innerHTML = getCakeDetailHTML(id);
}

function showCalories(id) {
    var grams = document.getElementById("grams");
    var cal = document.getElementById("calories");
    cal.innerHTML = `<b>${grams.value}</b> gramms of <i>${cakes[id].name}</i> is <b>${cakes[id].calories * grams.value / 100.0}</b> calories.`
}

function getCakeDetailHTML(id) {
    return `
    <h1>${cakes[id].name}</h1>
    <h2>${cakes[id].desc}</h2>
    <p>
    How many grams do you want:
    <input id="grams" type="number" onchange="showCalories(${id})"/>
    </p>
    <p id="calories">
    </p>

  `;
}

function getCakeImageHTML(id) {
    return `
    <img src="${cakes[id].img}" alt="img" class="cake" onclick="showCake(${id})"/>
  `;
}

var cake_list = document.getElementById("cake-list");
for (var i = 0; i < cakes.length; i++) {
    cake_list.innerHTML += getCakeImageHTML(i);
}

/*Syntax To Clock*/

var clockID = null;
var timerRunning = false;

function showtime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeValue = "" + ((hours > 12) ? hours - 12 : hours)
    if (timeValue == "0") timeValue = 12;
    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    timeValue += (hours >= 12) ? " PM" : " AM";
    var clock = document.getElementById("myClock");
    clock.value = timeValue;
    clockID = setTimeout("showtime()", 1000);
}

function startclock() {
    timerRunning = true;
    showtime();
}

function stopclock() {
    if (timerRunning) clearTimeout(timerID);
    timerRunning = false;
}



/*Syntax To Timer */

var second = 0;
var mili = 0;
var timerID = null;

function TimerTick() {
    if (mili >= 9) {
        mili = 0;
        second += 1;
    }
    else {
        mili += 1;
    }

    var MyTimerCount = document.getElementById("myTimer");
    MyTimerCount.value = second + '.' + mili;
}

function starttimer() {
    timerID = setInterval(TimerTick, 100, null);
}

function stoptimer() {
    if (timerID != null) clearInterval(timerID);
}