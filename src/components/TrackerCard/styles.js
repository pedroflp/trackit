import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 60px;
  margin-left: 50px;
  background-color: ${props => props.delivered ? COLORS.GREEN.LIGHT : COLORS.WHITE};
  border: 2px solid ${props => props.delivered ? COLORS.GREEN.DARK : COLORS.BACKGROUND.DARK};
  border-radius: 16px 16px 5px 16px;
  box-shadow: 0px 5px 10px rgba(0,0,0,0.07);

  &:last-child {
    margin-bottom: 0px;
  }
  
  .card-dot {
    width: 25px;
    height: 25px;
    background-color: ${props => props.delivered ? COLORS.GREEN.DARK : '#97b2c2'};
    border-radius: 50%;
    position: absolute;
    left: 0;
    margin-left: -12px;
    border: 6px solid rgb(245, 251, 255);
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
      transform: translate(-100%, -100%);
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ delivered }) => delivered ? COLORS.WHITE : COLORS.BACKGROUND.DARK_LIGHT};
      border-radius: 50%;
      color: ${COLORS.BACKGROUND.DARKER};
      width: 40px;
      height: 40px;
      font-weight: 700;
      border: 1px solid ${({ delivered }) => delivered ? COLORS.GREEN.DARK : COLORS.BACKGROUND.DARK};
    }

    .location-time {
      margin-left: 5px;
      color: ${COLORS.BACKGROUND.DARKER};
    }
  }

  .card-information {
    display: flex;
    flex-direction: column;

    .status {
      margin-bottom: 5px;
      color: ${props => props.delivered ? COLORS.GREEN.DARK : COLORS.BACKGROUND.DARK};
    }

    .info {
      display: flex;
      gap: 10px;
      
      span {
      font-size: 12px;
      text-transform: capitalize;
    }
  }
}
`