import React, { useState } from 'react';

const AddAdmin = () => {
    const [userInfo, setUserInfo] = useState({})
    const handleBlur = (e) => {
        const newUserInfo = {...userInfo}
        newUserInfo[e.target.name] = e.target.value;
        setUserInfo(newUserInfo)
    }
    console.log(userInfo)
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
        <div className='text-center'>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleBlur} type="email" name="email" id="email" required />
                <input onBlur={handleBlur} type="password" name="password" id="password" required className='my-3' />
                <input type="button" value="submit" className='btn my-2' />
            </form>
        </div>
    );
};

export default AddAdmin;