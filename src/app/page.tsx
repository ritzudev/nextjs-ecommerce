import { redirect } from 'next/navigation'

export default function Home() {
  return redirect('/login')
  /* return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hola mian
    </main>
  ) */
}
