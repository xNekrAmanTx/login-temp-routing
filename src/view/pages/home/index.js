import React, {useState} from 'react';

const Home = ({username}) => {
    //const [who,setWho] = localStorage.getItem('username') || 'guest');
    return (
        <>
            <main>
                <h1>Home Page</h1>
                <div className='welcome'> {`Welcome, ${username || 'guest'}`} </div>
            </main>
        </>
    )
}
export default Home