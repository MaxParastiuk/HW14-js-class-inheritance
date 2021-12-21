let Clock = function (tagClass) {
    this.tagClass = tagClass;
    this.elem = this.createElem();
}

Clock.prototype.createElem = function () {
    let div = document.createElement("div")
    div.className = this.tagClass + " full";
    document.body.append(div);
    div.style.fontSize = "64px";
    return div;
}

Clock.prototype.clockFormat = function () {
    this.elem.addEventListener('click', () => {
        this.elem.classList.toggle('full');
    })
}
Clock.prototype.render = function () {

    this.elem.innerHTML = this.getTime();
}

Clock.prototype.getTime = function () {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    return `${hours}:${minutes}:${seconds}`
}

let ClockChild1 = function (elem) {
    Clock.call(this, elem)
}
ClockChild1.prototype = Object.create(Clock.prototype)
ClockChild1.prototype.getTime = function () {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let mseconds = time.getMilliseconds()
    if (this.elem.classList.contains('full')) {
        return `${hours}:${minutes}:${seconds}:${mseconds}`
    } else {
        return `${hours}:${minutes}`
    }
}

let ClockChild2 = function (tagClass) {
    Clock.call(this, tagClass)
}

ClockChild2.prototype = Object.create(Clock.prototype);
ClockChild2.prototype.getTime = function () {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds()
    let year = time.getFullYear()
    if (this.elem.classList.contains('full')) {
        return `${hours}:${minutes}:${seconds} , ${year}`
    } else {
        return `${hours}:${minutes}`
    }
}

let time = new ClockChild1("clock1");
setInterval(time.render.bind(time), 1000);
time.clockFormat();

let time2 = new ClockChild2("clock2");
setInterval(time2.render.bind(time2), 1000);
time2.clockFormat();



