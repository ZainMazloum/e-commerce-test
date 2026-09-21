import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
const CartIsEmpty = () => {
  return (
 <div className="text-center py-20">
            <ShoppingCart size={48} className="mx-auto text-border mb-4" />
            <p className="text-text-secondary text-lg font-medium mb-2">
              Your cart is empty
            </p>
            <Link 
              href="#" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors duration-200"
            >
              Browse Products
            </Link>
          </div>
  )
}

export default CartIsEmpty
