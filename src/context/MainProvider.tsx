import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// hier noch ein Interface

export const mainContext = createContext({});

export function MainProvider({ children }: { children: React.ReactNode }) {
	// hier kommen die useStates hin
	const [link, setLink] = useState<string>("");
	const [drinks, setDrinks] = useState<any>([]);

	//useEffect für den API- Aufruf
	useEffect(() => {
		const getData = async () => {
			let url = "";
			if (link) {
				if (link === "gin") {
					url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
				} else if (link === "vodka") {
					url =
						"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";
				} else if (link === "rum") {
					url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum";
				} else if (link === "scotch") {
					url =
						"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch";
				} else if (link === "alkoholfrei") {
					url =
						"https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
				} else if (link === "zufall") {
					url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
				} else {
					url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${link}`;
				}
				try {
					const response = await axios.get(url);
					console.log("response", response);

					setDrinks(response.data.drinks);
				} catch (error) {
					console.error(error, "hier ist was schief gelaufen");
				}
			}
		};
		getData();
		console.log(drinks);
	}, [link]);

	return (
		//value bei mainContext.Provider sind Einträge aus dem useState
		<>
			<mainContext.Provider value={{ setLink, drinks }}>
				{children}
			</mainContext.Provider>
		</>
	);
}
