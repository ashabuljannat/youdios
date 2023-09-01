import React, { useContext } from "react";
import { Context } from "../context/contextApi";
import VideoCard from "./VideoCard";
import Loader from "../shared/Loader";

const Feed = () => {
  const { searchResults } = useContext(Context);
  // console.log(searchResults)
 
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
          {!searchResults ? (
            <Loader />
          ) : (
            searchResults?.map((item, i) => {
              return (
                // console.log(item)
                <VideoCard key={i} video={item} />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
