import Image from "next/image"
import Link from "next/link"


const ProductList = () => {
    return (
        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://krasavica.info/uploads/posts/2022-02/1645144779_54-krasavica-info-p-modnaya-letnyaya-odezhda-devushka-krasivo-57.jpg"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://krasavica.info/uploads/posts/2022-02/1645144779_54-krasavica-info-p-modnaya-letnyaya-odezhda-devushka-krasivo-57.jpg"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://krasavica.info/uploads/posts/2022-02/1645144779_54-krasavica-info-p-modnaya-letnyaya-odezhda-devushka-krasivo-57.jpg"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://krasavica.info/uploads/posts/2022-02/1645144779_54-krasavica-info-p-modnaya-letnyaya-odezhda-devushka-krasivo-57.jpg"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://krasavica.info/uploads/posts/2022-02/1645144779_54-krasavica-info-p-modnaya-letnyaya-odezhda-devushka-krasivo-57.jpg"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://krasavica.info/uploads/posts/2022-02/1645144779_54-krasavica-info-p-modnaya-letnyaya-odezhda-devushka-krasivo-57.jpg"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>
            <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
                <div className="relative w-full h-80">
                    <Image
                        src="https://krasavica.info/uploads/posts/2022-02/1645144779_54-krasavica-info-p-modnaya-letnyaya-odezhda-devushka-krasivo-57.jpg"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    <Image
                        src="https://krasavica.info/uploads/posts/2022-02/1645144779_54-krasavica-info-p-modnaya-letnyaya-odezhda-devushka-krasivo-57.jpg"
                        alt=""
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Product Name</span>
                    <span className="font-semibold">$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList
