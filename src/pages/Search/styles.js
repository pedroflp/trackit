import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 45vh 55vh;
  width: 100%;
  height: 100%;
  transition: 0.6s ease;
  overflow: hidden;

  ${({ isShowingTracking }) => isShowingTracking && css`
    grid-template-rows: 5vh 95vh;
  `}

  footer {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 16px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.8s ease;
  max-width: 60%;
  margin: 0 auto;

  ${({ isShowingTracking }) => isShowingTracking && css`
    opacity: 0.2;
    filter: blur(5px);
    pointer-events: none;
  `}

  .title {
    z-index: 2;
    margin: auto;
    
    h1 {
      font-weight: 800;
      font-size: 70px;
      line-height: 60px;
      color: #003D73;
    }

  }

  @media(max-width: 1500px) {
    .title {
      position: absolute;
      width: 80%;
      margin: auto;
      
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
      width: 100%;
      
      h1 {
        font-size: 50px;
        line-height: 50px;
        text-align: center;
      }
    }

    .header-animation {
      transform: scale(0.7);
    }
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 5rem;
  position: relative;
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
  transform: translateY(-25px);
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