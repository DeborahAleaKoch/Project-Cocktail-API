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
	const getColor = () => {
		switch (link) {
			case "gin":
				return "bg-lime-100";
			case "vodka":
				return "bg-red-200";
			case "rum":
				return "bg-purple-100";
			case "scotch":
				return "bg-orange-100";
			case "alkoholfrei":
				return "bg-emerald-100";
			case "zufall":
				return "bg-indigo-100";
			default:
				return "bg-pink-300";
		}
	};

	return (
		<div className='p-5 bg-slate-100'>
			<div>
				<div className={`shadow ${getColor()}`}>
					<img
						src={drink.strDrinkThumb}
						alt='hier wäre ein bild'
						className='w-2/3'
					/>
					<h1 className=' text-2xl'>{drink.strDrink}</h1>
				</div>
			</div>
		</div>
	);
};
