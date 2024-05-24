import React, { useState, useEffect, useCallback } from "react";
import './styles/WeatherApp.css';

// SCW組件定義
const SCW = () => {
  // API 金鑰，通常應放在環境變數中
  let api_key = "7687a140640e6ced2ed0c8326eb7bb02";

  const [weather, setWeather] = useState();//天氣數據
  const [loading, setLoading] = useState(false);//加載狀態
  const [wicon, setWicon] = useState('');//天氣圖標的URL

  // useCallback確保search函數在組件重新渲染時不會被重建
  const search = useCallback(async () => {
    setLoading(true); // 開始加載數據
    const element = document.getElementsByClassName("cityInput"); // 獲取城市輸入框元素
    if (element[0].value === "") { // 檢查輸入是否為空
        
        setLoading(true);
        //   setLoading(false);
    //   return;
    }

    // 構建API URL並發送請求
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data); // 更新天氣數據狀態
    setLoading(false); // 結束加載狀態

    // 根據API返回的天氣狀況設置相應的圖標
    if (data.weather && data.weather.length > 0) {
      const iconCode = data.weather[0].icon;
      const iconUrl = `${process.env.PUBLIC_URL}/Assets/${{
        "01d": "clear", "01n": "clear",
        "02d": "cloud", "02n": "cloud",
        "03d": "drizzle", "03n": "drizzle",
        "04d": "drizzle", "04n": "drizzle",
        "09d": "rain", "09n": "rain",
        "10d": "rain", "10n": "rain",
        "13d": "snow", "13n": "snow"
      }[iconCode] || 'clear'}.png`;
      setWicon(iconUrl); // 更新圖標URL狀態
    }
  }, []);

  // 使用useEffect在組件掛載時自動執行一次搜索
  useEffect(() => {
    search();
  }, [search]);

  // 加載狀態處理
  if (loading) {
    return <div>Loading...</div>;
  }

  // 組件主要返回的JSX
  return (
    <>
      <div className="container">
        <div className="top-bar">
          <input
            type="text" 
            className="cityInput"
            placeholder="Search the city"
          />

          <div className="search-icon" onClick={search}>
            {/* 按鈕 */}
            <img src={`${process.env.PUBLIC_URL}/Assets/search.png`} alt="" />
          </div>

        </div>


        <div className="weather-img">
          <img src={wicon} alt="" />
        </div>

        {weather ? (
          <>
            <div className="weather-temp">{Math.floor(weather.main.temp)}°C</div>
            <div className="weather-location">{weather.name}</div>
            <div className="data-container">
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/Assets/humidity.png`} alt="" className="icon" />
                <div className="data">
                  <div className="humidity-percent">{weather.main.humidity}%</div>
                  <div className="text">Humidity</div>
                </div>
              </div>
              <div className="element">
                <img src={`${process.env.PUBLIC_URL}/Assets/wind.png`} alt="" className="icon" />
                <div className="data">
                  <div className="wind-rate">{Math.floor(weather.wind.speed)}km/h</div>
                  <div className="text">Wind Speed</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>No weather data available.</div>
        )}
      </div>
    </>
  );
};

export default SCW;
