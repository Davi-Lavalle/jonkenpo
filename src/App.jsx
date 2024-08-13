import React, { useState } from 'react';
import { FaFire } from 'react-icons/fa';
import { IoWater } from 'react-icons/io5';
import { PiPlant } from 'react-icons/pi';
import './App.css'

function App() {
  const [jogador, setJogador] = useState(0);
  const [maquina, setMaquina] = useState(0);
  const [potuacaoM, setPotuacaoM] = useState(0);
  const [potuacaoJ, setPotuacaoJ] = useState(0);
  const [verificador, setVerificador] = useState(0);
  const [mensagem, setMemsagem] = useState("");
  const [mostrarJogar, setMostrarJogar] = useState(true);
  const [mostrarNovamente, setMostrarNovamente] = useState(false);
  const [mostrarBatalhar, setMostrarBatalhar] = useState(false);
  const [contador, setContador] = useState(0);



  //setMaquina(Math.floor(Math.random() * 3) + 1);

  function jogar(escolha) {
    setMemsagem("")
    setVerificador(0)
    setMostrarBatalhar(true);
    setJogador(escolha);
    setMaquina(Math.floor(Math.random() * 3) + 1);
  }

  function imagem(escolha) {
    switch (escolha) {
      case 1:
        return '/charmander.webp'; 
      case 2:
        return '/squirtle.webp'; 
      case 3:
        return '/bulbasauro.png'; 
      default:
        return '/Pokebola.png';
    }
  }

  
  

  function batalhar(){
   console.log(contador)
   setVerificador(maquina);
  if(contador < 4){
    setMostrarBatalhar(false);
    setContador(contador + 1)
      if(jogador == 1 && maquina == 3 ||jogador == 2 && maquina == 1 ||jogador == 3 && maquina == 2){
        setPotuacaoJ(potuacaoJ + 1)
        setMemsagem("Você venceu!")
      }else if (jogador == maquina){
        setMemsagem("Empatou!")
      }else if (maquina == 1 && jogador == 3 || maquina == 2 && jogador == 1 ||maquina == 3 && jogador == 2){
        setPotuacaoM(potuacaoM + 1)
        setMemsagem("Você perdeu!")
      }
    }
    else{
      console.log("entrou")

      if (potuacaoJ > potuacaoM) {
        setMemsagem("Você ganhou da maquina!")
      }else if (potuacaoJ < potuacaoM) {
        setMemsagem("A maquina venceu!")
      }else{
        setMemsagem("Vocês empataram!")
  
      }
      setMostrarBatalhar(false);
      setMostrarNovamente(true)
      setMostrarJogar(false)

    }
    
  }

  function jogarNovamente(){
    setJogador(0)
    setMaquina(0)
    setPotuacaoJ(0)
    setPotuacaoM(0)
    setContador(0)
    setVerificador(0)
    setMemsagem("")
    setMostrarNovamente(false)
    setMostrarJogar(true)
  }
  return (
    <>
      <div className='placar'>
        <p>{potuacaoJ} X {potuacaoM}</p>
        <p>{mensagem}</p>
      </div>
      <section className='jogo'>
        <div>
        <img src={imagem(jogador)} alt="Escolha do Jogador" />
        <div className={`botoes ${mostrarJogar ? 'visible' : 'hidden'}`}>
          <button onClick={() => jogar(1)} className="fogo"><FaFire /></button>
          <button onClick={() => jogar(2)} className="agua"><IoWater /></button>
          <button onClick={() => jogar(3)} className='planta'><PiPlant /></button>
        </div>
        </div>
      <div className='Imaquina'>
        <img src={imagem(verificador)}alt="Escolha da Máquina" />
      </div>
      </section>
      <button onClick={batalhar} className={`batalha ${mostrarBatalhar ? 'visible' : 'hidden'}`}>Batalhar</button><br />
      <button onClick={jogarNovamente} className={`novamente ${mostrarNovamente ? 'visible' : 'hidden'}`}>Jogar novamente</button>
    </>
  );
}

export default App;
