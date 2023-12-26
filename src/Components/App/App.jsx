import style from '../App/App.module.scss'
import Card from '../Card/Card'

const words = [
	{
	word:"dog",
	transcription:"[dɒg]",
	translate:"собака",
},
	{
	word:"corn",
	transcription:"[kɔːn]",
	translate:"кукуруза"
},
	{
	word:"bread",
	transcription:"[br:ead]",
	translate:"хлеб, выпечка"
},
	{
	word:"cloudy",
	transcription:"[ˈkloudē]",
	translate:"пасмурно, облачно"
},
	{
	word:"sun",
	transcription:"[вуапр]",
	translate:"солнце"
},
	{
	word:"tremendous",
	transcription:"[trəˈmendəs]",
	translate:"огромный"
}
]

export default function App() {
	return (

		<div className={style.container}>
			{words.map((word, index) =>
			<Card 
			{...word} key={index}/>
				)}
		</div>
	);
}
