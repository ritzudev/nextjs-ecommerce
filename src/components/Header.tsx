/* import { RiSearch2Line } from 'react-icons/ri' */
'use client'
import { useSideBarStore } from '../store/carSideBar'
import { useCatItemsStore } from '../store/carItems'
import { signOut } from 'next-auth/react'

interface UserProps {
  name: string
  image: string
  email?: string
}

const Header = ({ name, image, email }: UserProps) => {
  const openCarSideBar = useSideBarStore((state) => state.openCarSideBar)
  const items = useCatItemsStore((state) => state.items)
  const addItems = useCatItemsStore((state) => state.addItems)

  return (
    <header className="">
      {/* Title and search */}
      <div className=" bg-[#1F1D2B] z-50 top-0 fixed flex w-full left-0 gap-4 mb-6 flex-row justify-between md:items-center py-4 px-10 md:px-20 rounded-md">
        <div className="flex gap-4 items-center">
          <img className="size-10 rounded-md" src={image} alt="" />
          <h1 className="text-2xl text-gray-300">{name}</h1>
          <button
            onClick={() =>
              signOut({
                callbackUrl: '/login'
              })
            }
            className="size-10 hover:bg-red-400 border rounded-md text-2xl"
          >
            🚲
          </button>
        </div>

        <div className="inline-flex gap-2">
          <form className="hidden lg:block">
            <div className="relative flex items-center w-full">
              {/* <RiSearch2Line className="absolute text-gray-300 -translate-y-1/2 left-3 top-1/2" /> */}
              🔎
              <input
                type="text"
                className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                placeholder="Search"
              />
            </div>
          </form>
          <button
            onClick={() => openCarSideBar()}
            className="px-2 border rounded-md hover:bg-gray-700"
          >
            items: {items.length} 🛒
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
