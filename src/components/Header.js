const Header = () => {
    return (
        <header className='border-b border-slate-800'>
            <div className= 'flex justify-between items-center pl-10'>
                <a href='http://square-enix-games.com'><img src="./assets/se-logo-white.png" alt='Sqaure Eninix Company Logo' className='w-48 md:w-auto'/></a>
                <div className='login md:bg-white pl-5 md:pl-28 pr-5'>
                    <a href='http://square-enix-games.com' className='inline-block uppercase px-5 py-5 md:py-8 text-white md:text-black transition ease duration-200 hover:text-red-500'>join</a>
                    <a href='http://square-enix-games.com' className='inline-block uppercase px-5 py-5 md:py-8 text-white md:text-black transition ease duration-200 hover:text-red-500'>log in</a>
                </div>
            </div>
        </header>
    );   
}

export default Header;