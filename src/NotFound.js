export const NotFound = () => {

	return (
		<>
			<h1>404 Not Found</h1>
			<p>Oops! We couldn't find the thing you're asking for. Sorry about that!</p>
			<p>Maybe try one of these instead?</p>
			<ul>
				<li><a href="/">Find a Movie</a></li>
				<li><a href="/login">Login</a></li>
				<li><a href="/account">Register</a></li>
			</ul>
		</>

	);
}