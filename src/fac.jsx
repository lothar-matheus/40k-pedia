import React,{useState, useEffect} from 'react';
import './App.css';

//importação de imagens jpg
import spaceMarines from './cads/spaceMarines.jpg'
import orks from './cads/orks.jpg'
import necrons from './cads/necrons.jpg'
import eldar from './cads/eldar.jpg'

//importação de arquivos mp3
import spaceMarinesAudio from './msc/space_marines_music.mp3';
import orksAudio from './msc/orks_music.mp3';
import eldarAudio from './msc/eldar_music.mp3';
import necronsAudio from './msc/necrons_music.mp3';

import { ultramarinesText, orksText,eldarText,  necronsText } from './textos';



// tema das facções
const factionsTheme = {
  'Space Marines': new Audio(process.env.PUBLIC_URL + '/msc/space_marines_music.mp3'),
  'Orks': new Audio(process.env.PUBLIC_URL + '/msc/orks_music.mp3'),
  'Eldar': new Audio(process.env.PUBLIC_URL + '/msc/eldar_music.mp3'),
  'Necrons': new Audio(process.env.PUBLIC_URL + '/msc/necrons_music.mp3')
};

// textos das facções
const factionTexts = {
  'Space Marines': ultramarinesText,
  'Orks': orksText,
  'Eldar': eldarText,
  'Necrons': necronsText
};


function Fac() {

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const [currentAudioSource, setCurrentAudioSource] = useState(null);
  const audioBuffers = {};

  // Carregar buffers de áudio
  const loadAudioBuffer = async (url) => {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return audioContext.decodeAudioData(arrayBuffer);
  };

  Promise.all([
    loadAudioBuffer(spaceMarinesAudio),
    loadAudioBuffer(orksAudio),
    loadAudioBuffer(eldarAudio),
    loadAudioBuffer(necronsAudio),
  ]).then(([spaceMarinesBuffer, orksBuffer, eldarBuffer, necronsBuffer]) => {
    audioBuffers['Space Marines'] = spaceMarinesBuffer;
    audioBuffers['Orks'] = orksBuffer;
    audioBuffers['Eldar'] = eldarBuffer;
    audioBuffers['Necrons'] = necronsBuffer;
  });




  const [selectedFaction, setSelectedFaction] = useState(null);

  const handleButtonClick = (faction) => {
    // Parar a fonte de áudio atual
    alert('Tocando música')
    if (currentAudioSource) {
      currentAudioSource.stop();
    }
  
    setSelectedFaction(faction);
    if (audioBuffers[faction]) {
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffers[faction];
      source.connect(audioContext.destination);
      source.start();
      setCurrentAudioSource(source);
    }
  };
  useEffect(() => {
    return () => {
      // Parar a fonte de áudio atual quando o componente for desmontado
      if (currentAudioSource) {
        currentAudioSource.stop();
      }
    };
  }, [currentAudioSource]);

  return (
    <div className="AppAlter">
      
      <div className='divh2Fac' style={{ marginLeft: '20px' }}>
          <h2>Algumas das facções (Clique nas fotos para escutar o tema)</h2>
      </div>
      <div className='FacDetails'>
        <button onClick={() => handleButtonClick('Space Marines')}>
          <img src={spaceMarines} alt="" className='cards'/>
        </button>
        <button onClick={() => handleButtonClick('Orks')}>
          <img src={orks} alt="" className='cards'/>
          </button>
        <button onClick={() => handleButtonClick('Eldar')}>
          <img src={eldar} alt="" className='cards'/>
          </button>
        <button onClick={() => handleButtonClick('Necrons')}>
          <img src={necrons} alt="" className='cards'/>
        </button>

      </div>
      {selectedFaction && (
        <div className='cards'>
          <h1>{selectedFaction}</h1>
          <p>{factionTexts[selectedFaction]}</p>
          
        </div>
      )}
    </div>
  );
}

export default Fac;
