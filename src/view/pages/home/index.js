import React from 'react';
import Header from '../../../components/header'

const Home = () => {
    const who = localStorage.getItem('username') || 'guest';
    return (
        <>
            <Header />
            <main>
                <h1>Home Page</h1>
                <div className='welcome'> {`Welcome, ${who}`} </div>
            </main>
        </>
    )
}
export default Home