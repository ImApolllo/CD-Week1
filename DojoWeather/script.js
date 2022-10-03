var celsius = true;
var arrHigh = [["24°","27°","21°","26°"], ["75°","80°","69°","78°"]];
var arrLow = [["18°","19°","16°","21°"], ["65°","66°","61°","70°"]];

function accept(id){
    var element = document.querySelector(id);
    element.remove();

    console.log("Cookies Accepted")
}

function tempChange(){
    if (celsius) {
        celsius = false;
        var tempHigh = document.querySelector("#high-1")
        var tempLow = document.querySelector("#low-1")
        tempHigh.innerText = arrHigh[1][0];
        tempLow.innerText = arrLow[1][0];

        tempHigh = document.querySelector("#high-2")
        tempLow = document.querySelector("#low-2")
        tempHigh.innerText = arrHigh[1][1];
        tempLow.innerText = arrLow[1][1];

        tempHigh = document.querySelector("#high-3")
        tempLow = document.querySelector("#low-3")
        tempHigh.innerText = arrHigh[1][2];
        tempLow.innerText = arrLow[1][2];

        tempHigh = document.querySelector("#high-4")
        tempLow = document.querySelector("#low-4")
        tempHigh.innerText = arrHigh[1][3];
        tempLow.innerText = arrLow[1][3];

        console.log("Displaying temps in Fahrenheit")
    }else{
        celsius = true;
        var tempHigh = document.querySelector("#high-1")
        var tempLow = document.querySelector("#low-1")
        tempHigh.innerText = arrHigh[0][0];
        tempLow.innerText = arrLow[0][0];

        tempHigh = document.querySelector("#high-2")
        tempLow = document.querySelector("#low-2")
        tempHigh.innerText = arrHigh[0][1];
        tempLow.innerText = arrLow[0][1];

        tempHigh = document.querySelector("#high-3")
        tempLow = document.querySelector("#low-3")
        tempHigh.innerText = arrHigh[0][2];
        tempLow.innerText = arrLow[0][2];

        tempHigh = document.querySelector("#high-4")
        tempLow = document.querySelector("#low-4")
        tempHigh.innerText = arrHigh[0][3];
        tempLow.innerText = arrLow[0][3];

        console.log("Displaying temps in Celsius")
    }

}
