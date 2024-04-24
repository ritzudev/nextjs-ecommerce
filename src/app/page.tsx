import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()
  if (session) return redirect('/home')
  return redirect('/login')
  /* return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hola mian
    </main>
  ) */
}
