// src/app/page.tsx
import Link from 'next/link';

export default function Page() {
  return (
    // min-h-screen: 画面全体の高さ / bg-gray-50: 薄いグレーの背景
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
          走らん（run）??
        </h1>
        <p className="text-gray-600 mb-8">
          あなたの走行記録を管理する、<br />
          ランナーのためのバックエンド連携アプリ。
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition duration-100"
          >
            新規登録を始める
          </Link>

          <Link
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            すでにアカウントをお持ちの方はこちら
          </Link>
        </div>
      </div>

      <footer className="mt-12 text-gray-400 text-sm">
        &copy; 2024 Hashirun App. Built with Spring Boot & Next.js
      </footer>
    </main>
  );
}
