import styled from 'styled-components'

export const Container = styled.div`
  footer {
    padding: 1rem;
    display: flex;
    font-family: 'Commissioner';
    justify-content: center;
    background-color: rgb(245, 251, 255);

    span {
      a {
        text-decoration: none;
        color: #6469C3;
      }
    }
  }
`

export const HeaderContainer = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  height: 65vh;

  .title {
    max-width: 60%;
    margin-right: 20px;
    font-family: 'Commissioner';

    h1 {
      width: 80%;
      font-weight: 800;
      font-size: 50px;
      line-height: 50px;
      color: #003D73;
    }

    h3 {
      font-weight: 400;
      font-size: 16px;
      margin-top: 40px;
      color: #6469C3;
    }
  }

  @media(max-width: 700px) {
    .title {
      position: absolute;
      z-index: 2;
      margin: 0;
      text-shadow: 0 0 10px rgba(255,255,255,1);
      text-align: center;

      h1 {
        font-size: 44px;
        line-height: 44px;
        width: 100%;
      }

      h3 {
        font-weight: 500;
        margin-top: 70px;
        font-size: 15px;
      }
    }

    .header-animation {
      opacity: 0.3;
      filter: blur(0.8px);
    }
  }
`

export const SearchContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: 'column';
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(245, 251, 255);
  padding: 5rem;
  position: relative;
  min-height: 35vh;
  font-family: 'Commissioner';

  @media(max-width: 700px) {
    padding: 1rem;
  }

  .input-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;

    @media(max-width: 1000px) {
      width: 90%;
    }

    input {
      background-color: white;
      border: 1px solid rgba(0,0,0, 0.045);
      padding: 15px;
      width: 100%;
      border-radius: 8px;
      font-size: 18px;
      outline: none;
      font-weight: 500;
      color: #2E3A59;
      font-family: 'Commissioner';
      box-shadow: 0 0 20px rgba(0,0,0,0.08);
      position: relative;
      z-index: 10;

      &::placeholder {
        color: #9babc5
      }
    }

    .last-code-button {
      position: absolute;
      right: 0;
      margin-right: 70px;
      cursor: pointer;
      z-index: 11;
    }

    button {
      position: absolute;
      right: 0;
      background: #6469C3;
      padding: 15px 20px;
      border: none;
      border-radius: 0px 8px 8px 0px;
      cursor: pointer;
      z-index: 11;

      &:disabled {
        cursor: not-allowed;
        filter: saturate(0);
      }
    }
  }
`

export const TrackerContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  @media(max-width: 700px) {
    width: 90%;
    padding: 3rem 0;
  }

    .last-update {
      color: #d3e2eb;
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

        @media(max-width: 700px) {
          display: none;
        }
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

export const TrackerList = styled.div`
  display: 'flex';
  flex-direction: 'column';
  justify-content: flex-start;
  align-items: flex-start;
`