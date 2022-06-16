import '../style/footer.css'
import logo1 from '../assets/img/logo2.png'
import APPSTORE from '../assets/img/APPSTORE.png'
import PLAYSTORE from '../assets/img/PLAYSTORE.png'
export function Footer(){
  return(<>
  <footer>
    <div className="container d-flex">
      <div className="footer-icon width-100">
        <img src={logo1} alt="" width={209}/>
      </div>
      <div className='footer-menu width-100'>    
          <li className='nav-item-footer '>
            <a href="#" className='nav-link'>Home</a>
          </li>
          <li className='nav-item-footer '>
            <a href="#" className='nav-link'>Gêneros</a>
          </li>
          <li className='nav-item-footer '>
            <a href="#" className='nav-link'>Favoritos</a>
          </li>
          <li className='nav-item-footer '>
            <a href="#" className='nav-link'>Perfil</a>
          </li>
          <li className='nav-item-footer '>
            <a href="#" className='nav-link'>Termos de uso</a>
          </li>
          <li className='nav-item-footer '>
            <a href="#" className='nav-link'>Política de privacidade</a>
          </li>
          <li className='nav-item-footer '>
            <a href="#" className='nav-link'>Quem somos</a>
          </li>
          <li className='nav-item-footer '>
            <a href="#" className='nav-link'>Enviar HQ</a>
          </li>
      </div>
      <div className='footer-midia width-100'>
        Siga-nos nas redes sociais <br />
        <div className='mt-20'>
        <a href="#" className='link-icon'><i className='fa fa-twitter'/></a>
        <a href="#" className='link-icon'><i className='fa fa-instagram'/></a>
        <a href="#" className='link-icon'><i className='fa fa-facebook-square'/></a>
        </div>
        <div className='mt-50'>
         Assine a nossa Newsletter
         <div className="envil-email mt-20">
            <input type="text" placeholder='Digite seu email'/>
            <button type='submit' title='Enviar Email'>
              <i className='fa fa-paper-plane'></i>
            </button>
          </div>
        </div>
      </div>
      <div className="width-100">
      Baixe o App 
      <div className='mt-40'>
      <a href="">
        <img src={APPSTORE} alt="" width={150}/>
      </a> <br />
      <a href="" className=''>
        <img src={PLAYSTORE} alt="" className='mt-20' width={150}/>
      </a>
      </div>
      </div>
    </div>
  </footer>
  <div className="footer-term">
  Termos e aviso de privacidade. Envie-nos seu feedback. Ajuda. © 2022, Samba Graphics
  </div>
  </>);
}