'use client';

import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // 1. localStorageからトークンを消去！
    localStorage.removeItem('token');

    // 2. ログイン画面へ強制送還
    // （layout.tsxの門番が動くので、自動的に追い出されます）
    router.push('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>秘密のダッシュボード</h1>
      <p>ログイン中のユーザーだけが見れる特別な場所です。</p>

      <button
        onClick={handleLogout}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        ログアウト
      </button>
    </div>
  );
}
