export default function PickDate(props) {

    const styles = {
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
    }

    return (
        <>
            <div style={styles.pickDateWrapper}>
                {props.showingDates && props.showingDates.map(showingDate => (
                    <span
                        style={styles.days}
                        key={showingDate.getTime()}>
                        {showingDate.toShortDayOfWeekString()}
                    </span>
                ))}
            </div>
        </>
    );
}