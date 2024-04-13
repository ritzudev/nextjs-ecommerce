import { create } from 'zustand'

interface State {
  isCarSideBarOpen: boolean
  openCarSideBar: () => void
  closeCarSideBar: () => void
}

export const useSideBarStore = create<State>()((set) => ({
  isCarSideBarOpen: false,
  openCarSideBar: () => set({ isCarSideBarOpen: true }),
  closeCarSideBar: () => set({ isCarSideBarOpen: false })
}))
