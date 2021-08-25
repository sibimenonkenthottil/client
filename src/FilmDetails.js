import { store } from './store/store'

export const FilmDetails = () => {
	console.log("FilmDetails");
	const styles = {
		poster : {
			width: 500,
			height: 500
		}
	};
	const state = store.getState();
	const films = state.films;
	const film = films[1] || {};
	const showing = state.showing;
	return (
		<>
		  <div style={{ ...styles.container }} className='mdl-card mdl-shadow--2dp'>
		    <div style={{}}>
		      <h1>{film.title}</h1>
		    </div>
		    <div style={{ /*display: 'flex'*/ }}>
		      <div style={{ flex: '1 1 30%' }}>
		        <img src={film.poster_path} alt="" style={styles.poster} />
		      </div>
		      <div style={{ flex: '1 1 70%' }}>
		        <h1>{film.title}</h1>
		        <h2>{film.tagline}</h2>
		        <p>{film.overview}</p>
		        <p>Viewer's ratings: <span>{film.vote_average}</span> / <span>{film.vote_count}</span></p>
		        <p>Released: {film.release_date}</p>
		        <p>Runtime minutes</p>
		        <a href="HOMEPAGE" target="movie_site">{film.homepage}</a>
		        Pick dates will go here		        
		      </div>
		    </div>
		  </div>
		</>
	);
}