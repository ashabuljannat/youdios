import React, { createContext, useState, useEffect } from "react";
import { fetchTrendingDataApi } from "../utils/api";

export const Context = createContext();

export const AppContext = ({children}) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [selectedType, setSelectedType] = useState("now");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchTrendingData(selectedType);
  }, [selectedCategory]);

  const fetchTrendingData = (type) => {
    setLoading(true);
    fetchTrendingDataApi(type).then((res) => {
      // console.log(res);
      setSearchResults(res?.data);
      setLoading(false);
    });
  }; 

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedType,
        setSelectedType,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};
