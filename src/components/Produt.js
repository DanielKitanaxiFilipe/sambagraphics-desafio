import Rectangle from '../assets/img/Rectangle.png'
import '../style/card.css'
import {formatPrice} from'../util/format.js'
export function Produt({ title, autor, description, price }){
  
  return(<>
  <div className="card">
          <div className="card-body">
            <img src={Rectangle} alt=""/>
            <div className='mt-30'>
              <div className='d-flex-lw'>
                <div>
                  <i className='fa fa-star'/> 4.5
                </div>
                <div><i className='fa fa-circle'/>Categoria</div>
              </div>
              <div className='d-flex-lw mt-20'>
                <div>
                  <h2>{title}</h2>
                  <div className="mt--15">{autor}</div>
                </div>
                <div className='mt-20'>
                  <button type='submit' className='button-plus' title='Adicionar'><i className='fa fa-plus-square'/></button>
                  <button type='submit' className='button-remove' title='Remover'><i className='fa fa-remove'/></button>
                </div>
              </div>
              <p className='mt-30'>{description}</p>
              <div className='mt-30'>
                <span>2022</span>
                <span className='ml-20'>
                  <i className='fa fa-commenting'/> 6
                </span>
                <span className='ml-20 alert-idade'>15</span>
              </div>
              <div className='mt-40 d-flex-lw'>
                <div className='mt-25'>
                  <button className='btn-action' type='' title='Ler artigo'>
                    Leia Agora
                  </button>
                </div>
                <div>
                  <h2 className='color-orange'>{formatPrice (price)}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>);
}