import React from 'react';
import '../assets/css/WeatherStyle.css';
import Footer from './Footer';
import Header from './Header';



const {useState, useEffect} = React;


function Weather() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState();
  const [temperature, setTemperature] = useState();

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
        <body style={{color:'white',textAlign:'center',minHeight:'100vh',fontFamily:'Arial', fontSize:'16px', backgroundImage: `url("https://i.ibb.co/wQvbcGk/pexels-photo-2114014.jpg")`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backdropFilter:'blur', display:'flex', flexDirection:'column',alignItems:'center'}}>
        <Header />
      <div id="app">
        <h2 id="city">{`${data.name}, ${data.sys.country}`}</h2>
        <div id="weather">
          <div>
            <h2 id="description">{data.weather[0].main}</h2>
            <img src={data.weather[0].icon} id="icon" alt={data.weather[0].description}/>
           <h2> <p>  Temperature : {`${data.main.temp} `}&deg;</p> </h2>
            <h2><p>Humidity : <span>{data.main.humidity}%</span></p></h2>
          </div>
          <div>
            <h2>Wind</h2>
            <i class="fas fa-arrow-down" style={{transform: `rotate(${data.wind.deg}deg)`}}></i>
            <p id="wind_speed">{data.wind.speed} m/s</p>
          </div>
        </div>
        <div id="coordinates">
          <h2>Location coordinates</h2>
          <p><b>Latitude:</b> <span>{data.coord.lat}</span></p>
          <p><b>Longitude:</b> <span>{data.coord.lon}</span></p>
        </div>
      </div>
      </body>
    );
  } else {
    return <i class="fas fa-spinner fa-spin"></i>;
  }
}


// ReactDOM.render(<App/>, document.getElementById("react-container"));


export default Weather;