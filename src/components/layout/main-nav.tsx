import Link from "next/link"
import { Droplet } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-6">
      <Link 
        href="/dashboard"
        className="flex items-center space-x-2"
      >
        <Droplet className="h-6 w-6 text-ocean-blue" />
        <span className="font-montserrat font-bold text-ocean-blue uppercase">Pure Tide</span>
      </Link>
      <div className="hidden md:flex items-center space-x-6">
        {[
          ['Overview', '/dashboard'],
          ['Orders', '/orders'],
          ['Inventory', '/inventory'],
          ['Settings', '/settings'],
        ].map(([title, href]) => (
          <Link
            key={title}
            href={href}
            className="text-sm font-montserrat text-slate hover:text-ocean-blue transition-colors"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  )
}
