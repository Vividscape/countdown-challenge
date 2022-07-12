import { BsDot } from "react-icons/bs";

const LogoImage = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className='my-4 px-5 w-fit'/>
    );
}

const Footer = () => {
    return (
        <footer className='bg-white'>
            <div className= 'partners container mx-auto py-16 flex flex-wrap justify-center items-center'>
                <LogoImage src='./assets/partners/rating-pending.png' alt='Rating Pending logo' />
                <LogoImage src='./assets/partners/xbox.png' alt='XBox One logo' />
                <LogoImage src='./assets/partners/ps4.png' alt='Playstation 4 logo' />
                <LogoImage src='./assets/partners/steam.png' alt='Steam logo' />
                <LogoImage src='./assets/partners/pc-software.png' alt='PC Software logo' />
            </div>
            <div className='px-8'>
                <div className='flex justify-center mb-9'>
                    <LogoImage src='./assets/se-logo-black.png' alt='Sqaure Enix Company Logo' />
                </div>
                <p className='text-center text-xs leading-5 text-zinc-400'>Tomb Raider: Definitive Survival Trilogy © 2021 Square Enix Limited. Developed by Crystal Dynamics and Eidos Interactive Corporation. SHADOW OF THE TOMB RAIDER © 2018 Square Enix Limited.  Developed by Eidos Interactive Corporation. All rights reserved.  SHADOW OF THE TOMB RAIDER, TOMB RAIDER, CRYSTAL DYNAMICS, the CRYSTAL DYNAMICS logo, EIDOS-MONTRÉAL, the EIDOS-MONTRÉAL logo, and LARA CROFT are registered trademarks or trademarks of Square Enix Limited.   SQUARE ENIX and the SQUARE ENIX logo are registered trademarks or trademarks of Square Enix Holdings Co., Ltd. XBOX, XBOX ONE, the Games for Windows logo and Xbox logos are registered trademarks or trademarks of the Microsoft group of companies and are used under license. "PlayStation" and the "PS" Family logo are registered trademarks and "PS4" is a trademark of Sony Interactive Entertainment Inc. The PlayStation Network Logo is a service mark of Sony Interactive Entertainment Inc. ©2022 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries. The ratings icon is a registered trademark of the Entertainment Software Association. All other trademarks are the property of their respective owners.</p>
                <div className='flex justify-center items-center flex-wrap py-9'>
                    <a href='#' className='text-zinc-400 transition ease duration-200 hover:text-red-500 uppercase'>cookie policy</a>
                    <span className='text-3xl text-zinc-400'><BsDot/></span>
                    <a href='#' className='text-zinc-400 transition ease duration-200 hover:text-red-500 uppercase'>terms of use</a>
                    <span className='text-3xl text-zinc-400'><BsDot/></span>
                    <a href='#' className='text-zinc-400 transition ease duration-200 hover:text-red-500 uppercase'>privacy policy</a>
                    <span className='text-3xl text-zinc-400'><BsDot/></span>
                    <a href='#' className='text-zinc-400 transition ease duration-200 hover:text-red-500 uppercase'>support</a>
                    <span className='text-3xl text-zinc-400'><BsDot/></span>
                    <a href='#' className='text-zinc-400 transition ease duration-200 hover:text-red-500 uppercase'>material usage</a>
                </div>
            </div>
        </footer>
    );   
}

export default Footer;