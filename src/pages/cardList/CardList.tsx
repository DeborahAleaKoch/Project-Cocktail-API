import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mainContext } from "../../context/MainProvider";
import { CardItem } from "../../components/cardItem/CardItem";

const CardList = () => {
	const { linkParam } = useParams();
	// console.log(linkParam);

	const { drinks, setLink } = useContext(mainContext) as any;

	// console.log(drinks);

	useEffect(() => {
		setLink(linkParam);
	}, [linkParam]);

	console.log("drinks:", drinks);

	return (
		<>
			<div>
				<h2 className='text-center text-5xl bg-slate-400'>
					{linkParam?.toUpperCase()}
				</h2>

				<div className='grid md:grid-cols-2 bg-slate-100'>
					{drinks.map((drink: any) => {
						return (
							<div key={drink.idDrink}>
								{/* hier kommt die Component mit der einzlenen Karte hin */}
								<CardItem drink={drink} link={linkParam || ""} />
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default CardList;
