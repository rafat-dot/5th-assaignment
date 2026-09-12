
import logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <nav className='flex items-center justify-between p-4 '>
            <img src={logo} alt="" />
            <ul className='flex space-x-4'>
                <li className='text-[#DB2777] bold'>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
           <div className='flex space-x-7'>
             <button>Sign In</button>
            <button className='bg-[#D91B7E] hover:bg-[#b81769] text-white px-4 py-2 rounded-lg'>Sign Up</button>
           </div>
        </nav>
    );
};

export default Nav;