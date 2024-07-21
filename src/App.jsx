import './App.css';

function App() {
  return (
    <>
     <div className="header">
        <header className='notification'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50% ! <strong><a href="/ShopNow" className='shopNow'>ShopNow</a></strong></header>
        <div className="navBar">
          <h2 className='left'>Exclusive</h2>
          <ul className='menu'>
            <li><a href="/Home">Home</a></li>
            <li><a href="/Contact"> Contact</a></li>
            <li><a href="/About"> About</a></li>
            <li><a href="/SignUp"> Sign up</a></li>
          </ul>
          <div className='right'>
            <ul className='rightMenu'>
              <input type="text" className='searchBar' placeholder='What are you looking for'/>
              <li className='wishlist'> Wishlist</li>
              <li className='cart'> Cart</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <ul>
          <li><h2>Exclusive</h2></li>
          <li><h3>Subscribe</h3></li>
          <li>Get 10% off your first order</li>
          <li><input type="text" /></li>
        </ul>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </footer>
    </>
  );
}

export default App;
