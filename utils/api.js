import useSWR from "swr"
import axios from "axios"
import { getCookie } from 'cookies-next'
import useSWRInfinite from "swr/infinite";

// Api Version
const VERSION = "/v1"

// Default Fetcher
const getFetcher = (headers) =>
                   (url) => axios.get(url, headers)
                                 .then(res => {if (res.status === 200 && res.data !== undefined) {return res.data}})
const postFetcher = (body, headers) =>
                    (url) => axios.post(url, body, headers)
                                  .then(res => {if (res.status === 200 && res.data !== undefined) {return res.data}})

const getApiUrl = (url) => { return VERSION + url; }

// SWR =================================================================================================================

// 추가적으로 제작할시 해당 모형으로 제작. ( Default는 Servercheck )
// Custom 제작시 Fetcher를 제작해서 사용
export default function useApiServerCheck() {
    return useSWR(getApiUrl(`/server-check`), getFetcher());
}

export function useApiUserInfoByToken() {
    const headerVal = {
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${getCookie("accessToken")}`,
        }
    }
    return useSWR(getApiUrl(`/account/info`), getFetcher(headerVal));
}

export function useApiWikiSimpleData(pageSize) {
    return useSWRInfinite(
        (pageIndex) =>
            getApiUrl(`/wiki/read?page=${pageIndex}&size=${pageSize}`),
            getFetcher());
}

// Normal ==============================================================================================================

export async function callRegisterWiki(body, header) {
    await axios
        .post(getApiUrl(`/wiki/register`), body, header)
        .then(
            res => {
                if (res.status === 200 && res.data !== undefined) {
                    console.log(res.data)
                    return res.data
                }
            }
        )
        .catch(
            err => {
                console.log(err)
                alert("error occur")
            }
        )
}
