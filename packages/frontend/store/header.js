export function state() {
    return {
        title: ''
    }
}
  
export const mutations = {
    setTitle(state, title) {
        state.title = title
    }
}
  
export const getters = {
    getTitle: (state) => state.title
}