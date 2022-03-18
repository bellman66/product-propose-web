import React, {useState} from "react";
import {handleStateById} from "/utils/common";
import {PlusCircleIcon, MinusCircleIcon} from "@heroicons/react/solid";
import {callRegisterWiki} from "/utils/api";
import {getCookie} from "cookies-next";

const Register = () => {

    /*  Example
        "wikiCreateForm": {
            "title": ""
        },
        "priceRecordCreateForm": {
            "originPrice": 0,
                "salePrice": 0,
                "saleWay": {
                    "content1": "",
                    "content2": "",
                    "content3": "",
                    "content4": "",
                    "content5": "",
                    "content6": "",
                    "content7": "",
                    "content8": ""
            }
        },
        "tagGroup": []
    */
    // wikiCreateForm
    const [wikiCreateForm, setWikiCreateForm] = useState({});

    // priceRecordCreateForm
    const [priceRecordCreateForm, setPriceRecordCreateForm] = useState({});
    const [saleWay, setSaleWay] = useState({});

    // tagGroup
    const [tagGroup, setTagGroup] = useState([]);

    const handleAddSaleWay = (e) => {
        e.preventDefault();
        const waySize = Object.keys(saleWay).length;

        if (waySize >= 8) alert("최대 등록 개수는 8개입니다.")
        else {
            setSaleWay(origin => ({
                ...origin,
                ["content" + (waySize+1)] : ""
            }))
        }
    };

    const handleRemoveSaleWay = (e, key) => {
        e.preventDefault();

        let copyOfSaleWay = Object.assign({}, saleWay)
        delete copyOfSaleWay[key];

        setSaleWay(origin => ({
            ...handleSortSaleWay(copyOfSaleWay)
        }));
    };

    const handleSortSaleWay = (aSaleway) => {
        let result = {}

        Object.values(aSaleway).map((value, idx) => {
            result["content" + (idx+1)] = value;
        })
        return result;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Set PriceRecord - SaleWay
        setPriceRecordCreateForm(origin => ({
            ...origin,
            ["saleWay"] : saleWay
        }))

        const header = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${getCookie("accessToken")}`,
            }
        }

        const body = {
            "wikiCreateData" : {
                "wikiCreateForm" : wikiCreateForm,
                "priceRecordCreateForm" : priceRecordCreateForm,
                "tagGroup" : tagGroup
            }
        }

        callRegisterWiki(body,header);
    };

    return (

        <div id="register">
            <label>Output:</label>
            <pre>{JSON.stringify(wikiCreateForm, null, 2)}</pre>
            <pre>{JSON.stringify(priceRecordCreateForm, null, 2)}</pre>
            <pre>{JSON.stringify(saleWay, null, 2)}</pre>
            <pre>{JSON.stringify(tagGroup, null, 2)}</pre>

            <div className="bg-white dark:bg-gray-800">
                <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold"> New 제품 </p>
                            <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                            <div className="rounded relative mt-8 h-48">
                                <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                                    <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" alt className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
                                    <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                                    <div className="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                                            <line x1={16} y1={5} x2={19} y2={8} />
                                        </svg>
                                        <p className="text-xs text-gray-100">Edit Picture</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                                <label htmlFor="title" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    title
                                </label>
                                <input type="text"
                                       id="title"
                                       name="title" required
                                       onChange={e => handleStateById(e, setWikiCreateForm)}
                                       className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                       placeholder="@example" />
                            </div>

                            {/*<div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">*/}
                            {/*    <label htmlFor="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">*/}
                            {/*        About*/}
                            {/*    </label>*/}
                            {/*    <textarea id="about" name="about" required className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder="Let the world know who you are" rows={5} defaultValue={""} />*/}
                            {/*    <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">Character Limit: 200</p>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

                <div className="container mx-auto bg-white dark:bg-gray-800 mt-10 rounded px-4">
                    <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                        <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                            <p className="text-lg text-gray-800 dark:text-gray-100 font-bold"> Start Sale 등록 ( 필수 x ) </p>
                            <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                    <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto pt-4">
                        <div className="container mx-auto">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="originPrice" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    원래 가격
                                </label>
                                <input type="text" id="originPrice" name="originPrice" required
                                       onChange={e => handleStateById(e, setPriceRecordCreateForm)}
                                       className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                            </div>

                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <label htmlFor="salePrice" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">
                                    세일 가격
                                </label>
                                <input type="text" id="salePrice" name="salePrice" required
                                       onChange={e => handleStateById(e, setPriceRecordCreateForm)}
                                       className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400" placeholder />
                            </div>

                            <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                                <div className="flex items-center pb-2">
                                    <label className="text-sm font-bold text-gray-800 dark:text-gray-100">
                                        세일 순서
                                    </label>
                                    <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="ml-2">
                                        <PlusCircleIcon className="w-7 h-7" onClick={handleAddSaleWay}/>
                                    </div>
                                </div>

                                <div id="saleWay" className="flex flex-col">
                                    {
                                        Object.entries(saleWay).map(([key,value], idx) => {
                                            return (
                                                <div className="flex flex-row">
                                                    <input type="text"
                                                           id={key}
                                                           name={key} required
                                                           value={value}
                                                           onChange={e => handleStateById(e, setSaleWay)}
                                                           className="basis-11/12 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400"
                                                           placeholder={"Process " + (idx+1)}/>
                                                    <MinusCircleIcon className="w-5 h-5 basis-1/12 my-3" onClick={e => handleRemoveSaleWay(e, key)}/>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="container mx-auto w-11/12 xl:w-full">
                    <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
                        <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">Cancel</button>
                        <button type="button"
                                onClick={handleSubmit}
                                className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
