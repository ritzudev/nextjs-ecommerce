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
  addItems: (item: any) => void
  removeItems: (index: number) => void
}

export const useCatItemsStore = create<State>()(
  persist(
    (set) => ({
      items: [],
      addItems: (item: any) =>
        set((state) => ({ items: [...state.items, item] })),
      removeItems: (index: number) =>
        set((state) => ({ items: state.items.filter((_, i) => i !== index) }))
    }),
    {
      name: 'car-items'
    }
  )
)
