import './App.css';
import React, { useState, useEffect } from 'react'

export default function App() {

  function obtenerNotas(){
    const notasAlmacenadas = localStorage.getItem('notas')
    if (notasAlmacenadasd) {
      return JSON.parse(notasAlmacenadas)
    } else {
      return []
    }
  }
  const [notas, agregaNota] = useState(obtenerNotas)
  
  return (
    <div className="B">
     
    </div>
  );
}