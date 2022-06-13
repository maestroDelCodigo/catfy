const apiKey = "6baccb43-514e-41e0-a52c-c7ada0ac6bac";

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
export default function getCategoriesById({keyword}){
    const url = `https://api.thecatapi.com/v1/images/search?category_ids=1&limit=9`
    return fetch(url,requestOptions)
    .then(res => res.json())
}