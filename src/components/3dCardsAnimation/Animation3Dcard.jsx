import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function Animation3Dcard () {

  useEffect(()=> {
    const script =document.createElement('script');
    script.src = "/jslib/animation.js";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  });

  return (
    <Cardiv>
    <div className="animation_container">
      <div className="card">
        <div className="sneaker">
          <div className="circle"></div>
          <img src={require('../../asserts/airforce1.png')} alt="airforce1" />
        </div>
        <div className="info">
          <h1 className="title">Air Force one</h1>
          <h3>FUTURE-READY TRAINERS WITH wRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
          <div className="sizes">
            <button>39</button>
            <button>40</button>
            <button className="active">41</button>
            <button>42</button>
          </div>
          <div className="purchase">
            <button>Purchase</button>
          </div>
        </div>
      </div>
    </div>
    </Cardiv>
  );
};

const Cardiv = styled.div`
{
  margin: 0;
  padding:1.5rem;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2000px;
}

.animation_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  transform-style: preserve-3d;
  min-height: 75vh;
  width: 8rem;
  border-radius: 30px;
  padding: 0rem 1rem;
  box-shadow: 0 20px 20px rgba(0,0,0,0.2), 0px 0px 50px rgba(0,0,0,0.2);
}

.sneaker {
  min-height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.sneaker img {
  width:5rem;
  z-index: 2;
  transition: all 0.75s ease-out;
}

.circle {
  width: 5rem;
  height: 5rem;
  background: linear-gradient(
    to right,
    rgba(245,70,66,0.75),
    rgba(8,83,156,0.75)
  );
  position: absolute;
  border-radius: 50%;
  z-index: 1;
}

.info h1 {
  font-size: 1rem;
  transition: all 0.75s ease-out;
}

.info h3 {
  font-size: 0.3rem;
  padding: 0.3rem 0rem;
  color: #585858;
  font-weight: lighter;
  transition: all 0.75s ease-out;
}

.sizes {
  display: flex;
  justify-content: space-between;
  transition: all 0.75s ease-out;
}

.sizes button {
  padding: 0.1rem 0.6rem;
  background: none;
  border:none;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  color: #585858;
}

.sizes .active {
  background: #585858;
  color: white;
}

.purchase {
  margin-top: 1rem;
}

.purchase button {
  width: 100%;
  padding: 0.3rem 0rem;
  background: #f54642;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  font-weight: bolder;
  transition: all 0.75s ease-out;
}
`