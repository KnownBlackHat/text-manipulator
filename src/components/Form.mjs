import { useState } from 'react';

export default function Textarea(props) {

	const [text, settext] = useState('')
	const [dark_text, set_dark_text] = useState("Enable Dark Mode")
	const change_func = (e) => { settext(e.target.value) }
	return (
		<>
			<div className="justify-center items-center text-center">
				<textarea id="textarea" value={text} onChange={change_func} className="bg-blue-500 inline-flex h-[50vh] rounded w-[80%] text-white rounded text-center" />
			</div>
			<div id="status" className='text-center space-x-6 p-3'>
				<span className='font-bold'>Status: </span>
				<span> Words: {text.split(" ").filter((word) => { return word.length > 0 }).length}</span><span> Length: {text.length} </span>
			</div>
			<div className='overflow-auto space-x-8 mx-4 flex  justify-between'>
				<button disabled={text.length===0} className="bg-green-500 p-2 rounded text-white" onClick={() => { settext(text.toUpperCase());props.alert("green","Text Transformed to UpperCase") }}>UPPERCASE</button>

				<button disabled={text.length===0} className="bg-green-500 p-2 rounded text-white" onClick={() => { settext(text.toLowerCase());props.alert("green","Text Transformed to LowerCase") }}>lowercase</button>
				
				<button disabled={text.length===0} className="bg-green-500 p-2 rounded text-white" onClick={() => { settext(text.split(/[ ]+/).join(" ").trim());props.alert("green","White Space Removed") }}>Remove White Space</button>
				
				<button disabled={text.length===0} id="copy" className="bg-green-500 p-2 rounded text-white" onClick={() => { let txtarea = document.querySelector("#textarea"); navigator.clipboard.writeText(txtarea.value); document.querySelector("#copy").innerText = "Copied!"; setTimeout(() => { document.querySelector("#copy").innerText = "Copy" }, 1000);props.alert("green","Text Copied") }}>Copy</button>
				
				<button disabled={text.length===0} className="bg-red-500 p-2 rounded text-white" onClick={() => { settext("");props.alert("red","Text Deleted") }}>Clear</button>
				
				<button className="p-2 bg-yellow-500 rounded text-white" onClick={() => { document.querySelector("body").classList.toggle("bg-black"); document.querySelector("#nav").classList.toggle("bg-gray-500"); document.querySelector("#preview").classList.toggle("text-white"); document.querySelector("#status").classList.toggle("text-white");(dark_text === "Enable Dark Mode"? props.alert("green","Dark Mode Enabled"):props.alert("red","Dark Mode Disabled"));(dark_text === "Enable Dark Mode"? set_dark_text("Disable Dark Mode") : set_dark_text("Enable Dark Mode"));  }}>	{dark_text}	</button>

			</div>
			<div className='text-center m-4 p-4'><span id="preview" className='text-3xl'>Preview: </span> <div className='m-4 bg-gray-500 text-white font-medium text-xs rounded-lg container overflow-y-auto h-[7em] p-4'>{text.length > 0 ? text : "Enter text to preview it here"}</div></div>
		</>
	)
}
