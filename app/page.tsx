import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import FeaturedDealsSection from '@/components/product/FeaturedDealsSection'
import {getOnSaleProducts} from "@/lib/products";
const page = async () => {
const productsOnSale = await getOnSaleProducts();
  return (
    <div className='min-h-screen bg-background'>
      <HeroSection />
      <FeaturedDealsSection products={productsOnSale} />
    </div>
  )
}

export default page
