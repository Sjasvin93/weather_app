import { useState } from "react";

function App() {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("Delhi");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "November",
    "December"
  ];

  const date = new Date();  

  const month = months[date.getMonth()];

  const formattedDate = `${month} ${date.getDate()} ${date.getFullYear()}`;
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
          <h1 className="font-semibold text-white">{city}</h1>
        </div>
        <div className="mb-3 w-full flex flex-col justify-center items-center">
          <img src="/heavy_rain.png" alt="weather png" className="w-[150px] h-[150px] mb-3"/>
          <h1 className="mb-2 font-semibold text-white text-2xl">temperature</h1>
          <p className="font-semibold text-white text-xl">weather type</p>
        </div>
        <div className="flex justify-start items-center mt-12">
          <div className="">
            <input placeholder="Enter your city" className="w-[220px] py-2 rounded-lg focus:outline-none border-none" />
          </div>
          <div className="ml-1">
            <button type="submit" className="px-4 py-2 bg-white cursor-pointer hover:bg-gray-100 rounded-lg">Get</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
