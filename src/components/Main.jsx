import React from "react";
import styled from "styled-components";
import first from "../assets/static/main-up.jpg";
import actions from "../assets/static/main-actions.jpg";
import card from "../assets/static/main-card.jpg";
import eye from "../assets/static/eye.jpg";
export const Main = () => {
  return (
    <MainContainer>
      <MainCard>
        <FirstSection>
          <img src={first} alt="" />
        </FirstSection>
        <BalanceSection>
          <div className="balance__container">
            <span className="balance">$9.856</span>
            <span className="pennys">15</span>
          </div>
          <img src={eye} alt="" className="eye" />
        </BalanceSection>
        <ActionsSection>
          <img src={actions} alt="" />
        </ActionsSection>
        <CardSection>
          <img src={card} alt="" />
        </CardSection>
      </MainCard>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  background: linear-gradient(to bottom, #009fe3, #eeeeee);
  padding: 5px 18px;
`;

const MainCard = styled.div`
  background: #fff;
  height: 100%;
  border-radius: 6px;
  padding: 15px;
  overflow: hidden;

`;

const FirstSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

const BalanceSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .balance__container {
    position: relative;
    .balance {
      font-weight: 700;
      font-size: 25px;
    }
    .pennys {
      font-weight: 700;
      font-size: 12px;
      position: absolute;
      margin-left: 2px;
      top: 4px;
    }
  }

  img {
    width: 33px;
    margin-left: 25px;
  }
`;

const ActionsSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  img {
    width: 100%;
  }
`;

const ContactContainer = styled.div`
position: fixed;
top: 0;
right: 0%;
width: 375px;
height: 100vh;
background: #f6f6f6;
transition: all 0.3s ease-in-out;

&.active {
    right: 50%;
}

.nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
    background: #009fe3;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
}

.chota {

    flex-direction: column;
    align-items: center;
    display: none;

    &.active {
        display: flex; 
        .image__container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 90px;
    
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
        }
    
        .text__container {
            color: #b3b3b3;
            background: #ececec;
            margin-top: 5px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            width: 245px;
            .text {
                font-size: 14px;
                padding: 3px 8px;
                .h {
                    color: #009fe3;
                    position: relative;
                    img {
                        width: 15px;
                        position: absolute;
                        top: 3px;
                    }
                }
            }
        }        
    }
}
`;

const Popup = styled.div`
  position: fixed;
  bottom: -60px; /* Adjust the position as needed */
  width: 95%;
  padding: 14px;
  background: #03913e;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  color: white;

  &.active {
    bottom: 20px;
  }
`;
