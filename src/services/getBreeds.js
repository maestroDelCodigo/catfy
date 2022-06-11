const apiKey = "6baccb43-514e-41e0-a52c-c7ada0ac6bac";
const url =`https://api.thecatapi.com/v1/breeds?api_key=${apiKey}`
export default function getBreeds(){
    return fetch(url)
    .then(res => res.json())
}