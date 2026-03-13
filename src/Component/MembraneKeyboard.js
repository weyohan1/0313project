import React, { useState } from 'react';
import MembraneData from './MembraneData';
import styled from 'styled-components'; 

const Title = styled.div`
  width: 100%;
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
const MembraneImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`; 

export default function MembraneKeyboard() {
 
  const [Data] = useState(MembraneData);

  return (
    <div>
      <Title>
        <h1> 멤브레인 키보드 </h1>
      </Title>

      <ItemBox>
        {Data.map((item) => (
          <ItemCard key={item.id}>
            <MembraneImg src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price.toLocaleString()}원</p>
          </ItemCard>
        ))}
      </ItemBox>
    </div>
  );
}