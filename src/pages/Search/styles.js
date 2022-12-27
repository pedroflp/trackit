import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 45vh 55vh;
  width: 100vw;
  height: 100vh;
  transition: 0.6s ease;

  ${({ isShowingTracking }) => isShowingTracking && css`
    grid-template-rows: 5vh 95vh;
  `}


  footer {
    display: flex;
    font-family: 'Commissioner';
    justify-content: center;
    margin: 1rem auto;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${COLORS.BACKGROUND.MAIN};

    span {
      a {
        text-decoration: none;
        color: ${COLORS.PRIMARY};
      }
    }
  }
`

export const HeaderContainer = styled.div`
  width: 60%;
  margin: -50px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.8s ease;

  ${({ isShowingTracking }) => isShowingTracking && css`
    opacity: 0.2;
    filter: blur(5px);
  `}

  .title {
    font-family: 'Commissioner';
    z-index: 2;

    h1 {
      width: 100%;
      font-weight: 800;
      font-size: 70px;
      line-height: 60px;
      color: #003D73;
    }
  }

  .header-animation {
    margin-bottom: -100px;
  }

  @media(max-width: 1500px) {
    .title {
      position: absolute;
      width: 60%;
      
      h1 {
        font-size: 80px;
        line-height: 70px;
        text-align: center;
      }
    }
  }

  @media(max-width: 700px) {
    .title {
      position: absolute;
      width: 70%;
      
      h1 {
        font-size: 60px;
        line-height: 50px;
        text-align: center;
      }
    }
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  flex-direction: 'column';
  padding: 3rem 5rem 2rem;
  position: relative;
  font-family: 'Commissioner';
  background-color: ${COLORS.BACKGROUND.MAIN};

  @media(max-width: 1000px) {
    padding: 4rem 2rem;
  }
`

export const SearchContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: -25px;
  max-width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media(max-width: 900px) {
    max-width: 80%;
  }

  .input-container {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 400ms ease;
    min-width: 260px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.08);
    overflow: hidden;
    border-radius: 8px;
    background-color: ${COLORS.WHITE};

    input {
      border: none;
      padding: 15px;
      width: 100%;
      font-size: 18px;
      outline: none;
      font-weight: 500;
      color: #2E3A59;
      font-family: 'Commissioner';
      
      &::placeholder {
        color: #9babc5
      }
    }

    button.search {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${COLORS.PRIMARY};
      padding: 15px 20px;
      border: 3px solid ${COLORS.PRIMARY};
      cursor: pointer;
      transition: 0.4s ease;
      margin-left: auto;

      &:disabled {
        cursor: not-allowed;
        filter: saturate(0);
      }

    }
  }
`;

export const HistoryButton = styled.button`
  flex: 1;
  padding: 16px;
  background: ${COLORS.WHITE};
  color: ${COLORS.PRIMARY};
  border: 2px solid ${COLORS.PRIMARY};
  border-radius: 8px;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  box-shadow: 0 0 20px rgba(0,0,0,0.08);

  @media(max-width: 720px) {
    display: none;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
  }
`

export const SmallHistoryButton = styled.button`
  border: none;
  min-width: max-content;
  background-color: transparent;
  border: 1px solid ${COLORS.PRIMARY};
  color: ${COLORS.PRIMARY};
  font-size: 12px;
  padding: 3px 8px;
  margin-right: 8px;
  border-radius: 30px;
  margin-left: auto;
  display: none;

  @media(max-width: 720px) {
    display: flex;
  }
`