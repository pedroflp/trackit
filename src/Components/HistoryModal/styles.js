import styled from "styled-components";
import { COLORS } from "../../constants/colors";

export const Container = styled.div`
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  padding: 1.5rem 2rem;
  transform: translate(-50%, -50%);
  background: ${COLORS.WHITE};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Commissioner';

  .history-list {
    overflow-y: scroll;
    max-height: 60vh;
  }
`

export const Overlay = styled.div`
  position: absolute;
  z-index: 98;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const HistoryCard = styled.div`
  border: 2px solid ${COLORS.PRIMARY};
  border-radius: 16px;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  gap: 32px;

  div {
    display: flex;
    flex-direction: column;

    span {
      color: #3a3a3a;

      strong {
        color: ${COLORS.PRIMARY}
      }
    }
  }

  button {
    font-family: 'Commissioner';
    border: none;
    border-radius: 50px;
    padding: 8px 16px;
    background-color: ${COLORS.PRIMARY};
    color: ${COLORS.WHITE};
    cursor: pointer;
  }
`

export const CloseButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  margin: 30px auto 0px;
  font-size: 14px;
  cursor: pointer;
`