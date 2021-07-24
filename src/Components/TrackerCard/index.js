import { Container } from './styles';

const TrackerCard = ({id, status, data, hora, informations, local}) => {
  return (
    <Container
      delivered={status === "Objeto entregue ao destinatário"}
    >
      <div className="card-dot" />
      
      <div className="card-top">
        <span className="card-id">
          { status === "Objeto entregue ao destinatário" ? 
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.52495 11.657L0.574951 6.707L1.98895 5.293L5.52645 8.8265L5.52495 8.828L14.01 0.343002L15.424
              1.757L6.93895 10.243L5.52595 11.656L5.52495 11.657Z" fill="#63c786"/>
            </svg> 
            : id
          }
        </span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M12 21C10.7369 19.9226 9.56619 18.7415 8.5 17.469C6.9 15.558 5 12.712 5 9.99999C4.99858 7.16754 6.70425
          4.61338 9.32107 3.52939C11.9379 2.44539 14.9501 3.04523 16.952 5.04899C18.2685 6.3596 19.0059 8.14238 19 9.99999C19
          12.712 17.1 15.558 15.5 17.469C14.4338 18.7415 13.2631 19.9226 12 21ZM12 6.99999C10.9282 6.99999 9.93782 7.57179
          9.40193 8.49999C8.86603 9.42819 8.86603 10.5718 9.40193 11.5C9.93782 12.4282 10.9282 13 12 13C13.6569 13 15 11.6568
          15 9.99999C15 8.34313 13.6569 6.99999 12 6.99999Z" fill="#97b2c2"
        />
        </svg>
        {local && <span>{local}</span>}
      </div>
      <div className="card-information">
        {status && <span className="status"><strong>{status} </strong>{(data && hora) && `em ${data} - ${hora}`}</span>}
        <div className="info">
          {informations && informations.map((information, i) => !information.includes("<span") && <span>{information}.</span>)}
        </div>
      </div>
    </Container>
  )
}

export default TrackerCard;