var distance = 0;
var tentoone = false;
var CountDate = "";
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var audio1 = document.getElementById("countdown");
var audio2 = document.getElementById("complete"); 
function buttonOK(arg1) {
    CountDate = `${months[parseInt(arg1.substring(5, 7)) - 1]} ${arg1.substring(8,10)} ${arg1.substring(0, 4)}, ${arg1.substring(12, 17)}:00`;
    startCountdown();
};

function startCountdown() {
    document.getElementById("select").remove();
    document.getElementById("title").innerHTML = "Contagem Regressiva para: " + CountDate;
    var countDownDate = new Date(CountDate).getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("time").innerHTML = `${days} dias<br>${hours} horas<br>${minutes} minutos<br>${seconds} segundos`;
        document.getElementById("ctrtitle").innerHTML = `Contagem Regressiva para: ${CountDate}`
        if (distance < 10999 && distance > 1000 && tentoone == false) {
            tentoone = true;
            audio1.play();
        }
        if (distance < 999) {
            clearInterval(x);
            document.getElementById("time").innerHTML = CountDate;
            audio2.play();
        };
    }, 1);
};