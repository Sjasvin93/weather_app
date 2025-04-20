import { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Delhi");

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const date = new Date();
  const month = months[date.getMonth()];
  const formattedDate = `${month} ${date.getDate()}, ${date.getFullYear()}`;

  const fetchWeather = async () => {
    try {
      const API_KEY = "87d6734ed35fd4f34ac98936d1674d70";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      alert(error.message);
      setWeather(null);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen" style={{
      background: "linear-gradient(135deg, #A7D8FF 50%, #B8E0FF 100%)"
    }}>
      <div className="bg-[#61CFFA] rounded-xl w-[350px] p-7 h-[500px]" style={{
        background: "linear-gradient(135deg, #3AA5F5 0%, #3AA5F5 60%, #3978E6 80%, #3360C8 100%)"
      }}>
        <div className="text-center text-2xl mb-2">
          <h1 className="font-semibold opacity-25">{formattedDate}</h1>
        </div>
        <div className="text-center text-3xl mb-4">
          <h1 className="font-semibold text-white capitalize">{city}</h1>
        </div>
        <div className="mb-3 w-full flex flex-col justify-center items-center">
          <img src="/heavy_rain.png" alt="weather icon" className="w-[150px] h-[150px] mb-3" />
          <h1 className="mb-2 font-semibold text-white text-2xl">
            {weather ? `${weather.main.temp}°C` : "-- °C"}
          </h1>
          <p className="font-semibold text-white text-xl">
            {weather ? weather.weather[0].description : "Weather type"}
          </p>
        </div>
        <div className="flex justify-start items-center mt-12">
          <input
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-[220px] py-2 rounded-lg focus:outline-none border-none px-2"
          />
          <button
            onClick={fetchWeather}
            className="ml-2 px-4 py-2 bg-white hover:bg-gray-100 rounded-lg"
          >
            Get
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
