import React, { useState, useEffect } from 'react'
import getCategoriesById from '../../services/getCategoriesById.js';
import '../../styles/button.scss';
import '../../styles/images.scss';
function PhotoByCategory({params}) {

    const [photos, setPhotos] = useState([]);
    const {keyword} = params
    useEffect(function () {
        getCategoriesById({ keyword })
            .then(photos => setPhotos(photos))
    }, [keyword])
    return (
        <><div className='imageContainer'>
            {photos.map(singlePhoto =><div className='singleImage'>
                <img alt='catphoto' src={singlePhoto.url}></img>
            </div>)}
        </div></>
    )
}
export default PhotoByCategory