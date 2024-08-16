"use client"

import Image from "next/image";
import { useState } from "react";

const images = [
    {
        id: 1,
        url: "https://krasavica.info/uploads/posts/2022-02/1645144779_54-krasavica-info-p-modnaya-letnyaya-odezhda-devushka-krasivo-57.jpg",
    },
    {
        id: 2,
        url: "https://krasavica.info/uploads/posts/2024-02/1707418909_krasavica-info-p-krasivie-russkie-devushki-modeli-krasivo-z-9.jpg",
    },
    {
        id: 3,
        url: "https://krasavica.info/uploads/posts/2024-02/1707418727_krasavica-info-p-samie-krasivie-modeli-devushki-pinterest-z-27.jpg",
    },
    {
        id: 4,
        url: "https://krasavica.info/uploads/posts/2023-08/1692776193_krasavica-info-p-devushka-s-ulibkoi-na-litse-zhenskie-pinte-1.jpg",
    },
];



const ProductImages = () => {

    const [index, setIndex] = useState(0);

    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image
                    src={images[index].url}
                    alt=""
                    fill
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="flex justify-between gap-4 mt-8">
                {images.map((img, i) => (
                    <div
                        className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
                        key={img.id}
                        onClick={() => setIndex(i)}
                    >
                        <Image
                            src={img.url}
                            alt=""
                            fill
                            sizes="30vw"
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;