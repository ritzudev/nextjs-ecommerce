import Car from '@/components/Car'
import Header from '@/components/Header'
import Items from '@/components/Items'
import React from 'react'
import { getServerSession } from 'next-auth'
import SliderMain from '@/components/SliderMain'

export default async function Page() {
  const session = await getServerSession()
  return (
    <div className="bg-[#262837] w-full min-h-screen">
      {/*
    -- Sidebar  MUY BONITO QUE POR AHORA NO VOY A USAR--
     <Sidebar showMenu={showMenu} /> 
     */}
      <Car />
      <main className="pb-10">
        {/* Header */}
        <Header
          name={session?.user?.name || ''}
          image={session?.user?.image || ''}
        />

        <div className="py-[70px]">
          <SliderMain />
        </div>
        {/* Items */}

        <Items />
      </main>
    </div>
  )
}
