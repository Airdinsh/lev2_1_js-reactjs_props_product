// Erstelle eine Produktkomponente, die Produktkarten ausgibt. 
// Dabei werden Preis, Name und Bild des Produkts über Props (img, Modell, Preis) übergeben.
// Programmiere eine Komponente, die drei Produktkarten rendert. Gib jeder Karte eigene Props.

import React from 'react';
import './App.css';
import ProductList from "./components/ProductList.js"

function App() {
  return (
    <div className="ProductBox">
      <ProductList />
    </div>
  )
}

export default App;
