import { InferGetStaticPropsType } from 'next'
import { ProductListItem } from '../components/Product'
import React from 'react'
import Header from '../components/Header'
import ProductLayout from '../components/ProductLayout'

// komponent reactowy, dostaje propsy z getStaticProps, ale tylko wtedy gdy jest to oddzielna najwyzsza strona (krok 2)
const Products = ({data} : InferGetStaticPropsType<typeof getStaticProps>) => { //ctrl + spacja ts podpowiedzi

  return (
    <>
    <Header />
    <ProductLayout>
        {data.map((product) => (
            <li key={product.id} className="shadow-xl border-2">
            <ProductListItem data={{
                id:product.id,
                rating:product.rating.rate,
                price:product.price,
                count:product.rating.count,
                thumbnailUrl: product.image,
                title: product.title,
            }}/>
            </li>
        ))}
    </ProductLayout>
    </>
  )

}


// przed budowa strony (krok 1) ssg, docelowo tej funkcji nie bedzie w kodzie
export const getStaticProps = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/`)
    const data: StoreApiResponse[] = await res.json();

    return {
        props: {
            data, //to bedzie przekazane do Products
        }
    }
}

export default Products

interface StoreApiResponse {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number;
    }
}