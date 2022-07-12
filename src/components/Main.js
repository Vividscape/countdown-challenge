import React from 'react';
import CountdownTimer from './CountdownTimer';
import { ImFacebook, ImTwitter} from "react-icons/im";
import { TiSocialGooglePlus, TiSocialYoutubeCircular, TiSocialInstagram } from "react-icons/ti";

const Button = ({ title, type }) => {
    return (
        <button className='uppercase text-3xl w-80 transition ease duration-200' type='button'>
            <span className='inline-block py-3'>{title}</span>
        </button>   
    );
}

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
                <div className='reveal-event'>
                    <div className='text-center mt-4 pb-48'>
                        <h2 className='uppercase text-2xl pb-12'>reveal event april 27th</h2>
                        <Button title="watch teaser" />
                    </div>
                    <div className='flex flex-col items-center'>
                        <Button title="add to calendar" />
                        <a href='https://square-enix-games.com/' className='mt-6'><Button title="newsletter sign up" /></a>
                        <div className='social-links text-white flex my-14'>
                            <a href="#" className='transition ease duration-200 hover:text-red-500'>
                                <span className='flex w-12 h-12 items-center justify-center text-2xl'><ImFacebook /></span>
                            </a>
                            <a href="#" className='transition ease duration-200 hover:text-red-500 ml-4'>
                                <span className='flex w-12 h-12 items-center justify-center text-2xl'><ImTwitter /></span>
                            </a>
                            <a href="#" className='transition ease duration-200 hover:text-red-500 ml-4'>
                                <span className='flex w-12 h-12 items-center justify-center text-4xl'><TiSocialGooglePlus /></span>
                            </a>
                            <a href="#" className='transition ease duration-200 hover:text-red-500 ml-4'>
                                <span className='flex w-12 h-12 items-center justify-center text-3xl'><TiSocialYoutubeCircular /></span>
                            </a>
                            <a href="#" className='transition ease duration-200 hover:text-red-500 ml-4'>
                                <span className='flex w-12 h-12 items-center justify-center text-3xl'><TiSocialInstagram /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );   
}

export default Main;