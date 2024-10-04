import React from 'react'
import Card from '../components/Card';

const Products = async () => {
  const data = await fetch('https://dummyjson.com/products')
  const respone = await data.json()
  console.log(respone);

  return (
    <>
      <h1 className='flex justify-center mt-10 uppercase font-bold text-4xl'>All Products</h1>
      <section className='mx-auto container mt-[100px]'>

        <div className="flex flex-wrap justify-between -m-4">
          {respone.products.map((item, index) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Products
