import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import headerLeft from "../assets/static/header-left.jpg";
import headerRight from "../assets/static/header-right.jpg";
import arrow from "../assets/static/arrow.jpg";
import navhelp from "../assets/static/navhelp.png";
import helptitle from "../assets/static/helptitle.jpeg";
import helplist from "../assets/static/helplist.jpg";
import morehelp from "../assets/static/morehelp.jpg";
import helpicon from "../assets/static/helpicon.jpg";
import lastxd from "../assets/static/lastxd.jpg";
import contactbar from "../assets/static/contactbar.png"
import error from "../assets/static/error.png"
import copy from "../assets/static/copy.png"

export const NavBar = () => {
  const [loaderState, setLaoderState] = useState(false);
  const [secondLoader, setSecondLoader] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(140);
  const [displayText, setDisplayText] = useState(true);
  const [contactState, setContactState] = useState(false);
  const [thirdLoader, setThirdLoader] = useState(false);
  const [popup, setPopup] = useState(false);

  const toggleLoaderState = () => {
    setLaoderState(!loaderState);
    setTimeout(() => {
      setSecondLoader(true);
    }, 1500)
  };

  const showPopup = () => {
    setPopup(true);
    setTimeout(() => {
        setPopup(false)
    }, 1000);
  }
  const toggleContact = () => {
    setContactState(prevContactState => !prevContactState); // Use functional update form
    if (!contactState) {
      setTimeout(() => {
        setThirdLoader(true);
      }, 1500);
    } else {
      setThirdLoader(false);
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setButtonWidth(40);
        setDisplayText(false)
      } else {
        setButtonWidth(140);
        setDisplayText(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer>
      <LeftContainer>
        <div className="icon__container">
          <img src={headerLeft} alt="" />
        </div>
        <p className="name">Hola, Katia </p>
        <div className="arrow__container">
          <img src={arrow} alt="" />
        </div>
      </LeftContainer>
      <RightContainer>
        <img src={headerRight} alt="" onClick={toggleLoaderState}/>
      </RightContainer>

      <LoaderContainer className={loaderState ? "active" : ""}>
        <NavHelpContainer>
          <img src={navhelp} alt="" onClick={toggleLoaderState} />
        </NavHelpContainer>
        <div className="separation" style={{ height: '42px'}}></div>
        <ContentContainer className={secondLoader ? "active" : ""}>
          <div className="title__container">
            <img src={helptitle} alt="" />
          </div>
          <div className="advice__container">
            <p className="title">Retuvimos tu dinero preventivamente</p>
            <span className="text">
              Fuimos notificados de posibles comportamientos que estan
              prohibidos por nuestros Terminos y condiciones y tuvimos que
              retener tu dinero mientras realizamos un analisis de seguridad.
            </span>
            <span className="text">
              Considera que el analisis podria durar hasta 45 dias. Una vez
              finalizado te contactaremos para darte mas información sobre el
              estado de tu cuenta y dinero.
            </span>
            <span className="text">
              Si tenes dudas sobre este proceso, contactanos y te ayudaremos. En
              caso de otras dudas consulta el Portal de dudas.
            </span>
          </div>
          <ListContainer>
            <img src={helplist} alt="" />
          </ListContainer>
          <MoreHelpOne>
            <img src={morehelp} alt="" />
          </MoreHelpOne>
          <MoreHelpTwo onClick={toggleContact}>
            <img src={lastxd} alt="" />
          </MoreHelpTwo>
          <FloatingButton style={{ width: `${buttonWidth}px` }} onClick={toggleContact}>
            <img src={helpicon} alt="" />
            <p className={!displayText ? 'active' : ''}>Contactanos</p>
          </FloatingButton>
        </ContentContainer>

        <ContactContainer className={contactState ? 'active' : ''}>
            <div className="nav" onClick={toggleContact}>
                <img src={contactbar} alt="" />
            </div>
            <article className={thirdLoader ? 'chota active' : 'chota'}>
            <div className="image__container">
                <img src={error} alt="" />
            </div>
            <div className="text__container" onClick={showPopup}>
                <p className="text">
                    Codigo: <span className="h">
                        JKN07-UMN93D7FHB8
                        <img src={copy} alt="" />
                    </span>
                </p>
            </div>
            <Popup className={popup ? 'active' : ''}>
                <p>Codigo copiado</p>
            </Popup>
            </article>
        </ContactContainer>
      </LoaderContainer>

      <OverlayContainer className={loaderState ? "active" : ""} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #009fe3;
  color: #edfeff;
  padding: 0px 10px;
  overflow: hidden;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  .icon__container {
    height: 100%;
    width: 26%;
    margin-right: 4px;
    margin-left: 5px;
    img {
      margin-top: 5px;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }

  p {
    font-weight: 400;
  }

  .arrow__container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4px;
    img {
      width: 20px;
    }
  }
`;

const RightContainer = styled.div`
  height: 100%;
  width: 35%;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  background: #ededed;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &.active {
    right: 0;
    height: 185vh;
  }
`;

const NavHelpContainer = styled.div`
  position: fixed;
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
`;

const ContentContainer = styled.div`
  display: none;
  &.active {
    display: block;
    background: #ededed;
    .title__container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 5px;
      margin-bottom: 10px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .advice__container {
      background-color: #e44112;
      padding: 20px 25px;
      margin: 0px 17px 20px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;

      .title {
        
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 10px;
      }

      .text {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const MoreHelpOne = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const MoreHelpTwo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 5px;
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const FloatingButton = styled.div`
    position: fixed;
    background: #009fe3;
    bottom: 15px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 13px;
    border-radius: 20px;
    transition: all 0.15s ease-in-out;
    gap: 5px;
    overflow: hidden;

    img {
        height: 20px;
    }

    p {
        &.active {
            display: none;
        }
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
        right: 0;
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
    position: absolute;
    bottom: -8%;
    width: 95%;
    padding: 14px;
    background: #03913e;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;

    &.active {
        bottom: 20px;
    }
`;

const OverlayContainer = styled.div`
  position: absolute;
  width: 0%;
  height: 100%;
  top: 0;
  left: 0;
  transition: width 1ms ease, background 0.4s ease;

  &.active {
    width: 100%;
    background: #00000070;
  }
`;
