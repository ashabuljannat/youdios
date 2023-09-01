import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFlag } from "react-icons/bs";
import { BiListPlus } from "react-icons/bi";
import {
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineShareAlt,
  AiOutlineDownload,
} from "react-icons/ai";
import {
  fetchChannelDetailsApi,
  fetchRelatedVideoApi,
  fetchVideoDetailsApi,
} from "../utils/api";
import { Context } from "../context/contextApi";
import SuggestionVideoCard from "./SuggestionVideoCard";
import moment from "moment";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [channel, setChannel] = useState();
  const [relatedVideos, setRelatedVideos] = useState();
  const { videoId } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [videoId]);

  const fetchVideoDetails = () => {
    setLoading(true);
    fetchVideoDetailsApi(videoId).then((res) => {
      // console.log(res);
      setVideo(res);
      setLoading(false);
      fetchChannelDetailsApi(res?.channelId).then((res) => {
        // console.log(res);
        setChannel(res);
      });
    });
  };

  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchRelatedVideoApi(videoId).then((res) => {
      // console.log(res);
      setRelatedVideos(res?.data);
      setLoading(false);
    });
  };
  // console.log(channel)
  return (
    <div className="flex flex-col lg:flex-row bg-black px-3 lg:px-5">
      <div className=" lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 ">
        <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            controls
            width="100%"
            height="100%"
            playing={true}
          />
        </div>

        <div className="text-white font-[500] text-sm md:text-lg line-clamp-1 mt-2">
          {video?.title}
        </div>

        <div className="flex justify-between flex-row my-3">
          <div className="flex items-center justify-center max-w-[40%]">
            <div className="h-9 w-9 rounded-full overflow-hidden">
              <Link to={`/channel/${video?.channelId}`}>
                <img
                  className="h-full w-full object-cover"
                  src={channel?.meta.thumbnail[2]?.url}
                />
              </Link>
            </div>

            <div className="flex flex-col ml-3">
              <div className="text-white text-[13px] font-[500]">
              <Link to={`/channel/${video?.channelId}`}>
                  {channel?.meta.title}
                  {/* {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                )} */}
                </Link>
              </div>
              <div className="text-white/[0.7] text-xs">
                {channel?.meta?.subscriberCount} subscribers
              </div>
            </div>

            <div className="flex items-center justify-center h-7 px-4 rounded-3xl text-[13px] bg-white ml-4 cursor-pointer">
              Subscribe
            </div>
          </div>

          <div className="flex items-center justify-around text-white w-[40%]">
            <div className="flex items-center h-7 px-3 rounded-3xl text-[13px] bg-white/[0.15] cursor-pointer hover:bg-white/[.3]">
              <AiOutlineLike className="text-xl" />
              <span className="mx-2 border-r h-3/5"></span>
              <AiOutlineDislike className="text-xl" />
            </div>
            <div className="flex items-center  h-7 px-3 rounded-3xl text-[13px] bg-white/[0.15]  cursor-pointer hover:bg-white/[.3]">
              <AiOutlineShareAlt className="text-xl " />
            </div>
            <div className="flex items-center  h-7 px-3 rounded-3xl text-[13px] bg-white/[0.15]  cursor-pointer hover:bg-white/[.3]">
              <AiOutlineDownload className="text-xl " />
            </div>
            <div className="flex items-center  h-7 px-3 rounded-3xl text-[13px] bg-white/[0.15]  cursor-pointer hover:bg-white/[.3]">
              <BiListPlus className="text-xl " />
            </div>
            <div className="flex items-center  font-bolder h-7 px-3 rounded-3xl text-[13px] bg-white/[0.15]  cursor-pointer hover:bg-white/[.3]">
              <BsFlag className="" />
            </div>
          </div>
        </div>

        <div className="text-white font-[500] text-sm h-24 bg-white/[.1] hover:bg-white/[.2] rounded-lg p-3 truncateText">
          <div className="flex ">
            <span>{parseInt(video?.viewCount, 10).toLocaleString()} views</span>
            <span className="ml-1">
              {moment(video?.publishDate).format("MMM D, YYYY")}
            </span>
          </div>
          {video?.description}
        </div>
      </div>

      <div className="flex flex-col py-6 px-4 lg:w-[350px] xl:w-[400px]">
        {relatedVideos?.map((item, index) => {
          return <SuggestionVideoCard key={index} video={item} />;
        })}
      </div>
    </div>
  );
};

export default VideoDetails;
