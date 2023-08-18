import getCookie from '@/helpers/get-cookie';
import setCookie from '@/helpers/set-cookie.js'
export default {
    namespaced: true,
    state: {
        token: null,
        user: {},
        password: "",
    },
    getters: {
        isLogged(state) {
            return Object.keys(state.user).length > 0 && state.token !== null;
        },
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setUser(state, user) {
            state.user = user;
        },
        setPassword(state, password) {
            state.password = password;
        }
    },
    actions: {
        register({
            commit,
            state
        }, registerData) {
            commit("setToken", registerData.token)
            commit("setUser", registerData.user)
            setCookie("token", state.token, 1000000)
            setCookie("user", JSON.stringify(state.user), 1000000)
        },
        autoLogin({
            commit
        }) {
            const cookieToken = getCookie("token")
            const cookieUser = JSON.parse(getCookie("user"))
            if (cookieToken) {
                commit("setToken", cookieToken)
            }
            if (cookieUser) {
                commit("setUser", cookieUser)
            }
        },
        login({
            commit,
            state
        }, payload) {
            const {
                token,
                user
            } = payload;
            commit("setToken", token);
            commit("setUser", user);
            setCookie("token", token, 1000000);
            setCookie("user", JSON.stringify(user), 1000000);
        }
    }
}