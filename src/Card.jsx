import './App.css'

function Card(props) {
  return (
    <div className="card">
            <div className="card-body">
                <h4 className="card-word">Слово: {props.word}</h4>
                <span className="card-transcription">Транскрипция: [{props.transcription}]</span>
                <span className="card-translation">Перевод: {props.translation}</span>
          <span className="card-meaning">Значение: {props.meaning}</span>
          <span className='card-category'>Тема: {props.category}</span>
        </div>
        </div>
  )
}


export default Card
