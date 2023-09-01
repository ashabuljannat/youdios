import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  // console.log(video)
  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-[140px] rounded-xl overflow-hidden">
          {video?.thumbnail[3] ? (
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnail[3]?.url}
            />
          ) : (
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnail[1]?.url}
            />
          )}

          <span className="absolute bottom-2 right-2 bg-slate-800 px-1 text-white text-xs rounded-[4px]">
            {video?.lengthText}
          </span>
          {/* {video?.lengthText && <VideoLength time={video?.lengthSeconds} />} */}
        </div>

        <div className="flex text-white mt-3">
          {video?.channelThumbnail && (
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={video?.channelThumbnail[0]?.url}
                />
              </div>
            </div> 
          )}

          <div className="flex flex-col ml-3 overflow-hidden">
            <span className="text-[12px] font-[500] line-clamp-2">
              {video?.title}
            </span>

            {video?.channelTitle && (
              <span className="text-[12px] font-[400] mt-2 text-white/[0.7] flex items-center">
                {video?.channelTitle}
              </span>
            )}

            <div className="flex text-[12px] font-[400] text-white/[0.7] truncate overflow-hidden">
              <span>{`${abbreviateNumber(video?.viewCount, 2)} views`}</span>
              <span className="text-[20px] text-white/[0.7] relative top-[-10px] mx-1">
                .
              </span>
              <span className="truncate">{video?.publishedText}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
