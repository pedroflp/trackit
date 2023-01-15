/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { HistoryModal } from "../components/HistoryModal";
import { packageEventStatusEnum } from "../components/TrackerCard";
import { STORAGE_KEYS } from "../constants/keys";
import { getTrackingInfo } from "../services/request/GetTrackingInfo";

export const SearchContext = createContext({});

const SearchContextProvider = ({ children }) => {
  const storagedHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.LAST_TRACKING_RESULTS)) || [];

  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [searchError, setSearchError] = useState(false);

  const [code, setCode] = useState('');
  const [trackingResult, setTrackingResult] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const [packageName, setPackageName] = useState('');
  const [isEditingPackageName, setIsEditingPackageName] = useState(false);

  const hasTrackingInfo = trackingResult?.quantidade > 0;
  const handleChangeCode = (e) => setCode(e.target.value);

  const handleSearchTrackingInfo = async ({ code: searchCode }) => {
    setSearchError(false);
    setTrackingResult([]);
    setPackageName('');
    setIsLoadingSearch(true);

    try {
      const response = await getTrackingInfo(searchCode || code);

      if (response.data) {
        setTrackingResult(response.data);
        saveSearchHistory(response.data.codigo, response.data.eventos[0]);

        storagedHistory.find(item => {
          if (item.code === response.data.codigo) {
            setPackageName(item.label)
          }
        });
      }

    } catch (error) {
      setSearchError(true)
    } finally {
      setIsLoadingSearch(false);
    }
  };

  const saveSearchHistory = (code, lastEvent) => {
    let updatedList = [];
    const lastTenCodes = storagedHistory.slice(-10);
    const itemIndex = lastTenCodes.findIndex(history => history.code === code);
    const alreadyInList = itemIndex !== -1;

    if (alreadyInList) {
      updatedList = lastTenCodes;
      const isLastEventDeliveredConfirmation = lastEvent.status === packageEventStatusEnum.delivered;

      if (isLastEventDeliveredConfirmation) {
        updatedList = updatedList.filter(item => item.code !== code);
      } else
        updatedList[itemIndex] = {
          ...updatedList[itemIndex],
          date: new Date().toISOString()
        };
    } else {
      const currentItemSearched = {
        code: code,
        date: new Date().toISOString(),
        label: ''
      };

      updatedList = lastTenCodes;
      updatedList.length >= 10
        ? updatedList[0] = currentItemSearched
        : updatedList.push(currentItemSearched)
    }

    const newHistory = updatedList.sort((a, b) => b.date - a.date);
    saveHistoryStateAndStorage(newHistory);
  }

  const handleSavePackageName = (code) => {
    const history = [...searchHistory].map(item => item.code === code
      ? ({ ...item, label: packageName })
      : item
    );

    saveHistoryStateAndStorage(history);
    setIsEditingPackageName(false);
  };

  const saveHistoryStateAndStorage = (history) => {
    setSearchHistory(history);
    localStorage.setItem(STORAGE_KEYS.LAST_TRACKING_RESULTS, JSON.stringify(history));
  };

  useEffect(() => {
    if (storagedHistory?.length !== searchHistory?.length) setSearchHistory(storagedHistory);
  }, [storagedHistory, searchHistory])

  return (
    <SearchContext.Provider value={{
      code,
      searchHistory,
      trackingResult,
      hasTrackingInfo,
      isLoadingSearch,
      searchError,

      packageName,
      setPackageName,
      handleSavePackageName,

      handleSearchTrackingInfo,
      handleChangeCode,
      isEditingPackageName,
      setIsEditingPackageName,

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