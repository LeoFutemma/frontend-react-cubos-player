import Logo from '../assets/logo.svg';
import Profile from '../assets/profile.jpg';
import '../App.css';

export default function Header() {
  return (
    <header>
      <img src={Logo} alt='Cubos Player logo' />
      <div className='header__login'>
        <img src={Profile} alt='Profile' className='profile' />
        <span>Bem vindo, Leonardo.</span>
      </div>
    </header>
  )
}