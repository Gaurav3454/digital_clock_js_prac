const clock = document.getElementById('clock');

let dateData = setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
}, 1000);