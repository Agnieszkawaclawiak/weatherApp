var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var named = document.querySelector('.named');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');


button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value  + '&units=metric&appid=d663d7baedf7375b51977bacb5848b97')
    .then(response => response.json())
    .then(data => console.log =(data)) 
      
    .catch(err => alert("Wrong city name"))
    })
    

    var searchHistory = (localStorage.searchHistory) ? JSON.parse(localStorage.searchHistory) : [];
document.querySelector(".search").addEventListener("click", () => {
  searchHistory.push(document.querySelector(".inp").value);
  localStorage.searchHistory = JSON.stringify(searchHistory);
});
document.querySelector(".inp").addEventListener("focus", () => {
  var data = document.querySelector("datalist#searchdata");
  data.innerHTML = "";
  searchHistory.forEach((search) => {
    data.innerHTML = "<option>" + data.innerHTML;
    data.querySelector("option").innerText = search;
  });
});
    
    
    
   