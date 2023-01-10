import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY, TYPE } from "../components/api";
import axios from "axios";
import styled from "styled-components";

export default function Weather({ serchedCity }) {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");

  const getCurrentWeather = async (city) => {
    const req = axios.get(
      `${BASE_URL}/${TYPE.current}?key=${API_KEY}&q=${city}&aqi=no`
    );
    const res = await req;

    setWeather({
      temp: res.data.current.temp_c,
      city: res.data.location.name,
      country: res.data.location.country,
      desc: res.data.current.condition.text,
      image: res.data.current.condition.icon,
      feelsLike: res.data.current.feelslike_c,
    });

    setCity(res.data.location.name);
  };

  useEffect(() => {
    getCurrentWeather(serchedCity);
  });
  return (
    <Container>
      <div className='info flex a-center j-center column'>
        <div className='title flex a-center column'>
          <h1>{city}</h1>
          <h3>{weather.country}</h3>
        </div>
        <div className='temp flex row'>
          <h2>{weather.temp}ºC</h2>
          <img src={weather.image} />
        </div>
        <h3>{weather.desc}</h3>
        <h2>feels like {weather.feelsLike}ºC</h2>
      </div>
      <img
        className='background'
        src='https://images.wallpaperscraft.com/image/single/clouds_porous_sky_125791_2560x1440.jpg'
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  .info {
    h1,
    h2,
    h3,
    img,
    .temp {
      opacity: 75%;
      &:hover {
        scale: 1.1;
        opacity: 90%;
      }
    }
  }

  .title {
    h1 {
      font-size: 6rem;
      height: 1.2rem;
    }
    h3 {
      font-size: 2.5rem;
    }
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -20;
    opacity: 1;
  }
`;
