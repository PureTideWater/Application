import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-10 bg-soft-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-ocean-blue font-montserrat uppercase mb-6">
            Pure Tide Water Delivery
          </h1>
          <p className="text-lg leading-8 text-slate font-opensans">
            Premium water delivery service for your home and office
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/orders"
              className="rounded-md bg-ocean-blue px-6 py-3 text-sm font-semibold text-soft-white shadow-premium hover:bg-coastal-teal transition-all duration-300 font-montserrat"
            >
              View Orders
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}