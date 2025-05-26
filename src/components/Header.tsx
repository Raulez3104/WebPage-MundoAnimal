import './Header.css'
import Menubar from './Menubar'

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo1.jpg" alt="Logo" />
        <h1>Mundo Animal</h1>
      </div>
      <Menubar />
    </header>
  )
}

export default Header