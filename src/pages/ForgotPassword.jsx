import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [inputEmail, setInputEmail] = React.useState('');

  return (
    <section>
      <div className="form">
        <h1>Forgot Password</h1>
        <div className="form__container">
          <div className="form__img">
            <img src="./login.png" alt="login img" />
          </div>
          <form action="#" className="form__user">
            <div className="form__input">
              <input
                type="email"
                placeholder="Email adress"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </div>
            <div className="form__info">
              <p>
                Don't have an account?
                <Link to={'/sign-up'} className="login">
                  Register
                </Link>
              </p>
              <p>
                <Link to={'/sign-in'} className="forgot">
                  Sign in instead
                </Link>
              </p>
            </div>
            <div className="form__bttns">
              <button type="submit" className="form__bttn form__bttn-submit">
                SEND RESET A PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
