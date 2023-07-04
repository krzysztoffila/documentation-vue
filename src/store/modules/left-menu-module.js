export default {
    namespaced: true,
    state: {
        showAside: false
    },
    mutations: {
        toggleShowAside(state) {
            state.showAside = !state.showAside;
        },
    },
}