import useSWR from "swr"
import axios from "axios"
import { getCookie } from 'cookies-next'
import useSWRInfinite from "swr/infinite";

// Api Url
const LIVE_API_URL = 'http://'
const TEST_API_URL = 'http://localhost:8080'
const CURRENT_API_URL = TEST_API_URL

// Default Fetcher
const getFetcher = (headers) =>
                   (url) => axios.get(url, headers)
                                 .then(res => {if (res.status === 200 && res.data !== undefined) {return res.data}})
const postFetcher = (body, headers) =>
                    (url) => axios.post(url, body, headers)
                                  .then(res => {if (res.status === 200 && res.data !== undefined) {return res.data}})

// 추가적으로 제작할시 해당 모형으로 제작. ( Default는 Servercheck )
// Custom 제작시 Fetcher를 제작해서 사용
export default function useApiServerCheck() {
    return useSWR("/server-check", getFetcher());
}

export function useApiUserInfoByToken() {
    const headerVal = {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookie("accessToken")}`,
        }
    }
    return useSWR("/account/info", getFetcher(headerVal));
}

export function useApiWikiSimpleData(pageSize) {
    return useSWRInfinite(
        (pageIndex) => `/wiki/read?page=${pageIndex}&size=${pageSize}` ,
        getFetcher());
}
