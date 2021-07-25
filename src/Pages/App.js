import { useEffect, useState } from 'react';
import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR';
import api from '../services/api';
import Lottie from 'react-lottie';
import TrackerCard from '../Components/TrackerCard';
import { Puff } from '@agney/react-loading';

import BikeAnimation from '../assets/bike-delivery.json'

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
            animationData: BikeAnimation,
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
          <button disabled={loading || searchCode === searchResults?.codigo || searchCode.length === 0} onClick={() => handleSearchCode()}>
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C19.995 7.58378 16.4162 4.00496 12 4ZM10 18C9.986 18 9.86 17.995 9 17.995H8V17.971C8 17.96 8 17.946 8 17.929C8 17.896 8 17.851 8.007 17.796C8.018 17.647 8.035 17.505 8.059 17.364C8.1339 16.9088 8.27541 16.467 8.479 16.053C8.75697 15.4813 9.18135 14.9935 9.709 14.639L9.723 14.63L9.739 14.618L9.754 14.61H9.76H9.767H9.772H9.779L9.79 14.603C10.4548 14.197 11.2211 13.9879 12 14C12.8096 13.9785 13.6071 14.1996 14.29 14.635C14.8172 14.99 15.2414 15.4777 15.52 16.049C15.7244 16.4626 15.8656 16.9045 15.939 17.36C15.971 17.548 15.985 17.699 15.991 17.792C15.991 17.836 15.997 17.88 15.998 17.925C15.998 17.942 15.998 17.956 15.998 17.967V17.987C15.998 17.987 15.958 17.987 14.998 17.987C14.092 17.987 13.998 17.987 13.998 17.987C13.998 17.987 13.998 17.958 13.998 17.928C13.998 17.873 13.985 17.788 13.967 17.682C13.9251 17.4229 13.8456 17.1712 13.731 16.935C13.6072 16.6753 13.4171 16.4529 13.18 16.29C12.8236 16.0797 12.4133 15.9788 12 16C11.5857 15.9818 11.1753 16.0862 10.82 16.3C10.5832 16.4632 10.3932 16.6856 10.269 16.945C10.1546 17.1813 10.0752 17.4329 10.033 17.692C10.0188 17.7734 10.0088 17.8555 10.003 17.938C10.003 17.966 10.003 17.986 10.003 17.996H10V18ZM8.5 12C7.67157 12 7 11.3284 7 10.5C7 9.67157 7.67157 9 8.5 9C9.32843 9 10 9.67157 10 10.5C10 11.3284 9.32843 12 8.5 12ZM15.493 11.986C14.6684 11.986 14 11.3176 14 10.493C14 9.66844 14.6684 9 15.493 9C16.3176 9 16.986 9.66844 16.986 10.493C16.9849 11.3171 16.3171 11.9849 15.493 11.986Z" fill="#2E3A59"/>
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
