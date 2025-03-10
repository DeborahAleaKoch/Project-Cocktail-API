import React, { useRef } from "react";

const InputForm = () => {
	const inputValueRef = useRef<HTMLInputElement>(null);

	//hier kommt noch useContext hin

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const input = inputValueRef.current?.value || "";

		// setSearchValue({}) - hier noch funktion
	};

	return (
		<>
			<form onSubmit={handleSubmit} className='flex gap-2'>
				<input
					type='text'
					placeholder='type something'
					className='bg-slate-200 text-black px-3 py-2 rounded-xl'
				/>
				<button
					type='submit'
					className='bg-blue-500 px-4 py-2 rounded-xl text-black'
				>
					Search
				</button>
			</form>
		</>
	);
};

export default InputForm;
