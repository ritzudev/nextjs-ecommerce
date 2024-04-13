import Car from '@/components/Car'
import Header from '@/components/Header'
import Items from '@/components/Items'
import React from 'react'
import { getServerSession } from 'next-auth'

export default async function Page() {
  const session = await getServerSession()
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      {/*
    -- Sidebar  MUY BONITO QUE POR AHORA NO VOY A USAR--
     <Sidebar showMenu={showMenu} /> 
     */}
      <Car />
      <main className="pb-20 lg:pl-32">
        <div className="p-4 md:p-8">
          {/* Header */}
          <Header
            name={session?.user?.name || ''}
            image={session?.user?.image || ''}
          />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
          </div>
          {/* Items */}

          <Items />
        </div>
      </main>
    </div>
  )
}
