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

    // Countdown Timer variables ------------ //
    const TARGET_DAYS_IN_MS = 22 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterSetDays = NOW_IN_MS + TARGET_DAYS_IN_MS;

    // Google Calendar api scripts ----------//
    var gapi = window.gapi;
    var CLIENT_ID = '231452650380-pu7eojgcnmc3qvr8ujen5omnmuj525jb.apps.googleusercontent.com';
    var API_KEY = 'AIzaSyBZPVYm3s-wumcyGqPaSM2rZ1TqbzhBvXk';
    const DISCOVERY_DOC = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest']
    const SCOPES = 'https://www.googleapis.com/auth/calendar.app.created';

    const handleClick = () => {
        gapi.load('client:auth2', () => {

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOC,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3')

            gapi.auth2.getAuthInstance().signIn()
            .then(() => {
                var event = {
                    'summary': 'Google I/O 2015',
                    'location': '800 Howard St., San Francisco, CA 94103',
                    'description': 'A chance to hear more about Google\'s developer products.',
                    'start': {
                      'dateTime': '2015-05-28T09:00:00-07:00',
                      'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                      'dateTime': '2015-05-28T17:00:00-07:00',
                      'timeZone': 'America/Los_Angeles'
                    },
                    'recurrence': [
                      'RRULE:FREQ=DAILY;COUNT=2'
                    ],
                    'attendees': [
                      {'email': 'lpage@example.com'},
                      {'email': 'sbrin@example.com'}
                    ],
                    'reminders': {
                      'useDefault': false,
                      'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},
                        {'method': 'popup', 'minutes': 10}
                      ]
                    }
                };

                var request = gapi.client.calendar.events.insert({
                    'calendarId' : 'primary',
                    'resource' : event,
                })

                request.execute(event => {
                    window.open(event.htmlLink);
                })
            })
        })
    }

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
                        <div onClick={handleClick}>
                            <Button title="add to calendar" />
                        </div>
                        <a href='https://square-enix-games.com/' className='mt-6'><Button title='newsletter sign up' /></a>
                        <div className='social-links text-white flex my-14'>
                            <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' className='transition ease duration-200 hover:text-red-500'>
                                <span className='flex w-12 h-12 items-center justify-center text-2xl'><ImFacebook /></span>
                            </a>
                            <a href='https://twitter.com/?lang=en' target='_blank' rel='noreferrer' className='transition ease duration-200 hover:text-red-500 ml-4'>
                                <span className='flex w-12 h-12 items-center justify-center text-2xl'><ImTwitter /></span>
                            </a>
                            <a href='https://myaccount.google.com/' target='_blank' rel='noreferrer' className='transition ease duration-200 hover:text-red-500 ml-4'>
                                <span className='flex w-12 h-12 items-center justify-center text-4xl'><TiSocialGooglePlus /></span>
                            </a>
                            <a href='https://www.youtube.com/' target='_blank' rel='noreferrer' className='transition ease duration-200 hover:text-red-500 ml-4'>
                                <span className='flex w-12 h-12 items-center justify-center text-3xl'><TiSocialYoutubeCircular /></span>
                            </a>
                            <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' className='transition ease duration-200 hover:text-red-500 ml-4'>
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