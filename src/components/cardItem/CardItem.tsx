interface CardItemProps {
	drink: any;
	link: string;
}

// interface CardItem {
// 	strDrink: string;
// 	strDrinkThumb: string;
// 	idDrink: string;
// }

export const CardItem = ({ drink, link }: CardItemProps) => {
	return (
		<div className='p-5 bg-slate-100 '>
			<div>
				{link === "gin" && (
					<div className='shadow bg-slate-200'>
						<img
							src={drink.strDrinkThumb}
							alt='hier wäre ein bild'
							className='w-2/3'
						/>
						<h1 className=' text-2xl'>{drink.strDrink}</h1>
					</div>
				)}
				{link === "vodka" && (
					<div>
						<img src={drink.strDrinkThumb} alt='hier wäre ein bild' />
						<h1>{drink.strDrink}</h1>
					</div>
				)}
				{link === "rum" && (
					<div>
						<img src={drink.strDrinkThumb} alt='hier wäre ein bild' />
						<h1>{drink.strDrink}</h1>
					</div>
				)}
				{link === "scotch" && (
					<div>
						<img src={drink.strDrinkThumb} alt='hier wäre ein bild' />
						<h1>{drink.strDrink}</h1>
					</div>
				)}
				{link === "alkoholfrei" && (
					<div>
						<img src={drink.strDrinkThumb} alt='hier wäre ein bild' />
						<h1>{drink.strDrink}</h1>
					</div>
				)}
				{link === "zufall" && (
					<div>
						<img src={drink.strDrinkThumb} alt='hier wäre ein bild' />
						<h1>{drink.strDrink}</h1>
					</div>
				)}
			</div>
		</div>
	);
};
