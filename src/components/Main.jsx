import React from 'react'
import styled from 'styled-components'
import first from '../assets/static/main-up.jpg';
import actions from '../assets/static/main-actions.jpg';
import card from '../assets/static/main-card.jpg';
import eye from '../assets/static/eye.jpg';

export const Main = () => {
  return (
    <MainContainer>
        <MainCard>
            <FirstSection>
                <img src={first} alt="" />
            </FirstSection>
            <BalanceSection>
                <div className="balance__container">
                    <span className='balance'>$9.856</span>
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
  )
}

const MainContainer = styled.main`
    background: linear-gradient(to bottom, #009fe3, #eeeeee);
    padding: 5px 18px
`

const MainCard = styled.div`
    background: #fff;
    height: 100%;
    border-radius: 6px;
    padding: 15px;
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