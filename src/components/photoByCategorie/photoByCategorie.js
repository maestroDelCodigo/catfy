import React, { useState, useEffect } from 'react'
import getCategoriesById from '../../services/getCategoriesById.js';
import '../../styles/button.scss';
function PhotoByCategory({params}) {

    const [photos, setPhotos] = useState([]);
    const {keyword} = params
    useEffect(function () {
        getCategoriesById({ keyword })
            .then(photos => setPhotos(photos))
    }, [])
    return (
        <><div>
            {photos.map(singlePhoto =><div>
                <img alt='catphoto' src={singlePhoto.url}></img>
            </div>)}
        </div></>
    )
}
export default PhotoByCategory