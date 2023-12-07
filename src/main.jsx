import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardList />
  </React.StrictMode>,
)

function CardList() {
	return (
		<React.Fragment>
<Card 
  word = "Car"
  transcription = "kär"
  translation = "Машина"
  meaning = "Средство передвижения на 4-х колёсах"
  category = "transport"
/>
		</React.Fragment>
	);
}

export default CardList;