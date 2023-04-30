import axios from "axios";
 
const GetLastOffersFromDmarket=(gameId)=> {axios.get('https://api.dmarket.com/exchange/v1/market/items?side=market&orderBy=updated&orderDir=desc&title=&priceFrom=0&priceTo=0&treeFilters=&'+gameId+'&types=dmarket&cursor=&limit=100&currency=USD&platform=browser&isLoggedIn=true')
.then(data => console.log(data.data))
.catch(error => console.log(error));
};

export default GetLastOffersFromDmarket;