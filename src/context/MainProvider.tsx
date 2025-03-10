import { createContext } from "react";

export const mainContext = createContext({});

export function MainProvider({ children }: { children: React.ReactNode }) {
	// hier kommen die useStates hin

	//useEffect für den API- Aufruf
	return (
		//value bei mainContext.Provider sind Einträge aus dem useState
		<>
			<mainContext.Provider value={{}}>{children}</mainContext.Provider>
		</>
	);
}
