'use client'
import { useSideBarStore } from '../store/carSideBar'
import { useCatItemsStore } from '../store/carItems'

const Car = () => {
  const isCarSideBarOpen = useSideBarStore((state) => state.isCarSideBarOpen)
  const closeCarSideBar = useSideBarStore((state) => state.closeCarSideBar)
  const items = useCatItemsStore((state) => state.items)
  const removeItems = useCatItemsStore((state) => state.removeItems)
  return (
    <div
      className={`${
        isCarSideBarOpen &&
        'fixed z-30  w-full h-screen bg-black bg-opacity-50 transition-all duration-700'
      }`}
      onClick={() => closeCarSideBar()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-96  h-full transition-all duration-500 z-50 ${
          isCarSideBarOpen ? 'right-0' : '-right-full'
        }`}
      >
        {/* Orders */}
        <div className="flex flex-col h-full gap-2 p-8 pt-16 text-gray-300 lg:pt-8">
          <div className="flex flex-row items-center justify-between pb-4">
            <h3 className="text-xl font-bold">CART</h3>
            <button
              onClick={() => closeCarSideBar()}
              className=" p-1 box-content text-gray-300 bg-[#262837] rounded-full "
            >
              ✖️
            </button>
          </div>
          {/* Car */}
          <span className="flex w-full my-4 bg-gray-200 border-t"></span>
          {/* Products */}
          <div className="h-full overflow-y-auto ">
            {/* Product */}
            {items.map((item, index) => (
              <div key={index} className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/* Product description */}
                  <div className="flex items-center col-span-4 gap-3">
                    <img src={item.image} className="object-cover w-10 h-10" />
                    <div>
                      <h5 className="text-sm">{item.title}</h5>
                      <p className="text-xs text-gray-500">${item.quantity}</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>{item.quantity}</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>${item.price}</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid items-center grid-cols-6">
                  <form className="col-span-5">
                    <input
                      type="text"
                      className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none"
                      placeholder="Order note..."
                    />
                  </form>
                  <div>
                    <button
                      onClick={() => removeItems(item.id)}
                      className="p-2 border border-red-500 rounded-lg"
                    >
                      {/* <RiDeleteBin6Line className="text-red-500" /> */}
                      🗑️
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submit payment */}
          <div className="bg-[#262837] rounded-md w-full bottom-0 left-0 p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">Discount</span>
              <span>$0</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400">Subtotal</span>
              <span>$201.03</span>
            </div>
            <div>
              <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                Continue to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Car
