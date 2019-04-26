import { SET_CURRENT_POST } from './constsns';


export const setPost= (postData:object)=>{
    return {
        type: SET_CURRENT_POST,
        payload: { postData },
    }
}

// export const setWeather = forecastData => ({
//     type: ACTION_TYPES.SET_WETAHER,
//     payload: { forecastData },
// });

// export const setLoading = loading => ({
//     type: ACTION_TYPES.SET_LOADING,
//     payload: { loading },
// });

// export const fetchWeather = () => dispatch => {
//     dispatch(setLoading(true));

//     return fetch(FORECAST_URL)
//       .then(result => result.json())
//       .then(forecastData => {
//         setWeather(forecastData);
//         setLoading(false);
//       });
// }