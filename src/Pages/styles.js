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
      max-width: 80%;
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

    input {
      background-color: white;
      border: 1px solid rgba(0,0,0, 0.045);
      padding: 15px;
      width: 100%;
      border-radius: 8px;
      font-size: 18px;
      outline: none;
      font-weight: 500;
      font-family: 'Commissioner';
      box-shadow: 0 0 20px rgba(0,0,0,0.08);

      &::placeholder {
        color: #9babc5
      }
    }

    button {
      position: absolute;
      right: 0;
      background: #6469C3;
      padding: 15px 20px;
      border: none;
      border-radius: 0px 8px 8px 0px;
      cursor: pointer;

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
  `

export const TrackerList = styled.div`
  display: 'flex';
  flex-direction: 'column';
  justify-content: flex-start;
  align-items: flex-start;

`