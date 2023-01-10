import React, { useState } from "react";
import Weather from "../components/Weather";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export default function Home() {
  const [city, setCity] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  return (
    <Container>
      <div className='search'>
        <input
          type='text'
          placeholder='City'
          value={city}
          onChange={(e) => {
            setIsSearched(false);
            setCity(e.target.value);
          }}
        />
        <FaSearch onClick={() => setIsSearched(true)} />
      </div>
      <Weather serchedCity={isSearched ? city : "Karlstad"} />
    </Container>
  );
}

const Container = styled.div`
  .search {
    position: absolute;
    top: 2%;
    right: 3%;
    width: 20rem;
    height: 1.7rem;
    input {
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      opacity: 60%;
      border: none;
      &:focus {
        outline: none;
        opacity: 80%;
      }
    }
    svg {
      position: absolute;
      right: 0;
      top: 10%;
      font-size: 1.2rem;
      cursor: pointer;
      &:hover {
        scale: 1.1;
      }
    }
  }
`;
