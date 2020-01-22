export const fetchData = location => {
    console.log("1", location);
  
    if (!location) {
      return;
    }
  
    console.log(location);
    return fetch(`/data?location=${location}`)
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
  };
  
