import { store } from '../store/store';
import { actions } from '../store/actions';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

export function Login(){

	function login(e){
		e.preventDefault();
		console.log("Login");
		store.dispatch(actions.login(
			e.target['email'].value,
			e.target['password'].value ));
	}

  const [showPassword, setShowPassword] = useState(false);

	const styles = {
    
  };
	return (
		<section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
  <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
    <h1 className="mdl-card__title-text">Login</h1>
  </div>
  <div className="mdl-card__supporting-text">
    <div>
      <p>First time user? <a href="/account">Register</a></p>
    </div>
    <form onSubmit={login}>

      <div style={styles.inputDivs}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
          <input id="email" className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="email">Email</label>
        </div>
      </div>

      <div style={styles.inputDivs}>
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={styles.inputDivs}>
          <input id="password" type = { showPassword ? "password" : "text"} className="mdl-textfield__input" />
          <label className="mdl-textfield__label" htmlFor="email">Password</label>
        </div>
      </div>

      <div>
        <input type="submit" value="Login" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} />
        <button onClick = {() => setShowPassword(!showPassword)} className=" showHidePasswordBtn mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton}>{showPassword ? "Show Password" : "Hide Password"}</button>  
      </div>
   
    </form>
  </div>
</section>
	);
}