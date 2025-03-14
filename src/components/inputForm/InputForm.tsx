import { useState } from "react";
import { Link } from "react-router-dom";

const InputForm = () => {
	const [searchValue, setSearchValue] = useState<string>("");

	return (
		<div className='px-5 '>
			<input
				type='text'
				placeholder='type something'
				className='bg-slate-200 text-black px-3 py-2 rounded-xl'
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
			/>
			<Link to={`/${searchValue}`} className=''>
				<button className='cursor-pointer hover:bg-pink-400 hover:ease-in-out bg-blue-500 px-6 py-2 rounded-xl text-black'>
					Search
				</button>
			</Link>
		</div>
	);
};

export default InputForm;
