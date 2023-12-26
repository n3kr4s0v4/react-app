import style from '../Card/Card.module.scss'
import Button from '../Button/Button'
import { useState } from 'react'

function showWord ({translate}){
  return (
  <div className="word-translate">{translate}</div>
)}

export default function Card({word, transcription, translate}) {
  return (
    <div className={style.card}>
      <div className={style.card_word}>{word}</div>
      <div className="word-transcription">{transcription}</div>
      
        </div>
  )
}
