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
  
`;

export const EmptyState = styled.div`
  opacity: 0.35;
  padding: 2rem;
  margin: auto;
  max-width: 35rem;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px dashed ${COLORS.PRIMARY};
  border-radius: 16px;

  strong {
    color: ${COLORS.PRIMARY};
    font-size: 17px;
  }
`;

export const PackageNameContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: auto;
  width: 70%;
`

export const PackageNameInput = styled.input`
  background: transparent;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  color: ${COLORS.BACKGROUND.DARKER};
  border: none;
  text-transform: initial;
  text-align: center;
  outline: none;

  &::placeholder {
    color: ${COLORS.BACKGROUND.DARK}
  }
`

export const EditPackageNameButton = styled.div`
  position: absolute;
  cursor: pointer;
  right: -20px;
  bottom: -2px;
`