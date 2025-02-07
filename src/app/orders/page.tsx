'use client'
import { useState } from 'react'
import Link from "next/link"
import { Droplet, Plus } from "lucide-react"

interface Order {
  id: string
  date: string
  status: 'pending' | 'processing' | 'delivered'
  items: { name: string; quantity: number }[]
  total: number
}

export default function OrdersPage() {
  const [orders] = useState<Order[]>([
    {
      id: 'ORD-001',
      date: '2024-02-07',
      status: 'pending',
      items: [{ name: 'Pure Spring Water', quantity: 2 }],
      total: 20.98
    }
  ])

  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-montserrat font-bold text-ocean-blue uppercase">Orders</h2>
        <Link
          href="/orders/new"
          className="flex items-center gap-2 rounded-md bg-ocean-blue px-4 py-2 text-sm font-montserrat font-semibold text-soft-white shadow-premium hover:bg-coastal-teal transition-all duration-300"
        >
          <Plus className="h-4 w-4" />
          New Order
        </Link>
      </div>

      <div className="rounded-lg bg-white/50 backdrop-blur-sm shadow-premium">
        <div className="p-4">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="pb-4 text-left font-montserrat text-slate">Order ID</th>
                <th className="pb-4 text-left font-montserrat text-slate">Date</th>
                <th className="pb-4 text-left font-montserrat text-slate">Items</th>
                <th className="pb-4 text-left font-montserrat text-slate">Total</th>
                <th className="pb-4 text-left font-montserrat text-slate">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 last:border-0">
                  <td className="py-4">
                    <Link href={`/orders/${order.id}`} className="text-ocean-blue hover:text-coastal-teal">
                      {order.id}
                    </Link>
                  </td>
                  <td className="py-4 text-slate">{order.date}</td>
                  <td className="py-4">
                    {order.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Droplet className="h-4 w-4 text-coastal-teal" />
                        <span className="text-slate">{item.quantity}x {item.name}</span>
                      </div>
                    ))}
                  </td>
                  <td className="py-4 text-slate">${order.total.toFixed(2)}</td>
                  <td className="py-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium
                      ${order.status === 'pending' ? 'bg-sand-beige text-ocean-blue' : 
                        order.status === 'processing' ? 'bg-coastal-teal text-white' : 
                        'bg-ocean-blue text-white'}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
