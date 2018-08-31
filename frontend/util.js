export const fetchWeather = () => {
  return $.ajax({
    method: 'get',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f816d7f39052e3a98b21952097a43076'
  });
};
