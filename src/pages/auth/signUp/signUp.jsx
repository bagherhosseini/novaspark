import React from 'react';

import './signUp.scss';
import { useSignUp } from '../../../features';

export default function SignUp() {
  const { user, isDisabled, isValid, handleChange, handleSignUp } = useSignUp();

  return (
    <form onSubmit={handleSignUp}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user.name}
          onChange={(event) => { handleChange(event) }}
          style={{ outlineColor: isValid.name ? 'black' : 'red' }}
        />
      </div>
      <div>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={user.userName}
          onChange={(event) => { handleChange(event) }}
          style={{ outlineColor: isValid.userName ? 'black' : 'red' }}
        />
      </div>
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
