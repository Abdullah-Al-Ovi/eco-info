const data = [
    { cityName: "New York City", latitude: 40.7128, longitude: -74.0060 },
    { cityName: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
    { cityName: "London", latitude: 51.5074, longitude: -0.1278 },
    { cityName: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
    { cityName: "Sydney", latitude: -33.8688, longitude: 151.2093 },
    { cityName: "Paris", latitude: 48.8566, longitude: 2.3522 },
    { cityName: "Dhaka", latitude: 23.8103, longitude: 90.4125 }
  ];

  function getLocations(){
    return data;
  }
  function name(location) {
    if(!location) return null;
    const found = data.find((item)=>item.cityName.toLocaleLowerCase()===location.toLocaleLowerCase())
    if(!found){
        return {};
    }
    return found;
  }
  