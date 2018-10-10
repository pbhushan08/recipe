// Controller
import axios from 'axios';


async function getResults(query){
  const key='80696e0356191e3c540579c6f674b91a';
  const proxy='https://cors-anywhere.herokuapp.com/';
  const res= await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
  console.log(res);
}
getResults('pizza');






//80696e0356191e3c540579c6f674b91a
//https://www.food2fork.com/api/search
