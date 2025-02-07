'use client'
import Link from "next/link"
import { Package, Truck, Users, DollarSign } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-montserrat font-bold text-ocean-blue uppercase">Dashboard</h2>
        <Link
          href="/orders/new"
          className="rounded-md bg-ocean-blue px-4 py-2 text-sm font-montserrat font-semibold text-soft-white shadow-premium hover:bg-coastal-teal transition-all duration-300"
        >
          Place New Order
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-white/50 backdrop-blur-sm p-6 shadow-premium hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-4">
            <Package className="h-8 w-8 text-coastal-teal" />
            <div>
              <p className="text-sm font-medium text-slate">Active Orders</p>
              <h3 className="text-2xl font-semibold text-ocean-blue">12</h3>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white/50 backdrop-blur-sm p-6 shadow-premium hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-4">
            <Truck className="h-8 w-8 text-coastal-teal" />
            <div>
              <p className="text-sm font-medium text-slate">Pending Deliveries</p>
              <h3 className="text-2xl font-semibold text-ocean-blue">4</h3>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white/50 backdrop-blur-sm p-6 shadow-premium hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-coastal-teal" />
            <div>
              <p className="text-sm font-medium text-slate">Total Customers</p>
              <h3 className="text-2xl font-semibold text-ocean-blue">248</h3>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white/50 backdrop-blur-sm p-6 shadow-premium hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-4">
            <DollarSign className="h-8 w-8 text-coastal-teal" />
            <div>
              <p className="text-sm font-medium text-slate">Revenue (MTD)</p>
              <h3 className="text-2xl font-semibold text-ocean-blue">$5,240</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="rounded-lg bg-white/50 backdrop-blur-sm p-6 shadow-premium">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-montserrat font-semibold text-ocean-blue">Recent Orders</h3>
          <Link href="/orders" className="text-sm text-coastal-teal hover:text-ocean-blue">
            View all
          </Link>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-md bg-white">
              <div>
                <p className="font-medium text-ocean-blue">Order #1234{i}</p>
                <p className="text-sm text-slate">5 Gallon Water x 2</p>
              </div>
              <span className="text-sm text-coastal-teal">In Progress</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
