import React from 'react';

import './signIn.scss';
import { useSignIn } from '../../../features';

export default function SignIn() {
  const { user, isDisabled, isValid, handleChange, handleSignIn } = useSignIn();

  return (
    <form onSubmit={handleSignIn}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={user.email}
          onChange={(event) => { handleChange(event) }}
          style={{ outlineColor: isValid.email ? 'black' : 'red' }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={(event) => { handleChange(event) }}
          style={{ outlineColor: isValid.password ? 'black' : 'red' }}
        />
      </div>
      <button type="submit" disabled={isDisabled}>Sign In</button>
    </form>
  )
}
