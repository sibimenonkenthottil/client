import { store } from './store/store'

export function LandingPage() {


	console.log("Landing Page");
	const styles = {
		poster: {
			maxHeight: '95%',
			objectFit: 'contain'
		},
		header: {
			width: "95vw",
			margin: "10px auto",
			padding: "10px",
		},
		filmsWrapper: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		wrapper: {
			width: '300px',
			margin: '30px',
			cursor: 'pointer',
		},
		innerWrapper: {
			display: 'flex',
			flexDirection: 'row',
		},
		poster: {
			maxWidth: '95%',
			objectFit: 'contain',
		},
		posterDiv: {
			flex: '1 1 25%',
			padding: "5px",
		},
		textDiv: {
			flex: '1 1 25%',
			padding: "10px 5px 10px 5px",
		},
		title: {
			fontSize: '1.75rem',
			fontWeight: '900',
			textTransform: 'uppercase',
			margin: '2px',
		},
		tagline: {
			margin: '2px',
			lineHeight: '1em',
		},
		runtimeP: {
			fontSize: "0.75rem",
			margin: '2px',
		},
		pickDateWrapper: {
			backgroundColor: 'rgba(0,0,0,0.1)',
			padding: '1em',
		},
		days: {
			color: 'rgba(0,0,0,0.75)',
			fontSize: '1.2em',
			padding: '1em',
			cursor: 'pointer',
		}
	};
	const currentDate = new Date();


	const state = store.getState();
	const films = state.films;
	const showings = state.showings;
	let showingDates = Date.getArrayOfDays(7);
	console.log("showing" + JSON.stringify(showings));
	console.log("Films" + JSON.stringify(films));
	return (
		<>
			<section style={styles.header} className="mdl-card mdl-shadow--2dp">
				<div className="mdl-card__title">
					<span className="mdl-card__title-text">Showings for {currentDate.toShowingDateString()}</span>
				</div>
			</section>
			{films.map(film => (

				<section key={film.id} style={styles.filmsWrapper}>
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
							<div style={styles.pickDateWrapper}>
								{showingDates.map(showingDate => (
									<span
										style={styles.days}
										key={showingDate.getTime()}>
										{showingDate.toShortDayOfWeekString()}
									</span>
								))}
							</div>
						</div>
					</section>
				</section>





			))}

		</>

	);
}