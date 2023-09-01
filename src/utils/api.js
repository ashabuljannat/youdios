import axios from "axios";

const headers = {
  "X-RapidAPI-Key": "533e23b83fmsh1e3c5de15813affp16c443jsnf882700b3dff",
  "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
};

export const fetchTrendingDataApi = async (type) => {
  const options = {
    method: "GET",
    url: "https://youtube-v3-alternative.p.rapidapi.com/trending",
    params: {
      geo: "BD",
      type,
    },
    headers,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSearchDataApi = async (query, sort_by) => {
  const options = {
    method: "GET",
    url: `https://youtube-v3-alternative.p.rapidapi.com/search`,
    params: {
      query,
      sort_by,
    },
    headers,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchVideoDetailsApi = async (id) => {
  const options = {
    method: "GET",
    url: `https://youtube-v3-alternative.p.rapidapi.com/video`,
    params: {
      id,
    },
    headers,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchRelatedVideoApi = async (id) => {
  const options = {
    method: "GET",
    url: `https://youtube-v3-alternative.p.rapidapi.com/related`,
    params: {
      id,
    },
    headers,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchChannelDetailsApi = async (id) => {
  const options = {
    method: "GET",
    url: "https://youtube-v3-alternative.p.rapidapi.com/channel",
    params: {
      id,
    },
    headers,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
