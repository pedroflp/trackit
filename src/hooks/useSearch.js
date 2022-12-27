import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const useSearch = () => useContext(SearchContext);

export default useSearch;
