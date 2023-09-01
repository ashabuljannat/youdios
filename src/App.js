import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Channel from "./components/Channel/Channel";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:videoId" element={<VideoDetails />} />
            <Route path="/channel/:channelId" element={<Channel />} />
            <Route
              path="/search/:searchQuery"
              element={<SearchResult />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
