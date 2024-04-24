import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Item {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

interface State {
  items: Item[]
  addItem: (item: any) => void
  addItems: (item: any) => void
  removeItems: (index: number) => void
  updateItems: (idProduct: number, quantity: number) => void
}

export const useCatItemsStore = create<State>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item: any) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id)
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              )
            }
          } else {
            return { items: [...state.items, item] }
          }
        }),
      addItems: (item: any) =>
        set((state) => ({ items: [...state.items, item] })),
      updateItems: (idProduct: number, quantity: number) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === idProduct
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        })),
      removeItems: (idProduct: number) =>
        set((state) => ({
          items: state.items.filter((value) => value.id !== idProduct)
        }))
    }),
    {
      name: 'car-items'
    }
  )
)
