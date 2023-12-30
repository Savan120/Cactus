function darkmode(){
    if (confirm("Make Screen to dark") == true){
    $("#left").css({"background-color": "#331D2C"})
    $("#right").css({"background-color": "#2D033B"})
    $("#righttop").css({"background-color":"#2D033B"})
    $("#cart").css({"background-color":"#2D033B"})
    $("#bottomnav").css({"background-color":"#331D2C"})
    $("#righttop h3").css({"color":"white"})
    $("#righttop i").css({"color":"white"})
    $("#cart").css({"color":"white"})
    $("#moon").css({display: "none"})
    $("#sun").css({display: "initial"})
    }
}

function lightmode(){
    if (confirm("Make Screen to light") == true){
    $("#left").css({"background-color": "rgb(0, 94, 112)"})
    $("#right").css({"background-color": "#f0e4e7"})
    $("#righttop").css({"background-color":"#f0e4e7"})
    $("#cart").css({"background-color":"#f0e4e7"})
    $("#bottomnav").css({"background-color":"rgb(0, 94, 112)"})
    $("#righttop h3").css({"color":"black"})
    $("#righttop i").css({"color":"black"})
    $("#cart").css({"color":"black"})
    $("#moon").css({display: "initial"})
    $("#sun").css({display: "none"})
    }
}

document.querySelector("#moon").addEventListener("click", function(){
    darkmode();
});

document.querySelector("#sun").addEventListener("click", function(){
    lightmode();
});

