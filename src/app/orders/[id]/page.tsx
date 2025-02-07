'use client'
import Link from "next/link"
import { ArrowLeft, Droplet, Truck, MapPin, Calendar } from "lucide-react"
import { useState } from "react"

interface OrderDetail {
  id: string
  status: 'pending' | 'processing' | 'delivered'
  date: string
  items: {
    name: string
    quantity: number
    price: number
  }[]
  delivery: {
    address: string
    date: string
    instructions: string
  }
  total: number
  subtotal: number
  deliveryFee: number
}

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch this from an API
  const [order] = useState<OrderDetail>({
    id: params.id,
    status: 'processing',
    date: '2024-02-07',
    items: [
      {
        name: "Pure Spring Water",
        quantity: 2,
        price: 7.99
      },
      {
        name: "Mineral Enhanced Water",
        quantity: 1,
        price: 9.99
      }
    ],
    delivery: {
      address: "123 Main St, City, State 12345",
      date: "2024-02-10",
      instructions: "Please leave by the front door"
    },
    subtotal: 25.97,
    deliveryFee: 5.00,
    total: 30.97
  })

  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <Link 
              href="/orders" 
              className="text-slate hover:text-ocean-blue transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Orders
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-montserrat font-bold text-ocean-blue uppercase">
              Order #{order.id}
            </h2>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium
              ${order.status === 'pending' ? 'bg-sand-beige text-ocean-blue' : 
                order.status === 'processing' ? 'bg-coastal-teal text-white' : 
                'bg-ocean-blue text-white'}`}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-12">
        {/* Order Details */}
        <div className="md:col-span-8 space-y-6">
          {/* Items */}
          <div className="rounded-lg bg-white/50 backdrop-blur-sm p-6 shadow-premium">
            <h3 className="font-montserrat font-semibold text-ocean-blue mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-md bg-white border border-gray-100">
                  <div className="flex items-center gap-4">
                    <Droplet className="h-8 w-8 text-coastal-teal" />
                    <div>
                      <h4 className="font-medium text-ocean-blue">{item.name}</h4>
                      <p className="text-sm text-slate">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="text-ocean-blue font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Details */}
          <div className="rounded-lg bg-white/50 backdrop-blur-sm p-6 shadow-premium">
            <h3 className="font-montserrat font-semibold text-ocean-blue mb-4">Delivery Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-coastal-teal" />
                <p className="text-slate">{order.delivery.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-coastal-teal" />
                <p className="text-slate">{order.delivery.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-coastal-teal" />
                <p className="text-slate">{order.delivery.instructions}</p>
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
                <p className="text-lg font-semibold text-ocean-blue">${order.subtotal.toFixed(2)}</p>
              </div>
              <div className="border-b border-gray-100 pb-4">
                <p className="text-sm text-slate">Delivery Fee</p>
                <p className="text-lg font-semibold text-ocean-blue">${order.deliveryFee.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-slate">Total</p>
                <p className="text-2xl font-semibold text-ocean-blue">${order.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}