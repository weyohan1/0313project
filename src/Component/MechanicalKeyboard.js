import React, { useState } from 'react'
import MechanicalData from './MechanicalData'
import styled from 'styled-components'; 

const Title = styled.div`
width:100%;
text-align: center;
`;
const ItemBox = styled.div`
 display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  text-align: center;
`;

const ItemCard = styled.div`
  text-align: center;
  img {
    width: 80%;
    height: 500px;
    border:3px solid black;
    object-fit: cover;
`;
const MechanicalImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`; 

export default function MechanicalKeyboard() {

const[Date] =useState(MechanicalData);

  return (
    <div>
      <Title>
      <h1> 기계식 키보드 </h1>
      </Title>

      <ItemBox>
        {Date.map((item) => (
          <ItemCard key={item.id}>
              <MechanicalImg src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price.toLocaleString()}원</p>
              </ItemCard>
        ))}
      </ItemBox>
    </div>
  )
}
