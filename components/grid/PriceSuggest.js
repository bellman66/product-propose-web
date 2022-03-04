import React,{useState} from "react";

// Swr Infinite
import useSWRInfinite from 'swr/infinite'

// Components
import PriceCard from "../card/PriceCard";

const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null // 끝에 도달
    return `/read?page=${pageIndex}&size=30`                    // SWR 키
}

function PriceSuggestGrid() {

    const pagenation = useState({
        "page": 0,
        "size": 30
    })

    const { data, size, setSize } = useSWRInfinite(getKey, fetcher)

    return (
        <>
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            </div>
        </>
    )
}

export default PriceSuggestGrid;
