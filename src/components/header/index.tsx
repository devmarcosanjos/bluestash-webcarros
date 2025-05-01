import { Link } from 'react-router-dom';
import logo from '../../assets/BlueStash WebCarros.svg';
import { UserCircle } from 'lucide-react';

export function Header() {
  const singned = false;
  const loadingAuth = false;


  return (
    <div className='w-full flex items-center justify-between '>
      <header>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <Link to="/login">
          <UserCircle />
        </Link>
      </header>      
    </div>
  );
}