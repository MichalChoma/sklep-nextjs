import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductDetails {
  id: number;
  description: string;
  thumbnailUrl: string;
  title: string;
  rating: number;
  price:number;
  count:number;
}

interface ProductProps {
  data: ProductDetails;
}

type ProductListItem = Pick<ProductDetails, "title" | "thumbnailUrl" | "id" | "rating" | "price" | "count" >;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div className="flex justify-center flex-col max-w-2xl mx-auto">
      <Image
            src={data.thumbnailUrl}
            alt={data.title}
            layout="responsive"
            width={16}
            height={9}
            objectFit="contain"
          />
      <div className="p-4">
        <h2 className="font-bold p-4 text-3xl">{data.title}</h2>
        {data.description}
        <p className="text-blue-500 font-bold">{data.rating}</p>
      </div>
    </div>
  );
};

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <Link href={`/${data.id}`}>
      <a>
        <div className="bg-white w-full h-full flex justify-center flex-col p-4 text-center">
          <Image
            src={data.thumbnailUrl}
            alt={data.title}
            layout="responsive"
            width={16}
            height={9}
            objectFit="contain"
          />
          <h2 className="font-bold p-4 text-2xl">{data.title}</h2>
          <div className="flex justify-between items-center mt-1 font-medium pt-2">
            <p>${data.price}</p>
            <p>{`${data.rating} (${data.count})`}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};
