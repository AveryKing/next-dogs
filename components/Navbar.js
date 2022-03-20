import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className='logo'>
                <Image src='/dog.png' width={80} height={75}/>
                &nbsp;&nbsp;&nbsp;
                <h1>Dogs</h1>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/dogs'><a>Dogs</a></Link>
        </nav>
    );
};

export default Navbar;