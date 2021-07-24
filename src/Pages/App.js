import { useState } from 'react';
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
  
  const [loading, setLoading] = useState(false)

  const handleSearchCode = async () => {
    setLoading(true)
    setSearchResults(null)
    
    const response = await api.get(`https://api.linketrack.com/track/json?user=teste&token=1abcd00b2731640e886fb41a8a9671ad1434c599dbaa0a0de9a5aa619f29a83f&codigo=${searchCode}`)
    .catch(err => {
      if (err) {
        const timeOut = setTimeout(() => {
          return <span>Ocorreu algum erro... Tente novamente!</span>
        }, 4000);
        clearTimeout(timeOut)
      }
    })

    if (response) setSearchResults(response.data)
    setLoading(false)
  }

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
            placeholder="Pesquisar por código de rastreio" 
            onChange={e => setSearchCode(e.target.value)} 
            onKeyDown={e => e.key === "Enter" && handleSearchCode()}
          />
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
          { searchResults ?
            <div>
              <h1>
                Resultados para: {searchResults?.codigo}
                <br/>
                <span>{searchResults?.ultimo ? 'Última atualização: ' + format(new Date(searchResults?.ultimo), 'dd/mm/yyyy - hh:mm', {locale: ptBR}) : 'Sem informações no momento...'}</span>
              </h1>
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
            :
            <div>
              <span></span>
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
