import { Ghost } from "react-kawaii";

export const NotFound = () => {
	return (
		<>
			<div className=' flex flex-col items-center justify-center text-9xl text-amber-300  px-9 '>
				<h1>Ohhhh Nooooo</h1>
				<div className='flex items-center'>
					<Ghost size={400} mood='ko' color='#fccb7e' />
					<Ghost size={200} mood='shocked' color='#fccb7e' />
					<Ghost size={400} mood='ko' color='#fccb7e' />
				</div>

				<p className='text-center'>hier ist was schiefgelaufen!!</p>
			</div>
		</>
	);
};
