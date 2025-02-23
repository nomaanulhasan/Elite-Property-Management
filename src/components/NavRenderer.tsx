import { navList } from "@/data"
import { cn } from "@/lib/utils"
import NavLink from "./NavLink"

const NavRenderer = ({ isScrolled = false }) => {
  return (
    navList.map((nav) => {
      if (nav.url === "home") {
        return (<NavLink key={nav.url} href={`#${nav.url}`} className="text-primary-light">
          <span className="uppercase">{nav.label}</span>
        </NavLink>)
      }
      return (
        <NavLink key={nav.url} href={`#${nav.url}`} className={cn(isScrolled ? "text-text" : "text-white")}>
          <span className="uppercase">{nav.label}</span>
        </NavLink>
      )
    })
  )
}

export default NavRenderer
