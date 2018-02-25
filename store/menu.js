export const state = () => ({
  show: false
})

export const mutations = {
  trigger (state) {
    state.show = !state.show
  },
  close (state) {
    state.show = false
  },
  open (state) {
    state.show = true
  }
}

export const actions = {
  reload (state) {
    location.reload()
  }
}
