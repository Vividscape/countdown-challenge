import React from 'react';
import CountdownTimer from './CountdownTimer';

const Main = () => {

    const TARGET_DAYS_IN_MS = 22 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterSetDays = NOW_IN_MS + TARGET_DAYS_IN_MS;

    return (
        <main>
            <div className='container mx-auto'>
                <div className='mb-32 md:mb-60'>
                    <img src='./assets/shadow-tomb-raider.png' alt='Shadow of the Tomb Raider logo' 
                    className='mx-auto mt-14'
                    />
                </div>
                <CountdownTimer targetDate={dateTimeAfterSetDays}/>
            </div>
        </main>
    );   
}

export default Main;