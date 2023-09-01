import { Link } from "react-router-dom";
import { abbreviateNumber } from "js-abbreviation-number";

const SearchResultVideoCard = ({ video }) => {
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl ">
        <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnail[1]?.url}
          />
          <span className="absolute bottom-2 right-2 bg-slate-800 px-1 text-white text-xs rounded-[4px]">
            {video?.lengthText}
          </span>
        </div>

        <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
          <span className=" md:text-lg font-medium line-clamp-2 text-white">
            {video?.title}
          </span>
          <div className="flex text-xs text-white/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(video?.viewCount, 2)} views`}</span>
            <span className="flex text-[20px] leading-none font-bold text-white/[0.7] relative top-[-7px] mx-1">
              .
            </span>
            <span className="truncate">{video?.publishedText}</span>
          </div>

          <div className="flex mt-1">
            <div className="h-7 w-7  mr-3 ">
              {video?.channelThumbnail && (
                <img
                  className="h-full w-full object-cover rounded-full"
                  src={video?.channelThumbnail[0]?.url}
                />
              )}
            </div>

            <span className="text-sm font-semibold text-white/[0.7]">
              {video?.channelTitle}
            </span>
          </div>

          <span className="text-xs line-clamp-1 md:line-clamp-2 text-white/[0.7] md:my-4 w-[300px]">
            {video?.description}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideoCard;
