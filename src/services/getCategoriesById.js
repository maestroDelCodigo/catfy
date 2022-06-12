const apiKey = "6baccb43-514e-41e0-a52c-c7ada0ac6bac";

export default function getCategoriesById({keyword}){
    const url =`https://api.thecatapi.com/v1/images/search?category_ids=${keyword}?api_key=${apiKey}`
    return fetch(url)
    .then(res => res.json())
}