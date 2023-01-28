export default function Navbar(props) {
	return(
	<nav id="nav" className="bg-black text-white p-2 my-2 text-2xl font-bold text-center rounded">
		{props.heading}
		</nav>
		
	)}
Navbar.defaultProps = {
	heading: "HEADING"
}
