import { useEffect, useState } from 'react';
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR';
import api from '../services/api';
import Lottie from 'react-lottie';
import TrackerCard from '../Components/TrackerCard';
import { Puff } from '@agney/react-loading';

import SkateAnimation from '../assets/skate-delivery.json'

import { Container, HeaderContainer, SearchContainer, TrackerContainer, TrackerList } from './styles.js'

function App() {
  const [searchCode, setSearchCode] = useState(null)
  const [searchResults, setSearchResults] = useState(null)
  const [lastCode, setLastCode] = useState(null)

  const [loading, setLoading] = useState(false)
  const [responseError, setResponseError] = useState(false)

  const handleSearchCode = async () => {
    setLoading(true)
    setSearchResults(null)
    setResponseError(false)

    const response = await api.get(`https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${searchCode}`)
    .catch(err => err && setResponseError(true))

    if (response) {
      setSearchResults(response.data)
      localStorage.setItem('last-tracking-code', response.data.codigo)
    }
    setLoading(false)
  }

  useEffect(() => {
    setLastCode(localStorage.getItem('last-tracking-code'))
  }, [])

  return (
    <Container>
     <HeaderContainer>
      <div className="title">
        <h1>Rastreie suas encomendas rápido e fácil!</h1>
        <h3>Acompanhar o envio das suas encomendas nunca foi tão fácil como agora! Tenha o rastreio na hora e atualizado com as informações mais recente que temos.</h3>
      </div>
      <div  className="header-animation">
        <Lottie
          width={370}
          height={370}
          options={{
            animationData: SkateAnimation,
            autoplay: true,
            loop: true,   
          }}
        />
      </div>
     </HeaderContainer>
     <SearchContainer>
        <div className="input-container">
          <input
            value={searchCode}
            placeholder={"Pesquisar pelo código"}
            onChange={e => setSearchCode(e.target.value)} 
            onKeyDown={e => e.key === "Enter" && handleSearchCode()}
          />
          {lastCode && 
            <div
              className="last-code-button"
              onClick={() => {
                setSearchCode(lastCode)
              }}
            >
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H2V2.55709C3.19001 1.622 4.6906 1.0643 6.32144 1.0643C10.1874 1.0643 13.3214 4.19831 13.3214
               8.0643C13.3214 11.9303 10.1874 15.0643 6.32144 15.0643C4.17096 15.0643 2.24696 14.0946 0.962891 12.5685L2.58221
                11.3837C3.49811 12.4147 4.83392 13.0643 6.32144 13.0643C9.08287 13.0643 11.3214 10.8257 11.3214 8.0643C11.3214
                 5.30288 9.08287 3.0643 6.32144 3.0643C5.2346 3.0643 4.22875 3.41107 3.4085 4L6 4V6H0V0Z" fill="#2E3A59"/>
              </svg>
            </div>
          }
          <button disabled={loading || searchCode === searchResults?.codigo} onClick={() => handleSearchCode()}>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M15.677 16.607L9.96198 10.891C7.41965 12.6985 3.91642 12.2564 1.90285 9.87395C-0.110711 
                7.49153 0.0371394 3.96361 2.24298 1.75802C4.44824 -0.448534 7.97651 -0.597024 10.3594 1.41644C12.7422 
                3.42989 13.1846 6.93347 11.377 9.47602L17.092 15.192L15.678 16.606L15.677 16.607ZM6.48498 2.00001C4.58868
                1.99958 2.95267 3.3307 2.56745 5.18745C2.18224 7.04421 3.15369 8.91629 4.89366 9.67026C6.63362 10.4242 
                8.66388 9.85285 9.75522 8.30207C10.8466 6.75129 10.699 4.64734 9.40198 3.26402L10.007 3.86402L9.32498 
                3.18402L9.31298 3.17202C8.56477 2.4192 7.54637 1.99715 6.48498 2.00001Z" fill="#fff"
              />
            </svg>
          </button>
        </div>
        <TrackerContainer>
          { loading &&
            <div style={{margin: 'auto', color: '#6469C3'}}>
              <Puff width="100" />
            </div>
          }
          { searchResults?.quantidade > 0 ?
            <div>
              <span className="last-update">Resultados para {searchResults?.codigo} | {searchResults?.ultimo && 'Última atualização: ' + format(new Date(searchResults?.ultimo), 'dd/mm/yyyy - hh:mm', {locale: ptBR})}</span>
              <div className="tracker-time-line">
                <div className="line" />
                <TrackerList>
                  { searchResults?.eventos.map((event, i) => (
                    <TrackerCard 
                      key={i} 
                      id={searchResults?.eventos.length - i}
                      status={event.status}
                      data={event.data}
                      informations={event.subStatus}
                      local={event.local} 
                      hora={event.hora}  
                    />
                  ))}
                </TrackerList>
              </div>
            </div>
            : (searchResults || responseError) &&
            <div style={{margin: 'auto'}}>
              { responseError ?
                <div className="not-found error">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.266 20.998H2.73301C2.37575 20.998 2.04563 20.8074 1.867 20.498C1.68837 20.1886 1.68838 19.8074 1.86701 19.498L11.133 3.49799C11.3118 3.1891 11.6416 2.9989 11.9985 2.9989C12.3554 2.9989 12.6852 3.1891 12.864 3.49799L22.13 19.498C22.3085 19.8072 22.3086 20.1882 22.1303 20.4975C21.9519 20.8069 21.6221 20.9976 21.265 20.998H21.266ZM12 5.99799L4.46901 18.998H19.533L12 5.99799ZM12.995 14.999H10.995V9.99799H12.995V14.999Z" fill="rgba(255, 0, 0, 0.5)"/>
                  <path d="M11 16H13V18H11V16Z" fill="rgba(255, 0, 0, 1)"/>
                  </svg>

                  <span>Parece que ocorreu algum erro... Tente novamente!</span>
                </div>
                :
                <div className="not-found">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.266 17.998H1.73301C1.37575 17.998 1.04563 17.8074 0.867 17.498C0.688374 17.1886 0.688376 16.8074 0.867007 16.498L10.133 0.497992C10.3118 0.189104 10.6416 -0.00109863 10.9985 -0.00109863C11.3554 -0.00109863 11.6852 0.189104 11.864 0.497992L21.13 16.498C21.3085 16.8072 21.3086 17.1882 21.1303 17.4975C20.9519 17.8069 20.6221 17.9976 20.265 17.998H20.266ZM11 2.99799L3.46901 15.998H18.533L11 2.99799ZM11.995 11.999H9.99501V6.99799H11.995V11.999Z" fill="#2E3A59"/>
                  <path d="M10 13H12V15H10V13Z" fill="#2E3A59"/>
                  </svg>
                  <span>Não consegui achar nada ainda com seu código...</span>
                </div>
              }
            </div>
          }
        </TrackerContainer>
     </SearchContainer>
     <footer>
       <span>Desenvolvido por <a target="_blank" rel="noreferrer" href="https://pedroflp.me"><strong>@pedroflp</strong></a></span>
     </footer>
    </Container>
  );
}

export default App;
