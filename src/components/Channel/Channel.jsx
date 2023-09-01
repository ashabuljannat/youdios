import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../context/contextApi";
import { fetchChannelDetailsApi } from "../../utils/api";
import VideoCard from "../VideoCard";

const Channel = () => {
  const [channel, setChannel] = useState();
  const { channelId } = useParams();
  const { setLoading } = useContext(Context);

  useEffect(() => {
    fetchChannelDetails();
  }, [channelId]);

  const fetchChannelDetails = () => {
    setLoading(true);
    fetchChannelDetailsApi(channelId).then((res) => {
      // console.log(res);
      //   setVideo(res);
      setChannel(res);
      setLoading(false);
    });
  };

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setScrollLeftStart(containerRef.current.scrollLeft);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    containerRef.current.scrollLeft = scrollLeftStart - deltaX;
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // console.log(channel);

  return (
    <>
      <img className="" src={channel?.meta.image?.banner[3]?.url} />
      <div className="w-[85%] mx-auto">
        <div className="flex my-4">
          <img
            className="rounded-full mr-3 hidden md:block"
            src={channel?.meta.thumbnail[1]?.url}
          />
          <div className="w-[75%]">
            <p className="text-white text-[20px]">{channel?.meta.title} </p>
            <p className="text-white/[.4] text-[13px]">
              #{channel?.meta.keywords[0].replace(/ /g, "").toLowerCase()}{" "}
              {channel?.meta?.subscriberCount} subscribers
            </p>
            <p className="truncateText2"> {channel?.meta?.description}</p>
          </div>
          <div className="flex items-center justify-center h-7 px-5 rounded-3xl text-[13px] bg-white/[.1] cursor-pointer relative -right-6  hover:bg-white/[.5] text-white">
            Subscribe
          </div>
        </div>

        <div
          className="tab flex h-10 justify-between mx-6 font-[500] text-[13px] overflow-x-hidden cursor-grab md:cursor-pointer"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <p className="bg-white/[.2] h-fit w-fit px-[15px] py-[6px] hover:bg-white/[.9] cursor-pointer mr-5">
            HOME
          </p>
          <p className="bg-white/[.2] h-fit w-fit px-[15px] py-[6px] hover:bg-white/[.9] cursor-pointer mr-5">
            VIDEO
          </p>
          <p className="bg-white/[.2] h-fit w-fit px-[15px] py-[6px] hover:bg-white/[.9] cursor-pointer mr-5">
            SHORTS
          </p>
          <p className="bg-white/[.2] h-fit w-fit px-[15px] py-[6px] hover:bg-white/[.9] cursor-pointer mr-5">
            PLAYLIST
          </p>
          <p className="bg-white/[.2] h-fit w-fit px-[15px] py-[6px] hover:bg-white/[.9] cursor-pointer mr-5">
            COMMUNITY
          </p>
          <p className="bg-white/[.2] h-fit w-fit px-[15px] py-[6px] hover:bg-white/[.9] cursor-pointer mr-5">
            ABOUT
          </p>
        </div>

        <div className="-mt-[6px] h-[1px] bg-white/[.2]" />

        <div className="flex flex-row">
          <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
              {channel?.data.map((item, i) => {
                return <VideoCard key={i} video={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channel;
