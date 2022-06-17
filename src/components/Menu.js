import '../style/menu.css'
import logo from '../assets/img/Logo.png'
export function Menu(){
  return(
      <nav className='navbar'>
        <div className="container">
          <img src={logo} alt="" width={124}/>
          <div className="navbar-nav mt-5 d-flex">
            <li className='nav-item'>
              <a href="#" className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Gêneros</a>
            </li>
            <li className='nav-item'>
              <a href="#" className='nav-link'>Alterar idioma</a>
            </li>
            <li className='nav-item ms-30 delet-div'>
              <button type='submit' className='btn-action'>Criar conta</button>
            </li>
            <li className='nav-item ms-30 delet-div'>
              <button type='submit' className='btn-wd'>Login</button>
            </li>
          </div>
          <div className="delet-div-1200">          
          <div className="search">
            <input type="text" placeholder='Pesquisar'/>
            <span>
              <i className='fa fa-search'></i>
            </span>
          </div></div>
        </div>
      </nav>
  );
}