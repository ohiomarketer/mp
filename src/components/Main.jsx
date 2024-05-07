import React, { useEffect, useState } from "react";
import styled from "styled-components";
import first from "../assets/static/main-up.jpg";
import actions from "../assets/static/main-actions.jpg";
import card from "../assets/static/main-card.jpg";
import eye from "../assets/static/eye.jpg";
import contactbar from "../assets/static/contactbar.png";
import error from "../assets/static/error.png";
import copy from "../assets/static/copy.png";

export const Main = () => {
  const [contactState, setContactState] = useState(false);
  const [thirdLoader, setThirdLoader] = useState(false);
  const [popup, setPopup] = useState(false);

  const toggleContact = () => {
    setContactState((prevContactState) => !prevContactState); // Use functional update form
    if (!contactState) {
      setTimeout(() => {
        setThirdLoader(true);
      }, 1500);
    } else {
      setThirdLoader(false);
    }
  };

  const showPopup = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 1000);
  };

  return (
    <MainContainer>
      <MainCard onClick={toggleContact}>
        <FirstSection>
          <img src={first} alt="" />
        </FirstSection>
        <BalanceSection>
          <div className="balance__container">
            <span className="balance">$4.900.712</span>
            <span className="pennys">00</span>
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
      <ContactContainer className={contactState ? "active" : ""}>
        <div className="nav" onClick={toggleContact}>
          <img src={contactbar} alt="" />
        </div>
        <article className={thirdLoader ? "chota active" : "chota"}>
          <div className="image__container">
            <img src={error} alt="" />
          </div>
          <div className="text__container" onClick={showPopup}>
            <p className="text">
              Codigo:{" "}
              <span className="h">
                DPW05-UNM25B5DGV6
                <img src={copy} alt="" />
              </span>
            </p>
          </div>
          <Popup className={popup ? "active" : ""}>
            <p>Codigo copiado</p>
          </Popup>
        </article>
      </ContactContainer>
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
right: -100%;
width: 100%;
height: 100vh;
background: #f6f6f6;
transition: all 0.3s ease-in-out;
&.active {
    right: 0%;
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
