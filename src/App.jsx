"use client";

import { useEffect, useState } from "react";
import "./styles.css";

/* Challenge

Hava durumu verileri şu anda JSX'e sabit olarak kodlanmıştır. Göreviniz, uygulamanın dinamik olabilmesi için JavaScript aracılığıyla eklemektir. 
      
    1. Günün şu anda Pazartesi, Salı veya Çarşamba olarak ayarlanmış olmasına bağlı olarak, uygulama aşağıdakiler için doğru öğeleri otomatik olarak görüntülemek üzere durumu kullanmalıdır:
        - arka plan resmi
        - emoji simgesi (☀️, 🌧️ veya ❄️)
        - hava durumu
        - düşük & yüksek sıcaklıklar
        - haftanın günü
    
    2. Test butonuna tıkladığınızda, uygulama bir sonraki gün için yukarıda listelenen doğru öğelerin tümünü weatherData array'inde göstermelidir: Pazartesi -> Salı -> Çarşamba -> Pazartesi, vb. 
    
    3. WeatherData array taşınabilir, ancak başka bir şekilde değiştirilmemelidir. 
       
    4. Kod düzenli ve kolay anlaşılır olmalıdır. 
*/

export default function App() {
  const weatherData = [
    {
      id: 0,
      day: "Pazartesi",
      condition: "Güneşli",
      lowTemp: 20,
      highTemp: 38,
    },
    {
      id: 1,
      day: "Salı",
      condition: "Yağmurlu",
      lowTemp: 8,
      highTemp: 15,
    },
    {
      id: 2,
      day: "Çarşamba",
      condition: "Karlı",
      lowTemp: -5,
      highTemp: 3,
    },
  ];

  const [dayInfo, setDayInfo] = useState("Pazartesi");

  const handleDayChange = () => {
    setDayInfo(
      dayInfo === "Pazartesi"
        ? "Salı"
        : dayInfo === "Salı"
        ? "Çarşamba"
        : "Pazartesi"
    );
  };

  const getWeatherData = () => {
    if (dayInfo === "Pazartesi") {
      return weatherData.find((data) => data.day === "Pazartesi");
    } else if (dayInfo === "Salı") {
      return weatherData.find((data) => data.day === "Salı");
    } else {
      return weatherData.find((data) => data.day === "Çarşamba");
    }
  };

  const { day, condition, lowTemp, highTemp } = getWeatherData() || {};

  let emoji = "☀️";
  const getEmoji = () => {
    if (dayInfo === "Pazartesi") {
      return (emoji = "☀️");
    } else if (dayInfo === "Salı") {
      return (emoji = "🌧️");
    } else {
      return (emoji = "❄️");
    }
  };

  emoji = getEmoji();

  return (
    <div
      className="app-container"
      style={{
        backgroundImage: `url('/images/${condition}-background.jpg')`,
      }}
    >
      <div className="weather-container">
        <div className="icon">{emoji}</div>
        <div className="condition-text">{condition}</div>
        <div className="temp-range-container">
          <div className="low-temp-container">
            <p className="low-temp-data">{lowTemp}°</p>
            <p>En Düşük</p>
          </div>
          <div className="high-temp-container">
            <p className="high-temp-data">{highTemp}°</p>
            <p>En Yüksek</p>
          </div>
        </div>
        <div className="day">{day}</div>
      </div>
      <button onClick={handleDayChange}>Test</button>
    </div>
  );
}
