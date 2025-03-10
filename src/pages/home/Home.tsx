import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
	return (
		<>
			<div className='grid text-2xl md:grid md:grid-cols-2 md:text-center md:text-4xl bg-slate-600'>
				<Link to={"/gin"} className='shadow-2xl bg-lime-100'>
					Gin
				</Link>
				<Link to={"/vodka"} className='shadow-2xl bg-red-200'>
					Vodka
				</Link>
				<Link to={"/rum"} className='shadow-2xl bg-purple-100'>
					Rum
				</Link>
				<Link to={"/scotch"} className='shadow-2xl bg-orange-100'>
					Scotch
				</Link>
				<Link to={"/alkoholfrei"} className='shadow-2xl bg-emerald-100'>
					Alkoholfrei
				</Link>
				<Link to={"/zufall"} className='shadow-2xl bg-indigo-100'>
					Zufall
				</Link>
			</div>
		</>
	);
};

export default Home;
