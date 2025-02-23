import { cn } from "@/lib/utils";

const NavLink = ({ href, className = "text-white", children }: { href: string; className?: string; children: React.ReactNode }) => (
  <a
    href={href}
    className={cn("hover:text-primary-light/80 transition-colors duration-200 text-xs xl:text-sm", className)}
  >
    {children}
  </a>
);

export default NavLink
