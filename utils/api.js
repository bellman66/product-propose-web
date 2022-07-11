import useSWR from "swr"
import axios from "axios"
import { getCookie } from 'cookies-next'
import useSWRInfinite from "swr/infinite"
import {cloneDeep} from "lodash";

// Api Version
const VERSION = "/v1"
const getApiUrl = (url) => { return VERSION + url; }

// Default Fetcher
const getFetcher = (headers) =>
                   (url) => axios.get(url, headers)
                                 .then(res => {if (res.status === 200 && res.data !== undefined) {return res.data}})
const postFetcher = (body, headers) =>
                    (url) => axios.post(url, body, headers)
                                  .then(res => {if (res.status === 200 && res.data !== undefined) {return res.data}})

// Get Data
const getContentData = (response) => {
    if (response.status !== 200 || response.data === undefined)
        throw new Error("Not Found Data")

    return response.data
}

// Insert Auth - accessToken
const insertAccessToken = (header) => {
    let copy = cloneDeep(header)
    copy.headers["Authorization"] = `Bearer ${getCookie("accessToken")}`;
    return copy;
}

// Get Default Header
const DEFAULT_JSON_HEADER = {
    headers: {
        "Content-type": "application/json"
    }
}

const DEFAULT_MULTIPART_HEADER = {
    headers: {
        "Content-type": 'application/x-www-form-urlencoded'
    }
}

// Get Default Alert
const getErrorAlertDefault = (msg = "진행에 실패했습니다.") => {
    return () => alert(msg)
}

// SWR =================================================================================================================

// 추가적으로 제작할시 해당 모형으로 제작. ( Default는 Servercheck )
// Custom 제작시 Fetcher를 제작해서 사용
export default function useApiServerCheck() {
    return useSWR(getApiUrl(`/server-check`), getFetcher());
}

export function useApiUserInfoByToken() {
    const headerVal = insertAccessToken(DEFAULT_JSON_HEADER)
    return useSWR(getApiUrl(`/account/info`), getFetcher(headerVal));
}

export function useApiWikiSimpleData(pageSize) {
    return useSWRInfinite(
        (pageIndex) =>
            getApiUrl(`/wiki/read?page=${pageIndex}&size=${pageSize}`),
            getFetcher());
}

// Business ==============================================================================================================

export async function createRegisterWiki(wikiBody, imageBody) {
    const multipartAuthHeader = insertAccessToken(DEFAULT_MULTIPART_HEADER)

    // Process Register Wiki
    const data = await callRegisterWiki(wikiBody)

    // Process Upload Image
    const wikiId = data.result
    await callUploadImage(wikiId, imageBody)
}

// Call ==============================================================================================================

async function callRegisterWiki(body,
                                header = insertAccessToken(DEFAULT_JSON_HEADER),
                                error = getErrorAlertDefault("물픔 등록에 실패했습니다.")) {
    return await axios
        .post(getApiUrl("/wiki/register"), body, header)
        .then(getContentData)
        .catch(error)
}

async function callUploadImage(wikiId, body,
                               header = insertAccessToken(DEFAULT_MULTIPART_HEADER),
                               error = getErrorAlertDefault("이미지 등록에 실패했습니다.")) {
   // await axios
   //     .post(getApiUrl("/wiki/" + wikiId + "/update/image"), body, header)
   //     .then(getContentData)
   //     .catch(error)

    await axios({
            method: 'post',
            url: getApiUrl("/wiki/" + wikiId + "/update/image"),
            data : body,
            headers: {
                "Content-type": 'multipart/form-data'
            }
        })
        .then(getContentData)
        .catch(error)
}
