import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import { Link } from 'react-router-dom';
import { OAuth } from '../components/OAuth/OAuth';

export default function SignUp() {
  const [inputEmail, setInputEmail] = React.useState('');
  const [inputName, setInputName] = React.useState('');
  const [inputPassword, setInputPassword] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <section>
      <div className="form">
        <h1>Sign Up</h1>
        <div className="form__container">
          <div className="form__img">
            <img src="./login.png" alt="login img" />
          </div>
          <form action="#" className="form__user">
            <div className="form__input">
              <input
                type="text"
                placeholder="Full name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
            </div>
            <div className="form__input">
              <input
                type="email"
                placeholder="Email adress"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </div>
            <div className="form__input">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
              <span className="form__input-eye" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
            </div>
            <div className="form__info">
              <p>
                Have an account?
                <Link to={'/sign-in'} className="login">
                  Login
                </Link>
              </p>
              <p>
                <Link to={'/forgot-password'} className="forgot">
                  Forgot password?
                </Link>
              </p>
            </div>
            <div className="form__bttns">
              <button type="submit" className="form__bttn form__bttn-submit">
                SIGN UP
              </button>
              <div className="form__bttns-sep">OR</div>
              <OAuth />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
