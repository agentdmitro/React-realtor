import React from 'react';
import { FcGoogle } from 'react-icons/fc';

export const OAuth = () => {
  return (
    <button className="form__bttn form__bttn-continue">
      <span>
        <FcGoogle />
      </span>
      Continue with Google
    </button>
  );
};
