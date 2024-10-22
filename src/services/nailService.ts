import axios from "axios"

export async function getAllNailServices() {
    const url = `${process.env.NEXT_PUBLIC_API_URL}nail-service/all`

    const axiosConfig = {
        headers: {
            "content-type": "application/json",
        }
    }
    return axios.get(url, axiosConfig).then((res)=> {
        return res.data
    }).catch((e)=> {
        return e
    })
}