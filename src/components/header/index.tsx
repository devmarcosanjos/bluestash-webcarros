import { Link } from 'react-router';
import logo from '../../assets/WebCarros.svg';
import { LogIn, User } from 'lucide-react';

export function Header() {
  const singed = false;
  const loadingAuth = false;

  return (
    <div className="w-full flex item justify-center h-16 bg-white drop-shadow mb-4">
      <header className="flex w-full justify-between max-w-7xl items-center px-4">
        <Link
          to="/"
          className="flex items-center w-[256px]  h-12 px-4 rounded-sm"
        >
          <img src={logo} alt="BlueStash Web Carros" />
        </Link>

        {!loadingAuth && singed && (
          <Link to="/dashboard">
            <User size={24} />
          </Link>
        )}

        {!loadingAuth && !singed && (
          <Link to="/login">
            <LogIn size={24} />
          </Link>
        )}
      </header>
    </div>
  );
}
