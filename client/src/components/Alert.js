import React from 'react';
import { ReactSession } from 'react-client-session';

export default function Alert() {

  const msg = ReactSession.get("message");
  setTimeout(() => {
    sessionStorage.clear();
  }, 2500); 

  return (
    <div>{msg}</div>
  )
}

