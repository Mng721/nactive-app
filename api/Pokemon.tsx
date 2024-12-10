import axios from "axios"
export const fetchPkmns = (url: string) => {
    return axios.get(url);
}

export const fetchStats = async (_: string, url: string) => {
    const res = await fetch(url);
    return res.json();
}