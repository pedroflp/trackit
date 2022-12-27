import Lottie from 'react-lottie';

import BikeAnimation from '../../assets/bike-delivery.json';

import { SearchIcon } from '../../assets/lupa-icone';
import { TrackerResult } from '../../components/TrackerResult';
import useSearch from '../../hooks/useSearch';
import { Container, ContentContainer, HeaderContainer, HistoryButton, SearchContainer, SmallHistoryButton } from './styles';

function SearchPage() {
  const {
    code,
    searchHistory,
    hasTrackingInfo,
    isLoadingSearch,
    searchError,
    setIsHistoryOpen,
    trackingResult,
    handleSearchTrackingInfo,
    handleChangeCode,
  } = useSearch();

  return (
    <Container isShowingTracking={hasTrackingInfo}>
      <HeaderContainer isShowingTracking={hasTrackingInfo}>
        <div className="title">
          <h1>📦 Rastreie suas encomendas rápido e fácil! 🔍</h1>
        </div>
        <div className="header-animation">
          <Lottie
            width={600}
            height={500}
            style={{ opacity: 0.3 }}
            options={{
              animationData: BikeAnimation,
              autoplay: true,
              loop: true,
            }}
            speed={1.2}
          />
        </div>
      </HeaderContainer>

      <ContentContainer>
        <SearchContainer>
          <div className="input-container">
            <input
              value={code}
              placeholder="Pesquisar pelo código"
              onChange={handleChangeCode}
            />
            <SmallHistoryButton onClick={() => setIsHistoryOpen(true)}>
              Ver histórico
            </SmallHistoryButton>
            <button
              disabled={
                isLoadingSearch ||
                code === trackingResult?.codigo ||
                !code
              }
              onClick={handleSearchTrackingInfo}
              className="search"
            >
              <SearchIcon />
            </button>
          </div>
          {!!searchHistory && <HistoryButton onClick={() => setIsHistoryOpen(true)}>Histórico de rastreios</HistoryButton>}
        </SearchContainer>

        <TrackerResult
          hasTrackingInfo={hasTrackingInfo}
          isLoadingSearch={isLoadingSearch}
          trackingResults={trackingResult}
          searchError={searchError}
          searchHistory={searchHistory}
        />

        <footer>
          <span>Desenvolvido por <a target="_blank" rel="noreferrer" href="https://github.com/pedroflp"><strong>@pedroflp</strong></a></span>
        </footer>
      </ContentContainer>
    </Container>
  );
}

export default SearchPage;
