import React,{useState} from "react";

// Components
import PriceCard from "../card/PriceCard";
import useWikiSimpleData from "/data/wiki/Info";

const PAGE_SIZE = 30

function PriceSuggestGrid() {

    const { wikiGroup,
        isLoadingMore,
        isEmpty,
        isReachingEnd,
        size,
        setSize} = useWikiSimpleData(PAGE_SIZE)

    const MoreBtn = () => {
        return (
            <button
                disabled={isLoadingMore || isReachingEnd}
                hidden={isReachingEnd}
                onClick={() => {setSize(size+1);}}>

                {isLoadingMore ? "로딩중..." : "더 보기"}
            </button>
        )
    }

    if(isEmpty) {
        return (
            (<p> 현재 컨텐츠가 없습니다 </p>)
        )
    }
    return (
        <>
            <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                현재 페이지 : { size }
                <br/>

                {wikiGroup.map((wiki) => {
                    return (
                        <div>
                            <p> - {wiki.title} </p>
                            <PriceCard/>
                        </div>
                    )
                })}
                <MoreBtn/>
            </div>
        </>
    )
}

export default PriceSuggestGrid;
