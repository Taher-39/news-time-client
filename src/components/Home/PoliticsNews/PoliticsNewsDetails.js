import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const PoliticsNewsDetails = () => {
    const { _id } = useParams()
    const [newsDetail, setNewsDetail] = useState({})
    const { title, newsUploadDate, newsAuthor, newsCategory, newsDetails, image } = newsDetail;

    useEffect(() => {
        fetch('http://localhost:4000/politicsDetail/' + _id)
            .then(res => res.json())
            .then(data => {
                setNewsDetail(data)
            })
    }, [_id])
    console.log(newsDetail)
    return (
        <section className='container mx-auto'>
            <Navbar />
            {
                newsDetail.length === undefined ? <div className="details m-8">
                    <img src={`data:image/png;base64, ${image}`} alt="news-img" />
                    {/*can't see img,, image.img don't found */}
                    <div className="details-area flex flex-row justify-between py-3">
                        <p>By: {newsAuthor} </p>
                        <p>{newsUploadDate}</p>
                        <p>{newsCategory}</p>
                    </div>
                    <h1 className='tracking-normal font-medium my-6'>{title}</h1>
                    <p className='my-6'>{newsDetails}</p>
                </div> 
                : <div>
                    <h1>Loading</h1>
                </div>
            }
        </section>
    );
};

export default PoliticsNewsDetails;