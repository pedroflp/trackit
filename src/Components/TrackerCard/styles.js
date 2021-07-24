import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  margin: 60px 0px;
  margin-left: 50px;
  background-color: ${props => props.delivered ? '#cfffdf' : '#d3e2eb'};
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.07);
  
  .card-dot {
    width: 20px;
    height: 20px;
    background-color: ${props => props.delivered ? '#63c786' : '#97b2c2'};
    border-radius: 50%;
    position: absolute;
    left: 0;
    margin-left: -9px;
    border: 4px solid rgb(245, 251, 255);
  }

  
  .card-top {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    position: relative;

    .card-id {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(-120%, -100%);
      background: white;
      border-radius: 50%;
      padding: 10px;
      width: 30px;
      color: #9babc5;
      height: 30px;
      font-weight: 700;
      box-shadow: 0 0 10px rgba(0,0,0,0.12);
    }

    span {
      margin-left: 5px;
      font-weight: 700;
      color: #506e80;
    }
  }

  .card-information {
    display: flex;
    flex-direction: column;

    .status {
      margin-bottom: 5px;
      color: ${props => props.delivered ? '#49a369' : '#97b2c2'};
    }

    .info {
      display: flex;
      gap: 10px;

      span {
        font-size: 12px;
        color: #587382;
        text-transform: capitalize;
      }
    }
  }
`