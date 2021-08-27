import seatImage from './bundledImages/seat.png';
import { store } from './store/store';
import { actions } from './store/actions';
import { useEffect } from 'react';

export const PickSeats = () => {

	/*let table = { id: 0, table_number: 0, x: 1, y: 1, seats: [] };
	let seat = { id: 0, seat_number: 0, price: 10.75 };*/
	let currentShowing = { id: 0, film_id: 0, theater_id: 0, showing_time: new Date() };
	let currentFilm = { title: "A Cool Movie" };
	let currentTheater = { id: 0, name: "Theater #1" };
	const state = store.getState();
	const films = state.films;
	const film = films[1] || {};
	const theatres = state.theaters;
	const showings = state.showings;
	console.log("Theatre:" + JSON.stringify(theatres));
	console.log("Showings:" + JSON.stringify(showings));
	const showingId = 1;
	if (state.showings && state.showings.length) {
		currentShowing = state.showings.find(showing => showing.id === +showingId);
		currentFilm = state.films.find(film => film.id === currentShowing.film_id);
		currentTheater = state.theaters.find(theater =>
			theater.id === currentShowing.theater_id) || {};
	}
	const tables = currentTheater && currentTheater.tables;

	function reserveSeat(seat) {
		console.log(seat)
		store.dispatch(actions.addSeatToCart(seat, currentShowing));
	}

	useEffect(() => {
		store.dispatch(actions.fetchReservationsForShowing(showingId));
	}, [showingId]);

	function getTableWidth(seats) {
		return { width: seats.length * 40 + "px" }
	}
	console.log("PickSeats");
	const styles = {
		seatWrapper: {
			margin: "5px",
		},
		seatItself: {
			backgroundImage: `url(${seatImage})`,
			backgroundSize: "100% 100%",
			width: "30px",
			height: "30px",
			fontWeight: "bold",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: "10px 10px 0px 0px",
		},
		header: {
			width: "95vw",
			margin: "10px auto",
			padding: "10px",
		},
		tablesSection: {
			paddingBottom: '40px',
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
		},
		wrapper: {
			margin: "20px",
		},
		tableWrapper: {
			display: 'flex',
			justifyContent: "center",
			alignItems: "center",
		},
		tableItself: {
			height: "40px",
			backgroundColor: "blue",
			borderRadius: "20px",
			color: "white",
			fontSize: "20px",
			display: 'flex',
			justifyContent: "center",
			alignItems: "center",
		},
		seatsWrapper: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		}
	};
	return (


		<>
			<section style={styles.header} className="mdl-card mdl-shadow--2dp">
				<div className="mdl-card__title mdl-color--primary mdl-color-text--white">
					<h1 className="mdl-card__title-text">Where would you like to sit?</h1>
				</div>
				<p>Watching {film.title} in THEATER_NAME on {currentShowing.showing_time.toShowingDateString()} at {currentShowing.showing_time.toShowingTimeString()}</p>
				<section style={styles.tablesSection}>

					<p>List of tables goes here</p>
					{tables && tables.map(table => (
						<div style={styles.wrapper}>
							<div style={styles.tableWrapper}>
								<div style={{ ...styles.tableItself, ...getTableWidth(table.seats) }}>{table.table_number}</div>
							</div>
							<div style={styles.seatsWrapper}>
								{table.seats && table.seats.map(seat => (
									<div style={styles.seatWrapper}>
										<div style={{ ...styles.seatItself }} onClick={(seat) => reserveSeat(seat)}>
											{seat.seat_number}
										</div>
									</div>
								))}

							</div>
						</div>

					))}


				</section>
				<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} >Check out</button>
			</section>
		</>
	);
}