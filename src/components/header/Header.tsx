import InputForm from "../inputForm/InputForm";
import Nav from "../nav/Nav";

const Header = () => {
	return (
		<div className='bg-slate-600 text-white'>
			<Nav />
			<header className='pt-28'>
				<div className='pb-8'>
					<h1 className='text-6xl'>Cocktails & Getränke!</h1>
					<p>Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>
				</div>

				<InputForm />
			</header>
		</div>
	);
};

export default Header;
