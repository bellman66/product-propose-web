// API CALL
import {useApiWikiSimpleData} from "/utils/api";

const DEFAULT_PAGE_SIZE = 30

export default function useWikiSimpleData(aPageSize) {
    // Swr
    const pageSize = aPageSize ? aPageSize : DEFAULT_PAGE_SIZE
    const { data, error, isValidating, mutate, size, setSize } = useApiWikiSimpleData(pageSize)

    // Setting Data
    const wikiGroup = data ? [].concat(...data) : [];

    const isLoadingInitialData = !data && !error;
    const isLoadingMore = isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0] ?.length === 0;
    const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < pageSize);
    const isRefreshing = isValidating && data && data.length === size;

    return {
        wikiGroup,
        isLoadingMore,
        isEmpty,
        isReachingEnd,
        isRefreshing,
        size,
        setSize
    };
}
