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
  console.log(searchResults);
  const [loading, setLoading] = useState(false)

  const handleSearchCode = async () => {
    setLoading(true)
    setSearchResults(null)

    const response = await api.get(`https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${searchCode}`)
    .catch(err => console.log(err))

    if (response) {
      setSearchResults(response.data)
      localStorage.setItem('last-tracking-code', response.data.codigo)
    }
    setLoading(false)
  }

  useEffect(() => {
    setLastCode(localStorage.getItem('last-tracking-code'))
  }, [localStorage.getItem('last-tracking-code')])

  return (
    <Container>
     <HeaderContainer>
      <div className="title">
        <h1>Rastreie suas encomendas rápido e fácil!</h1>
        <h3>Acompanhar o envio da suas encomendas nunca foi tão fácil como agora! Tenha o rastreio na hora e atualizado com as informações mais recente que temos.</h3>
      </div>
      <Lottie
        width={400}
        height={400}
        options={{
          animationData: SkateAnimation,
          autoplay: true,
          loop: true,   
        }}
      />
     </HeaderContainer>
     <SearchContainer>
        <div className="input-container">
          <input
            value={searchCode}
            placeholder="Pesquisar por código de rastreio" 
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
            : searchResults &&
            <div className="not-found">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C19.9939 15.5203 15.5203 19.9939 10 20ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C17.995 5.58378 14.4162 2.00496 10 2ZM8 16C7.986 16 7.86 15.995 7 15.995H6V15.971C6 15.96 6 15.946 6 15.929C6 15.896 6 15.851 6.007 15.796C6.018 15.647 6.035 15.505 6.059 15.364C6.1339 14.9088 6.27541 14.467 6.479 14.053C6.75697 13.4813 7.18135 12.9935 7.709 12.639L7.723 12.63L7.739 12.618L7.754 12.61H7.76H7.767H7.772H7.779L7.79 12.603C8.45481 12.197 9.22113 11.9879 10 12C10.8096 11.9785 11.6071 12.1996 12.29 12.635C12.8172 12.99 13.2414 13.4777 13.52 14.049C13.7244 14.4626 13.8656 14.9045 13.939 15.36C13.971 15.548 13.985 15.699 13.991 15.792C13.991 15.836 13.997 15.88 13.998 15.925C13.998 15.942 13.998 15.956 13.998 15.967V15.987C13.998 15.987 13.958 15.987 12.998 15.987C12.092 15.987 11.998 15.987 11.998 15.987C11.998 15.987 11.998 15.958 11.998 15.928C11.998 15.873 11.985 15.788 11.967 15.682C11.9251 15.4229 11.8456 15.1712 11.731 14.935C11.6072 14.6753 11.4171 14.4529 11.18 14.29C10.8236 14.0797 10.4133 13.9788 10 14C9.58573 13.9818 9.17529 14.0862 8.82 14.3C8.5832 14.4632 8.39324 14.6856 8.269 14.945C8.15465 15.1813 8.07515 15.4329 8.033 15.692C8.0188 15.7734 8.00879 15.8555 8.003 15.938C8.003 15.966 8.003 15.986 8.003 15.996H8V16ZM6.5 10C5.67157 10 5 9.32843 5 8.5C5 7.67157 5.67157 7 6.5 7C7.32843 7 8 7.67157 8 8.5C8 9.32843 7.32843 10 6.5 10ZM13.493 9.986C12.6684 9.986 12 9.31756 12 8.493C12 7.66844 12.6684 7 13.493 7C14.3176 7 14.986 7.66844 14.986 8.493C14.9849 9.3171 14.3171 9.9849 13.493 9.986Z" fill="#2E3A59"/>
              </svg>
              <span>Não consegui achar nada com seu código</span>
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
