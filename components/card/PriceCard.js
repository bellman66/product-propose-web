import Image from "next/image";

function PriceCard() {

    const urlLoader = ({ src, width, quality }) => {
        return `https://content.suggesty-app.com/google/Content/Products/${src}?w=${width}&q=${quality || 75}`
    }

    return (
        <>
            <div className="bg-white dark:bg-gray-800 rounded shadow px-6 py-4 flex flex-col">
                <div className="">
                    <p> Special Cloth </p>
                </div>

                <div className="pt-5 flex">
                    <div className="bg-indigo-700 rounded">
                        <Image
                               loader={urlLoader}
                               src="16F0BELJ01SH212-thumbnail.jpg"
                               width={50}
                               height={50}
                               fill="none"/>
                    </div>

                    <div className="ml-6">
                        <h3 className="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl">2,330 3,400</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5">Avg Sales</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceCard;
