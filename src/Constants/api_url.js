const location = 'Zapopan,mx';
const api_key = '6c1e8757b9d05f8f0068f6b08ddf3d11';
//const api_key_ = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;