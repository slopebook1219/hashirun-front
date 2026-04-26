'use client'; // ブラウザで動くプログラムであることを宣言

import { useState } from 'react';

export default function Page() {
  // 1. 入力内容を保存する「変数」を用意
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // 2. ボタンを押した時の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 画面のリロードを防ぐ

    try {
      // バックエンド（Spring Boot）にデータを送る
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // 入力内容をJSON形式に変換
      });

      if (response.ok) {
        alert('登録に成功しました！MySQLを確認してみてね。');
      } else {
        alert('エラーが発生しました。');
      }
    } catch (error) {
      console.error('通信エラー:', error);
      alert('サーバーが起動していないかもしれません。');
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>新規ユーザー登録</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}
      >
        <input
          type="text"
          placeholder="ユーザー名"
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="メールアドレス"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="パスワード"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <button type="submit">登録する</button>
      </form>
    </div>
  );
}
