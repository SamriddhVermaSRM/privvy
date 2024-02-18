import "./Header.css";
import logo from "./logo.png";

function Header() {
    return (
      <>
        <nav className="desktop">
            <a href='about'>
                About
            </a>
            <a href='catalogue'>
                Our Products
            </a>
            <a href='/'>
                <img src={logo} alt="logo" />
            </a>
            <a href='contacts'>
                Contacts
            </a>
            <a href='cart'>
                Buy Now
            </a>
        </nav>
        <div className="mobile">
            
            <label className="hamburger"><input type="checkbox" /></label>
            <a href='/'>
                <img src={logo} alt="logo" />
            </a>
            <div className="logged-in">

            </div>
            <aside className="sidebar">
                <nav>
                    <a href="/">Home</a>
                    <a href="/catalogue">Our Products</a>
                    <a href="/contacts">Contacts</a>
                    <a href="/cart">Cart</a>
                </nav>
            </aside>
        </div>
      </>
    );
  }

export default Header;