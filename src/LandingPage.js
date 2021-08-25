import { store } from './store/store'

export function LandingPage(){


	console.log("Landing Page");
	const styles = {
		poster: {
			height: 500,
		}
	};
	const currentDate = new Date();


	const state = store.getState();
	const films = state.films;
	const showings = state.showings;
	const film = films[1] || {};
	console.log("showing" + JSON.stringify(showings));
	console.log("Film "+ JSON.stringify(film));
	return (
	<>
	  <section style={styles.header} className="mdl-card mdl-shadow--2dp">
	    <div className="mdl-card__title">
	      <span className="mdl-card__title-text">Showings for {currentDate.toShowingDateString()}</span>
	    </div>
	  </section>
	  <section style={styles.filmsWrapper}>
	    <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
	      <div style={styles.innerWrapper}>
	        <div style={styles.posterDiv}>
	          <img src='/img/posters/1.jpg' alt="" style={styles.poster} />
	        </div>
	        <div style={styles.textDiv}>
	          <p style={styles.title}>{film.title}</p>
	          <p style={styles.runtimeP}>{film.runtime}</p>
	          <p style={styles.tagline}>{film.tagline}</p>
	        </div>
	      </div>
	      <div style={styles.showings}>
	      	{showings.filter(showing => showing.film_id == film.id).map(filteredShowing => (
	      		<li>{filteredShowing.showing_time.toShowingDateString()}</li>
	      	))}
	      </div>
	    </section>
	  </section>
	</>

	);
}