import React from 'react';
import '../assets/css/WeatherStyle.css';
import Footer from './Footer';
import Header from './Header';


/**
 * @author Sai Likhita
 * This component renders weather detaoils for user location
 * uses https://weather-proxy.freecodecamp.rocks/api API to fetch weather of user location
 * Uses external style sheet for styling
 */
const {useState, useEffect} = React;


function Weather() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();
  const [temperature, setTemperature] = useState();
  const date= new Date().toLocaleString() ;

  /**
   * This method fetch data from API and renders the response
  */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
        .then(res => res.json())
        .then(d => {
        setData(d);
        setTemperature({
          fahrenheit: `${Math.round((d.main.temp*9/5+32)*1000)/1000}?`,
          celsius: `${d.main.temp}?`
        });
        setIsLoaded(true);
      });
    });
  }, []);
  
  if (isLoaded) {
    return (

        <div class='pt-5'>
        <Header />
        <div class="py-5 main-div" >
        <div class="card " style={{backgroundColor: 'rgba(0,0,0,0.5)',
                                    border: '0.2em solid white',
                                    borderRadius: '1em'}}>
        <div class="card-header"><h1 >Weather Today</h1></div>
              <h3>{date}</h3>
            <div class="card-body">
                <div id="Weather">
                    <h2 id="city">City: {`${data.name}, ${data.sys.country}`}</h2>
                    <div>
                        <h2 id="description">{data.weather[0].main}</h2>
                        <img src={data.weather[0].icon} id="icon" alt={data.weather[0].description}/>
                        <h2><p style={{margin: '1em'}}>  Temperature : {`${data.main.temp} `}&deg;</p> </h2>
                        <h2><p style={{margin: '1em'}}>Humidity : <span>{data.main.humidity}%</span></p></h2>
                    </div>
                    <div>
                        <h2>Wind</h2>
                        <i style={{margin: '1em'}} class="fas fa-arrow-down" style={{transform: `rotate(${data.wind.deg}deg)`}}></i>
                        <p style={{margin: '1em'}} id="wind_speed">{data.wind.speed} m/s</p>
                    </div>
            </div>

            <div  class="card-footer">
                <div id="coordinates">
                    <h2>Location coordinates</h2>
                    <p style={{margin: '1em'}}><b>Latitude:</b> <span>{data.coord.lat}</span></p>
                    <p style={{margin: '1em'}}><b>Longitude:</b> <span>{data.coord.lon}</span></p>
                </div>
            </div>
</div>
       
  </div>
      </div>
      <Footer />
      </div>
    );
  } else {
    return <i style={{margin: '1em'}} class="fas fa-spinner fa-spin"></i>;
  }
}


export default Weather;