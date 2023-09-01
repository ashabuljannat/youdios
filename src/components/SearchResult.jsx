import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchDataApi } from "../utils/api";
import { Context } from "../context/contextApi";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
  const [result, setResult] = useState();
  const { searchQuery } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    fetchSearchResults(searchQuery);
  }, [searchQuery]);

  const fetchSearchResults = (query) => {
    setLoading(true);
    fetchSearchDataApi(query).then((res) => {
      // console.log(res);
      setResult(res?.data);
      setLoading(false);
    });
  };

  return (
    <div className="w-screen">
      <div className="grow w-[65%] mx-auto overflow-y-auto">
        <div className="grid grid-cols-1 gap-2 pt-5">
          {result?.map((item, i) => {
            return <SearchResultVideoCard key={i} video={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
