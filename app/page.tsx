import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import FeaturedDealsSection from '@/components/product/FeaturedDealsSection'
const page = () => {
  return (
<div className='min-h-screen bg-background'>
<HeroSection />
<FeaturedDealsSection />
</div>
  )
}

export default page
