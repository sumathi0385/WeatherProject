
const cityDropdown = document.getElementById('cityDropdown');
let selectedCity =  cityDropdown.value
const cityName = document.getElementById('cityName');
cityName.innerText = selectedCity


function getAPIData(city){
  const result = fetch('https://goweather.herokuapp.com/weather/' + city)

  .then((response) => response.json())
  .then((data) => {    
    return data;
  });
  
  const bindTodayData = async () => {
    const a = await result;                   
    document.getElementById("currenttemp").innerText = a.temperature;
    document.getElementById("currentwind").innerText = a.wind;
    document.getElementById("currentdescription").innerText = a.description; 
    let forecastresult = a.forecast;
                    
    //Bind forecast data
    let forecasttemp = document.getElementsByClassName('temp')
    for(let i=0; i<forecasttemp.length; i++){
                        
    forecasttemp[i].innerText = `${forecastresult[i].temperature}`;
                
    }

    let forecastwind = document.getElementsByClassName('wind');
    for(let i=0; i<forecastwind.length; i++){
                        
    forecastwind[i].innerText = `${forecastresult[i].wind}`;
                
    }          

    };

  bindTodayData();  

}

getAPIData(selectedCity)

const time = new Date(Date.now()).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });

document.getElementById('currenttime').innerText = time;

cityDropdown.addEventListener('change', function(){

  selectedCity =  cityDropdown.value;
  cityName.innerText = selectedCity
  getAPIData(selectedCity)   

})


