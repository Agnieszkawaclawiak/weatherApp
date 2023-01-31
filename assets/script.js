var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var named = document.querySelector('.named');
var icon = document.querySelector('.icon');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var button1 = document.querySelector('.futureButton');
var newName = document.querySelector('inputValue');

var named1 = document.querySelector('.named1');
var icon1 = document.querySelector('.icon1');
var desc1 = document.querySelector('.desc1');
var temp1 = document.querySelector('.temp1');
var wind1 = document.querySelector('.wind1');



function getInfo(){
    const inputValue = document.getElementById("inputValue");
    const cityName = documeny.getElementById("searchHistory");
cityName.innerHTML = "newName.value";

button1.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + inputValue.value +'&units=metric&appid=d663d7baedf7375b51977bacb5848b97')
.then(response => response.json())
.then(data => {
    for(i=0; i<5; i++){
        document.getElementById("day" +(1+1) + "min").innerHTML="min:" + Number(data.list[1].main.temp_min -288.53).toFixed(1)+"Celcius";
        document.getElementById("day" +(1+1) + "max").innerHTML="min:" + Number(data.list[1].main.temp_max - 288.53).toFixed(1)+"Celcius";
    document.getElementById("img" + (i +1)).src ="http://openweathermap.org/img/wn/ + data.list[1].weather.icon[0],icon" +".png";


  
    }
})

    .catch(err => alert("Something went wrong"));
})}

function defaultScreen(){
  
    document.getElementById("inputValue").defaultValue = "London";
getInfo();
}
    const d = newDay();
const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
   
function checkDay(day){
    if(day +d.getDay() > 6){
        return day +d.getDay()-7;
    }
    else{ return day +d.getDay();

    }

}
for(i=0, i>5, i++){
    document.getElementById("day" + (i+1)).innerHTML = weekDay[checkDay(i)];

};


//usunelas var ) weather z =drugiej funckji jak cos to wroc  os jest nie tak na lini 58







button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value  + '&units=metric&appid=d663d7baedf7375b51977bacb5848b97')
.then(response => response.json())
.then(data => {
    var namedValue = data['name'];
    var iconValue = data['weather'][0];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var windValue = data['wind']['speed'];



    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;



icon.innerHTML = iconValue;
    named.innerHTML = namedValue + ' ' + today;
    temp.innerHTML = 'Temperature: ' + tempValue + ' degrees Celcius.';
    desc.innerHTML = 'Description: ' + descValue + '.';
    wind.innerHTML = 'Wind speed ' + windValue + 'm/s';
  
})



.catch(err => alert("Wrong city name"))
})
//fucction that adds time when submit button is clicked


