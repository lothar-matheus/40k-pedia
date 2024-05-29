import React from 'react';
import './App.css';
import spaceMarines from './cads/spaceMarines.jpg'
import orks from './cads/orks.jpg'
import necrons from './cads/necrons.jpg'
import eldar from './cads/eldar.jpg'
import { ultramarinesText, orksText,eldarText,  necronsText } from './textos';


function cardsEx(imgUrl, h, tex){
  let img = imgUrl;
  let hino = h;
  let texto = tex;

  let max = [img, h, tex];
  return max;


}
function Fac() {
  return (
    <div className="AppAlter">
      
      <div>
        <p>
          No universo de Warhammer 40k, as facções são diversas e numerosas, cada uma com sua própria história, cultura e objetivos. Desde os super-humanos Space Marines até os nefastos Necrons e os misteriosos Eldar, cada facção oferece uma visão única do vasto e sombrio futuro onde a guerra é eterna.
        </p>
      </div>
      <div className='FacDetails'>
        <button>
          <img src={spaceMarines} alt="" className='cards'/>
        </button>
        <button>
          <img src={orks} alt="" className='cards'/>
          </button>
        <button>
          <img src={eldar} alt="" className='cards'/>
          </button>
        <button>
          <img src={necrons} alt="" className='cards'/>
        </button>

      </div>
    </div>
  );
}

export default Fac;
