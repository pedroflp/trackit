import { format } from 'date-fns'
import React from 'react'
import { CloseButton, Container, HistoryCard, Overlay } from './styles'

export const HistoryModal = ({
  history,
  setIsHistoryOpen,
  handleSearchTrackingInfo
}) => {
  return (
    <>
      <Container>
        <h1>Histórico de rastreios</h1>
        <div className='history-list'>
          {history.map(({ code, date, lastEvent }) => (
            <HistoryCard key={code}>
              <div>
                <span>Código: <strong>{code}</strong></span>
                <span>Última busca em: <strong>{format(new Date(date), 'dd/MM/yyyy, HH:mm')}</strong></span>
              </div>
              <button onClick={() => {
                setIsHistoryOpen(false);
                handleSearchTrackingInfo({ code });
              }}>Rastrear novamente</button>
            </HistoryCard>
          ))}
        </div>
        <CloseButton onClick={() => setIsHistoryOpen(false)}>Fechar</CloseButton>
      </Container>
      <Overlay onClick={() => setIsHistoryOpen(false)} />
    </>
  )
}
