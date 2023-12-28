import { Inter } from 'next/font/google'
import Products from './dashboard/products'
import LoginPage from './auth/login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-between ${inter.className}`}
    >
      <LoginPage />
    </main>
  )
}
