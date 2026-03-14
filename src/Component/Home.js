import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeBox = styled.div`
display:flex;
justify-content: center;
width:100%;
height:100%;
background-image: url(${process.env.PUBLIC_URL + '/img/back/1.JPG'});
background-size: cover;
gap: 200px;
padding-top: 100px;

`;
const HomeBox01 = styled.div`
width: 400px;
height:400px;
`;

const HomeBoxImg01 = styled.img`
width:100%;
height:100%;
margin-top:-60px; 
object-fit: cover; 
border-radius: 50%;
&:hover {
transform: scale(1.05);
 border: 5px solid white;
}
`;
const HomeText =styled.div`
font-size:30px;
color: white;
`;

export default function Home() {
  return (
    <div >

        <h1>키보드 나라</h1>
     <HomeBox>

      <HomeBox01>
        <Link to="/mechanical">
      <HomeBoxImg01 src={process.env.PUBLIC_URL + '/img/back/main01.png'} alt = '메인' />
        </Link>
      <HomeText>
        <p>기계식 키보드</p>
      </HomeText>
      </HomeBox01>

      <HomeBox01>
         <Link to="/membrane">
      <HomeBoxImg01 src={process.env.PUBLIC_URL + '/img/back/main02.png'} alt = '메인' />
         </Link>
         <HomeText>
        <p>멤브레인 키보드 </p>
      </HomeText>
      </HomeBox01>



     </HomeBox>



    


    
    </div>
  )
}
