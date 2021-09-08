import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const InternationalNews = () => {
    const [internationalNews, setInternationalNews] = useState([])
    useEffect(() => {
        fetch('https://fathomless-everglades-75760.herokuapp.com/getNewsDetails')
            .then(res => res.json())
            .then(data => setInternationalNews(data))
    }, [])

    const newInternationalNews = internationalNews.filter(item => item.newsCategory === "International ")

    const history = useHistory()
    const detailsNews = (_id) => {
        history.push(`/details-news/${_id}`)
    }
    return (
        <section className='py-6'>
            <Header />
            <Navbar />
            <h1 className='bg-black text-center text-white py-4 font-3xl'>Top International News</h1>
            <div className="grid grid-cols-3 gap-4 m-7">
                {
                    newInternationalNews.map(item => <div key={item._id}>
                        <img src={`data:image/png;base64, ${item.image.img}`} alt="news-img" />
                        <p>{item.newsCategory}</p>
                        <p className='tracking-normal font-medium'>{item.title}</p>
                        <div className="details-area flex flex-row justify-between py-3">
                            <p>By: {item.newsAuthor} </p>
                            <button className='btn' onClick={() => detailsNews(item._id)} >Details</button>
                            <p>{item.newsUploadDate}</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default InternationalNews;