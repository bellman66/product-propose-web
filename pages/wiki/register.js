import React, {useState} from "react";
import {handleStateById} from "/utils/common";
import {PlusCircleIcon, MinusCircleIcon} from "@heroicons/react/solid";
import {createRegisterWiki} from "/utils/api";
import {useRouter} from "next/router";

const Register = () => {

    const router = useRouter()

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

    // Image
    const [images, setImages] = useState([])
    // 미리보기 이미지
    const [previewImages, setPreviewImages] = useState([])

    const handleUploadImage = (e) => {
        e.preventDefault();
        const files = Array.from(e.target.files);

        // Set Preview Images
        files.forEach((file) => {
            addPreviewImage(file);
        })

        // Set Images
        setImages((origin) => [...origin, ...files]);
    };

    const addPreviewImage = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setPreviewImages((origin) => [...origin, reader.result])
        }
    }

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

        const wikiData = {
            "wikiCreateData" : {
                "wikiCreateForm" : wikiCreateForm,
                "priceRecordCreateForm" : priceRecordCreateForm,
                "tagGroup" : tagGroup
            }
        }

        // Create Form Data
        const imageData = new FormData();
        images.forEach(image => imageData.append("images", image))

        createRegisterWiki(wikiData, imageData)
    };

    return (

        <div id="register">
            {/*<label>Output:</label>*/}
            {/*<pre>{JSON.stringify(wikiCreateForm, null, 2)}</pre>*/}
            {/*<pre>{JSON.stringify(priceRecordCreateForm, null, 2)}</pre>*/}
            {/*<pre>{JSON.stringify(saleWay, null, 2)}</pre>*/}
            {/*<pre>{JSON.stringify(tagGroup, null, 2)}</pre>*/}

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
                            <div className="items-center bg-grey-lighter px-4 py-4">
                                <label
                                    className="flex flex-row items-center px-3 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:text-white">
                                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"/>
                                    </svg>
                                    <span className="pl-2 text-base leading-normal">사진 업로드</span>
                                    <input type='file' multiple className="hidden" onChange={handleUploadImage}/>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                            <div className="py-5">
                                {   previewImages.length === 0 ?
                                    (
                                        <div id="empty-cover-art"
                                             className="rounded sm:w-full md:w-48 md:h-48 py-16 text-center opacity-50 md:border-solid md:border-2 md:border-gray-400">
                                            <svg className="mx-auto feather feather-image" xmlns="http://www.w3.org/2000/svg"
                                                 width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                <polyline points="21 15 16 10 5 21"></polyline>
                                            </svg>
                                            <div className="py-4">
                                                Add Product Image
                                            </div>
                                        </div>
                                    ) :
                                    (
                                        <div id="images-container" className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            {
                                                previewImages.map((value) => {
                                                    return (
                                                        <div className="h-64 mb-3 w-full p-3 rounded-lh bg-cover bg-center"
                                                             style={{backgroundImage: 'url(' + value + ')'}}>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                }
                            </div>

                            <div className="mt-8 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
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
