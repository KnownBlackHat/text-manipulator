import {useState} from 'react';

export default function Textarea(props){
	
	const [text,settext]=useState('')
	const change_func = (e)=>{	settext(e.target.value)	}
	return(
		<>
	<div className="justify-center items-center text-center">
		<textarea value={text} onChange={change_func} className="bg-blue-500 inline-flex h-[50vh] rounded w-[80%] text-white rounded text-center" />
	</div>
    	<div className='text-center space-x-6 p-3'>
			<span className='font-bold'>Status: </span> 
			<span> Words: {text.split(" ").filter(word=>{ return word.length > 0 }).length}</span><span> Length: {text.length} </span>
		</div>
		<div className='space-x-8 mx-[25%] flex  justify-between'>
			<button className="bg-green-500 p-2 rounded text-white" onClick={()=>{settext(text.toUpperCase())}}>UPPERCASE</button>
			<button className="bg-green-500 p-2 rounded text-white" onClick={()=>{settext(text.toLowerCase())}}>lowercase</button>
			<button className="bg-red-500 p-2 rounded text-white" onClick={()=>{settext("")}}>Clear</button>
		</div>
		<div className='text-center m-4 p-4'><span className='text-3xl'>Preview: </span> <div className='m-4 bg-gray-500 text-white font-medium text-xs rounded-lg container overflow-y-auto h-[7em]'>{text}</div></div>
		</>
)}
