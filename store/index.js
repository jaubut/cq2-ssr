export const state = () => ({
  locales: ['en', 'fr'],
  locale: 'fr'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}