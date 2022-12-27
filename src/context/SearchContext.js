import { createContext, useEffect, useState } from "react";
import { STORAGE_KEYS } from "../constants/keys";
import { getTrackingInfo } from "../services/request/GetTrackingInfo";
import { HistoryModal } from "./HistoryModal";

export const SearchContext = createContext({});

const SearchContextProvider = ({ children }) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [searchError, setSearchError] = useState();

  const [code, setCode] = useState('');
  const [trackingResult, setTrackingResult] = useState();
  const [searchHistory, setSearchHistory] = useState();

  const handleSearchTrackingInfo = async (searchCode) => {
    setSearchError();
    setTrackingResult();
    setIsLoadingSearch(true);

    try {
      const response = await getTrackingInfo(searchCode || code);
      // const response = getTrackingMoc();

      setTrackingResult(response.data)
      saveSearchHistory(response.data.codigo)
    } catch (error) {
      setSearchError(true);
    } finally {
      setIsLoadingSearch(false)
    }
  };

  const saveSearchHistory = (code) => {
    const history =
      JSON.parse(localStorage.getItem(STORAGE_KEYS.LAST_TRACKING_RESULTS)) ||
      [];

    const lastTenCodes = history.slice(-10);

    const itemIndex = lastTenCodes.findIndex(history => history.code === code);
    const alreadyInList = false
    // itemIndex !== -1;

    let updatedList = [];
    const currentItemSearched = {
      code: code,
      date: new Date().toISOString()
    };

    if (alreadyInList) {
      updatedList = lastTenCodes;
      updatedList[itemIndex] = currentItemSearched;
    } else {
      updatedList = lastTenCodes;
      updatedList.length >= 10
        ? updatedList[0] = currentItemSearched
        : updatedList.push(currentItemSearched)
    }

    const newHistory = updatedList.sort((a, b) => b.date - a.date);
    localStorage.setItem(STORAGE_KEYS.LAST_TRACKING_RESULTS, JSON.stringify(newHistory));
  }

  const handleChangeCode = (e) => setCode(e.target.value);

  const handleClearSearch = () => {
    setSearchError();
    setTrackingResult();
    setCode();
  }

  useEffect(() => {
    const storagedHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.LAST_TRACKING_RESULTS))
    setSearchHistory(storagedHistory);
  }, [])

  const hasTrackingInfo = trackingResult?.quantidade > 0;

  return (
    <SearchContext.Provider value={{
      code,
      searchHistory,
      trackingResult,
      hasTrackingInfo,
      isLoadingSearch,
      searchError,

      handleSearchTrackingInfo,
      handleChangeCode,
      handleClearSearch,

      isHistoryOpen,
      setIsHistoryOpen,
    }}>
      {children}
      {isHistoryOpen && <HistoryModal
        history={searchHistory}
        setIsHistoryOpen={setIsHistoryOpen}
        handleSearchTrackingInfo={handleSearchTrackingInfo}
      />}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider;