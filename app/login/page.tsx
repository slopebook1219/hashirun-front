'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        alert('ログイン成功');
        router.push('/dashboard');
      } else {
        alert('ログイン失敗');
      }
    } catch (error) {
      console.error('通信エラー:', error);
      alert('サーバーが起動していないかも');
    }
  };

  return (
    <div>
      <h1>ログイン</h1>
      <input
        placeholder="email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleSubmit}>ログイン</button>
    </div>
  );
}
