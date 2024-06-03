import React from 'react';
import './App.css';

function Jogos() {
  return (
    <div className="histoDiv">
      <header >
        <h1>Jogos</h1>
      </header>
      <div className='divh2'>
        <h2>Abaixo listamos os melhores jogos eletrônicos que você pode comprar na steam</h2>
      </div>
      <div className='lore'>
        <a href="https://store.steampowered.com/app/15620/Warhammer_40000_Dawn_of_War_II/" target='_blank'>
          <button>Dawn Of War 2</button>
        </a>

        <a href="https://store.steampowered.com/agecheck/app/1361210/" target='_blank'>
          <button>Warhammer 40,000: Darktide</button>
        </a>

        <a href="https://store.steampowered.com/app/2005010/Warhammer_40000_Boltgun/" target='_blank'>
          <button>Boltgun</button>
        </a>

      </div>
    </div>
  );
}

export default Jogos;
