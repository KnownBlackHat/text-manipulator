import { useState } from 'react';

export default function Textarea(props) {

	const [text, settext] = useState('')
	const [dark_text, set_dark_text] = useState("Enable Dark Mode")
	const change_func = (e) => { settext(e.target.value) }
	return (
		<>
			<div className="justify-center items-center text-center">
				<textarea value={text} onChange={change_func} className="bg-blue-500 inline-flex h-[50vh] rounded w-[80%] text-white rounded text-center" />
			</div>
			<div className='text-center space-x-6 p-3'>
				<span className='font-bold'>Status: </span>
				<span> Words: {text.split(" ").filter((word)=>{return word.length > 0}).length}</span><span> Length: {text.length} </span>
			</div>
			<div className='container space-x-8 mx-8 flex  justify-between'>
				<button className="bg-green-500 p-2 rounded text-white" onClick={() => { settext(text.toUpperCase()) }}>UPPERCASE</button>
				<button className="bg-green-500 p-2 rounded text-white" onClick={() => { settext(text.toLowerCase()) }}>lowercase</button>
				<button className="bg-green-500 p-2 rounded text-white" onClick={() => { settext(text.split(/[ ]+/).join(" ").trim()) }}>Remove White Space</button>
				<button className="bg-red-500 p-2 rounded text-white" onClick={() => { settext("") }}>Clear</button>
				<button className="p-2 bg-yellow-500 rounded text-white" onClick={() => { document.querySelector("body").classList.toggle("bg-black"); if (dark_text === "Enable Dark Mode") { set_dark_text("Disable Dark Mode") } else { set_dark_text("Enable Dark Mode") } }}>	{dark_text}	</button>

			</div>
			<div className='text-center m-4 p-4'><span className='text-3xl'>Preview: </span> <div className='m-4 bg-gray-500 text-white font-medium text-xs rounded-lg container overflow-y-auto h-[7em]'>{text}</div></div>
		</>
	)
}
