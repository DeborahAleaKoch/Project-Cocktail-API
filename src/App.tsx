import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import CardList from "./pages/cardList/CardList";
import { NotFound } from "./pages/notfound/NotFound";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/:linkParam' element={<CardList />} />
				<Route path='/*' element={<NotFound />} />
			</Route>
		)
	);
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
