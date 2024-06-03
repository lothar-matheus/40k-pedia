import React from 'react';
import './App.css';


function Hist() {
  return (
    <div className="histoDiv">
      <header>
        <h1>História</h1>
      </header>
      <div className='divh2'>
        <h2>Abaixo listamos os eventos principais do universo</h2>
      </div>
      <div className='lore'>
        <a href="https://www.youtube.com/watch?v=IEgd-EZENPs" target='_blank'><button> A Grande Cruzada</button>
        </a>
        <a href="https://www.youtube.com/watch?v=I_3fS4imjC8" target='_blank'><button>A Heresia de Horus</button>
        </a>
        <a href="https://www.youtube.com/watch?v=1s9TwrLU5pY&list=PLz8-M4i3vmdA2EZIGRD-XIHtgvZFY21Sj&index=8"target='_blank'> <button>O Jogo das Forças do Caos</button>
        </a>

      </div>
      <div className='divVideo'>
          <video src="./video/war_video_mp4"></video>
      </div>
    </div>
  );
}

export default Hist;
