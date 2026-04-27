'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// 1. 必ず「export default」で関数を定義する
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    // localStorageからトークンを取得
    const token = localStorage.getItem('token');

    if (!token) {
      // トークンがなければログインへ
      router.push('/login');
    } else {
      // トークンがあればチェック完了
      setIsAuthChecked(true);
    }
  }, [router]);

  // チェック中は何も出さない（またはローディング画面を出す）
  if (!isAuthChecked) {
    return null;
  }

  // 2. 最終的に「children」を返さないとエラーになります
  return <>{children}</>;
}
