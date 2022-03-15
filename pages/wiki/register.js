import React,{useState} from "react";
import {handleStateById} from "/utils/common";

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

    return (
        <>
            <div className="bg-gray-200 dark:bg-gray-900 flex items-center justify-center" style={{ fontFamily: '"Lato", sans-serif' }}>
                <label>Output:</label>
                    <pre>{JSON.stringify(wikiCreateForm, null, 2)}</pre>
                    <pre>{JSON.stringify(priceRecordCreateForm, null, 2)}</pre>
                    <pre>{JSON.stringify(tagGroup, null, 2)}</pre>


                <div className="flex md:flex-row flex-col items-center py-8 px-4">

                    <div className="flex flex-col md:mr-16">
                        <label htmlFor="title" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                            title
                        </label>

                        <div className="relative">
                            <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <input id="title"
                                   className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow"
                                   onChange={e => handleStateById(e, setWikiCreateForm)}
                                   placeholder="Placeholder" />
                        </div>
                    </div>

                    <div className="flex flex-col md:mr-16 md:py-0 py-4">
                        <label htmlFor="originPrice" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                            originPrice
                        </label>
                        <div className="relative">
                            <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r dark:border-gray-700 h-full cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <input id="originPrice"
                                   className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow"
                                   onChange={e => handleById(e, setPriceRecordCreateForm)}
                                   placeholder="Placeholder" />
                        </div>
                    </div>

                    <div className="flex flex-col md:py-0 py-4">
                        <label htmlFor="email3" className="text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <div className="absolute text-white flex items-center px-4 border-r dark:border-gray-700 h-full bg-indigo-700 dark:bg-indigo-600 rounded-l cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <rect x={3} y={5} width={18} height={14} rx={2} />
                                    <polyline points="3 7 12 13 21 7" />
                                </svg>
                            </div>
                            <input id="email3" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-16 text-sm border-gray-300 rounded border shadow" placeholder="Placeholder" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
