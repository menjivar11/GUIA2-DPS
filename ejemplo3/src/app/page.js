"use client";
import { useState } from "react";
import styles from "./page.module.css";
export default function Home() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);
  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
    setResultado(`Resultado de la suma: ${resultadoSuma}`);
  };
  const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
    setResultado(`Resultado de la resta: ${resultadoResta}`);
  };
  const multiplicar = () => {
    const resultadoResta = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicacion: ${resultadoResta}`);
  };
  const dividir = () => {
    const resultadoResta = parseFloat(numero1) / parseFloat(numero2);
    setResultado(`Resultado de la division: ${resultadoResta}`);
  };
  const potencia = () => {
    const resultadoPotencia = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`Resultado de la potenciación: ${resultadoPotencia}`);
  };
  const raizcuadrada = () => {
    if (parseFloat(numero1) >= 0) {
      const resultadoraizcuadrada = Math.sqrt(parseFloat(numero1));
      setResultado(`Raíz cuadrada de ${numero1}: ${resultadoraizcuadrada}`);
    } else {
      setResultado("No se puede calcular la raíz cuadrada de un número negativo");
    }
  };
  const reiniciar = () => {
    setNumero1('');
    setNumero2('');
    setResultado(null);
  };
  
  return (
    <main className={styles.main}>
      {/*<div className={styles.baner}><h1>calculadora</h1></div> */}
      <div className={styles.calculadora}>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input className={styles.inputnum} type="number"
            value={numero1} onChange={(e) => setNumero1(e.target.value)} />
        </div>
        <div className={styles.numeros}>
          <label className={styles.text} >Número 2:</label>
          <input className={styles.inputnum} type="number"
            value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        </div>
        <div>
          <button className={styles.button}
            onClick={sumar}>Sumar</button>
          <button className={styles.button}
            onClick={restar}>Restar</button>
            <button className={styles.button}
            onClick={multiplicar}>Multiplicar</button>
            <button className={styles.button}
            onClick={dividir}>Dividir</button>
            <button className={styles.button}
          onClick={potencia}>Potenciar</button>
          <button className={styles.button} 
          onClick={raizcuadrada}>Raíz Cuadrada</button>
        </div>
        {resultado && <div className={styles.resultado}>{resultado}</div>}
        <button className={styles.button2} onClick={reiniciar}>Reiniciar</button>
      </div>
    </main>
  );
}