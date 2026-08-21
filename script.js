 const cityInput = document.querySelector(".city-input");
 const searchButton = document.querySelector(".search-btn");
 const apiKy = '0fcf45d4686b49f2ba26214fd741be62'

//  When I click the search button, check if I typed something. If I did, print it, clear the input, and remove the cursor from it.
 searchButton.addEventListener("click" , () =>{
    if(cityInput.value.trim() != ''){
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
        
    }
 });

 cityInput.addEventListener('keydown', (event) => {
    if(event.key == 'Enter' && 
        cityInput.value.trim() != ''
    ){
        updateWeatherInfo(cityInput.value);
        cityInput.value = '';
        cityInput.blur();
    }   
 });
 
function getFetchData(){

}

 function updateWeatherInfo(city){
    const weatherData = getFetchData()
 }