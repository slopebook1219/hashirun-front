'use client';

import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.text();
    console.log(data);
    alert(data);
  };

  return (
    <div>
      <h1>ログイン</h1>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />

      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
}
