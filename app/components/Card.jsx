import Link from 'next/link'
import React from 'react'

const Card = ({ item }) => {
    // console.log(item);
    const { title, description, id, thumbnail, category, price } = item

    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md" bis_skin_checked={1}>
                <a className="block relative h-48 rounded overflow-hidden">
                    <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={thumbnail}
                    />
                </a>
                <div className="mt-4" bis_skin_checked={1}>
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                        {title}
                    </h2>
                    <p className="mt-1">${price}</p>
                    <button type="button" class="text-white bg-blue-700 mt-3 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link href={`products/${id}`}>Read More</Link></button>
                </div>
            </div>
        </>
    )
}

export default Card
