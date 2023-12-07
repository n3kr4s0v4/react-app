import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.jsx'
import Header from './Header.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <CardList />
  </React.StrictMode>,
)

function CardList() {
	return (
		<>
<Card 
  word = "Car"
  transcription = "kär"
  translation = "Машина"
  meaning = "Средство передвижения на 4-х колёсах"
  category = "transport"
/>
		</>
	);
}

export default CardList;