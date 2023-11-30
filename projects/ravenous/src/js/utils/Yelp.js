const clientID = "f6JGpahXReh7_9nuY-rAmA";
const key = "Rfd86pCKNwtFw0PPro0W7ZQq5urGphSNE8A5CMD7Ai6UBldqqt1M0YdtVj6vshlUpkORdA8H4IBn_OUCmrwBlD0ZWCSB7YWxK7wg0PePYlGDNfn9ScKsDelj6NRmZXYx";
//  https://cors-anywhere.herokuapp.com/corsdemo

const Yelp = {
  search( location = "", search = "", sortBy = "best_match" ) {
    
    const api = "https://api.yelp.com/v3";
    const corsApi = "https://cors-anywhere.herokuapp.com";
    const endpoint = encodeURI(`https://cors-anywhere.herokuapp.com/${api}/businesses/search?location=${location}&term=${search}&sort_by=${sortBy}&limit=50`);
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${key}`
      }
    };
    
    return fetch( endpoint, options )
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((response) => {
        console.log(response.businesses);
        return response.businesses;
      })
      .catch(err => console.error(err));

  }  
};

export default Yelp;