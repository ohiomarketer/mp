import React from 'react'
import styled from 'styled-components'
import actions from '../assets/static/xd.jpg'

export const Actions = () => {
  return (
    <ActionsContainer>
        <img src={actions} alt="" />
    </ActionsContainer>
  )
}

const ActionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    img {
        width: 100%;
    }
`;