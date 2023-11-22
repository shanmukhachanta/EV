import axios from 'axios';

const URL = 'https://ev-charge-finder.p.rapidapi.com/search-by-coordinates-point';

export const getPlacesData = async (sw, ne) => {
  try {
    const response = await axios.get(URL, {
      params: {
        lat: sw.lat,
        lng: ne.lng,
        limit: '30'
      },
      headers: {
        // 'X-RapidAPI-Key':  '5ee111784dmsh1bb7e029a6c9cdbp1cd2d3jsn5be63470c694',
        'X-RapidAPI-Host': 'ev-charge-finder.p.rapidapi.com',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
