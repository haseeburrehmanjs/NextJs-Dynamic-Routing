import SingalProductCard from '@/app/components/SingalProductCard';
import React from 'react'

const SingalProduct = (props) => {
    console.log(props.params.id);

    return (
        <>
            {/* {props.params.id} */}
            <section className='mx-auto container'>
                <SingalProductCard id={props.params.id}/>
            </section>
        </>
    )
}

export default SingalProduct
