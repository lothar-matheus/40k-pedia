import React from 'react';
import './App.css';

function Board() {
  return (
    <div className="histoDiv">
      <h1>Onde tudo começou</h1>
      <p>Não se deve esquecer de que tudo começou com um jogo de tabuleiro.</p>
      <p>Abaixo as miniaturas caso deseje compra-las e se aprofundar non universo</p>

      <div className='lore'>
        <a href="https://www.warhammer.com/en-GB/shop/combat-patrol-space-marines-2023" target='_blank'><button> SPACE MARINES</button>
        </a>
        <a href="https://www.warhammer.com/en-GB/shop/combat-patrol-orks-2024?queryID=88c1e6a5a7b20aa92d4e9984dc3e86e8" target='_blank'><button>ORKS</button>
        </a>
        <a href="https://www.youtube.com/watch?v=1s9TwrLU5pY&list=PLz8-M4i3vmdA2EZIGRD-XIHtgvZFY21Sj&index=8"target='_blank'> <button>ELDARS</button>
        </a>

        <a href="https://www.warhammer.com/en-GB/shop/combat-patrol-necrons-2023?queryID=6da2a1ee29165f833c030cc20beb77d1"target='_blank'> <button>NECRONS</button>
        </a>

      </div>
    </div>
    
  );
}

export default Board;