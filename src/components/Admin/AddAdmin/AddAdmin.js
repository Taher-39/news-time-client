import React, { useState } from 'react';
import Header from '../../Home/Header/Header';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AddAdmin = () => {
    const [userInfo, setUserInfo] = useState({})
    const handleBlur = (e) => {
        const newUserInfo = {...userInfo}
        newUserInfo[e.target.name] = e.target.value;
        setUserInfo(newUserInfo)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        userInfo.issueDate = new Date();
        fetch('https://fathomless-everglades-75760.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('New Admin added Successfully')
                }
            })
        
    }
    
    return (
        <section>
            <Header />
            <AdminNavbar />
            <div className='text-center'>
                <form onSubmit={handleSubmit}>
                    <div className="my-3">
                        <label htmlFor="email">Admin Email</label> <br />
                        <input onBlur={handleBlur} type="email" name="email" id="email" required placeholder=' abc@gmail.com' />
                    </div>
                    <div className="my-3">
                        <label htmlFor="email">Admin Password</label> <br />
                        <input onBlur={handleBlur} type="password" name="password" id="password" required placeholder=' password' />
                    </div>
                    <button type="submit" className='btn my-2'>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;