import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const TrackerContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
    
  @media(max-width: 1400px) {
    width: 80%;
  }

  @media(max-width: 1000px) {
    width: 90%;
  }

  .last-update {
    color: ${COLORS.BACKGROUND.DARK};
    margin: 5px 0;
    
    strong {
      color: ${COLORS.BACKGROUND.DARKER};
      margin-left: 5px;
    }
  }
  
  .tracker-time-line {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    position: relative;
    margin-top: 30px;

    .line {
      width: 2px;
      background: #dfe8ed;
      margin: 20px;
      margin-right: 0px;
      margin-left: 0px;
    }
  }


  .not-found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 30px;
    border: 2px dashed #d3e2eb;
    border-radius: 10px;

    span {
      color: #2E3A59;
      font-weight: 500;
      margin-top: 10px;
      text-align: center;
    }
  }

  .error {
    background: linear-gradient(35deg, rgba(255, 0, 0, 0.1), transparent);
    border-color: rgba(255, 0, 0, 0.2);

    span {
      color: rgba(255, 0, 0, 0.5);
    }
  }
`

export const TrackerInfo = styled.div`
  overflow-y: scroll;
  max-height: 83vh;
  padding-left: 8px;
  padding-right: 32px;
`

export const TrackerList = styled.div`
  display: 'flex';
  flex-direction: 'column';
  justify-content: flex-start;
  align-items: flex-start;
`

export const TrackerInfoGeneral = styled.div`
  display: flex;
  min-width: 250px;
  width: 250px;
  margin-left: 5rem;
  flex-direction: column;
  border: 2px dashed ${COLORS.BACKGROUND.DARK_LIGHT};
  padding: 2rem 1rem;
  border-radius: 30px;
  text-align: center;

  h1 {
    font-size: 40px;
  }

  @media(max-width: 1200px) {
    margin-left: 2rem;
  }

  @media(max-width: 1100px) {
    min-width: 200px;
  }

  @media(max-width: 720px) {
    display: none;
  }
  
`