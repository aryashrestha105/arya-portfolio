import '../tailwind.css'
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/">
          <div className="text-2xl font-bold">Arya&apos;s Portfolio</div>
        </Link>
        <nav className='ml-4' >
          <ul className="flex space-x-2">
            <li><Link to="/works" className="hover:text-gray-400">Works</Link></li>
            <li><Link to="/certifications" className="hover:text-gray-400">Certifications</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;