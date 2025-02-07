'use client'
import Link from "next/link"
import { Droplet, ArrowLeft } from "lucide-react"
import { useState } from "react"

// Define types for our data
interface Product {
  id: number
  name: string
  size: string
  price: number
  description: string
}

interface OrderState {
  products: {
    [key: number]: number // product id -> quantity
  }
  deliveryAddress: string
  deliveryDate: string
  deliveryInstructions: string
}

const DELIVERY_FEE = 5.00
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Pure Spring Water",
    size: "5 Gallon",
    price: 7.99,
    description: "Natural spring water in reusable container"
  },
  {
    id: 2,
    name: "Mineral Enhanced Water",
    size: "5 Gallon",
    price: 9.99,
    description: "Spring water enriched with essential minerals"
  },
  {
    id: 3,
    name: "Alkaline Water",
    size: "5 Gallon",
    price: 11.99,
    description: "pH balanced water for optimal hydration"
  }
]

export default function NewOrderPage() {
  // Initialize state
  const [order, setOrder] = useState<OrderState>({
    products: {},
    deliveryAddress: "",
    deliveryDate: "",
    deliveryInstructions: ""
  })

  // Calculate totals
  const calculateSubtotal = () => {
    return Object.entries(order.products).reduce((total, [productId, quantity]) => {
      const product = PRODUCTS.find(p => p.id === Number(productId))
      return total + (product?.price || 0) * quantity
    }, 0)
  }

  const subtotal = calculateSubtotal()
  const total = subtotal + DELIVERY_FEE

  // Handle quantity changes
  const updateQuantity = (productId: number, delta: number) => {
    const currentQty = order.products[productId] || 0
    const newQty = Math.max(0, currentQty + delta)
    
    setOrder(prev => ({
      ...prev,
      products: {
        ...prev.products,
        [productId]: newQty
      }
    }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Validate order
    if (Object.values(order.products).every(qty => qty === 0)) {
      alert("Please select at least one product")
      return
    }
    if (!order.deliveryAddress) {
      alert("Please enter a delivery address")
      return
    }
    if (!order.deliveryDate) {
      alert("Please select a delivery date")
      return
    }

    // TODO: Submit order to backend
    console.log("Submitting order:", order)
  }

  return (
    <form onSubmit={handleSubmit} className="flex-1 space-y-8 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <Link 
              href="/dashboard" 
              className="text-slate hover:text-ocean-blue transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Link>
          </div>
          <h2 className="text-3xl font-montserrat font-bold text-ocean-blue uppercase">New Order</h2>
          <p className="mt-2 text-slate">Select your water products and delivery preferences</p>
        </div>
      </div>

      {/* Order Form */}
      <div className="grid gap-8 md:grid-cols-12">
        {/* Product Selection */}
        <div className="md:col-span-8 space-y-6">
          <div className="rounded-lg bg-white/50 backdrop-blur-sm p-6 shadow-premium">
            <h3 className="font-montserrat font-semibold text-ocean-blue mb-4">Select Products</h3>
            
            <div className="space-y-4">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 rounded-md bg-white border border-gray-100">
                  <div className="flex items-center gap-4">
                    <Droplet className="h-8 w-8 text-coastal-teal" />
                    <div>
                      <h4 className="font-medium text-ocean-blue">{product.name}</h4>
                      <p className="text-sm text-slate">{product.description}</p>
                      <p className="text-sm font-semibold text-coastal-teal mt-1">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      type="button"
                      onClick={() => updateQuantity(product.id, -1)}
                      className="p-2 rounded-md hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{order.products[product.id] || 0}</span>
                    <button 
                      type="button"
                      onClick={() => updateQuantity(product.id, 1)}
                      className="p-2 rounded-md hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Options */}
          <div className="rounded-lg bg-white/50 backdrop-blur-sm p-6 shadow-premium">
            <h3 className="font-montserrat font-semibold text-ocean-blue mb-4">Delivery Options</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate mb-2">Delivery Address</label>
                <input
                  type="text"
                  placeholder="Enter your delivery address"
                  value={order.deliveryAddress}
                  onChange={(e) => setOrder(prev => ({ ...prev, deliveryAddress: e.target.value }))}
                  className="w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean-blue/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate mb-2">Delivery Date</label>
                <input
                  type="date"
                  value={order.deliveryDate}
                  onChange={(e) => setOrder(prev => ({ ...prev, deliveryDate: e.target.value }))}
                  className="w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean-blue/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate mb-2">Delivery Instructions</label>
                <textarea
                  placeholder="Add any special delivery instructions"
                  value={order.deliveryInstructions}
                  onChange={(e) => setOrder(prev => ({ ...prev, deliveryInstructions: e.target.value }))}
                  className="w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean-blue/20"
                  rows={3}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-4">
          <div className="rounded-lg bg-white/50 backdrop-blur-sm p-6 shadow-premium sticky top-6">
            <h3 className="font-montserrat font-semibold text-ocean-blue mb-4">Order Summary</h3>
            
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-sm text-slate">Subtotal</p>
                <p className="text-lg font-semibold text-ocean-blue">${subtotal.toFixed(2)}</p>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <p className="text-sm text-slate">Delivery Fee</p>
                <p className="text-lg font-semibold text-ocean-blue">${DELIVERY_FEE.toFixed(2)}</p>
              </div>

              <div>
                <p className="text-sm text-slate">Total</p>
                <p className="text-2xl font-semibold text-ocean-blue">${total.toFixed(2)}</p>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-ocean-blue px-4 py-3 text-sm font-montserrat font-semibold text-soft-white shadow-premium hover:bg-coastal-teal transition-all duration-300 mt-6"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}