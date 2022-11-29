import axios from 'axios'

const URL_LOGIN = "https://matan1902.onrender.com/token/"
const URL_REGISTER = "https://matan1902.onrender.com/register/"
const URL_LOGOUT = "https://matan1902.onrender.com/logout/"

// async(2)
export function signIn(cred) {
    return new Promise((resolve) =>
        axios.post(URL_LOGIN, cred).then((res) => resolve({ data: res.data }))
    );
}

// async(2)
export function signUp(cred) {
    return new Promise((resolve) =>
        axios.post(URL_REGISTER, cred).then((res) => resolve({ data: res.data }))
    );
}

// async(2)
export function signOut(token) {
    console.log(token.token)
    return new Promise((resolve) =>
    axios(URL_LOGOUT, {
        headers: {
            'Authorization': `Bearer ${token.token}`
        }
    }).then((res) => resolve({ data: res.data }))
    );
}
