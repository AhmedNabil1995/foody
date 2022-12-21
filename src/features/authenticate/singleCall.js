import axios from "axios"
let url = process.env.REACT_APP_SERVER_URL;

export const getUser = async (user, id, setUser) => {
    let res = await axios.get(`${url}users/${id}`, {
        headers: { token: user.token }
    })
    // console.log(res.data)

    setUser(res.data);
}