

var x = document.getElementById("myBtn");
x.addEventListener("click", funcName);


async function funcName(){
    const response = await fetch('https://api.adviceslip.com/advice');
    var data = await response.json();

    const adviceNum= data.slip.id;
    const advice= data.slip.advice;

        document.getElementById("oznaka").innerHTML = "advice #"+adviceNum;
        document.getElementById("nasvet").innerHTML = advice;

}






    
    
