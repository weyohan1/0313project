import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeBox = styled.div`
display:flex;
justify-content: center;
width:100%;
height:100%;
background-image: url(../public/img/back/1.JPG);
gap: 200px;
padding-top: 100px;

`;
const HomeBox01 = styled.div`
width: 500px;
height:500px;
`;
const HomeBoxImg01 = styled.img`
width:100%;
height:100%;
object-fit: cover; 
`;
const HomeText =styled.div`
fontsize:30px
`;

export default function Home() {
  return (
    <div >

        <h1>키보드 나라</h1>
     <HomeBox>

      <HomeBox01>
        <Link to="/mechanical">
      <HomeBoxImg01 src={process.env.PUBLIC_URL + '/img/back/1.JPG'} alt = '메인' />
        </Link>
      <HomeText>
        <p>기계식 키보드</p>
      </HomeText>
      </HomeBox01>

      <HomeBox01>
         <Link to="/membrane">
      <HomeBoxImg01 src={process.env.PUBLIC_URL + '/img/back/1.JPG'} alt = '메인' />
         </Link>
         <HomeText>
        <p>멤브레인 키보드 </p>
      </HomeText>
      </HomeBox01>



     </HomeBox>



    


    
    </div>
  )
}
