import * as React from "react"
import { cn } from "@/lib/utils"

const SidebarContext = React.createContext({
  expanded: true,
  toggleSidebar: () => {},
})

export function useSidebar() {
  return React.useContext(SidebarContext)
}

export function Sidebar({ children, className }) {
  const [expanded, setExpanded] = React.useState(true)
  const toggleSidebar = React.useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setExpanded((prev) => !prev)
  }, [])

  return (
    <SidebarContext.Provider value={{ expanded, toggleSidebar }}>
      <aside
        className={cn(
          "relative flex h-screen flex-col border-r border-white/20 bg-black transition-all duration-300 ease-in-out overflow-hidden",
          expanded ? "w-[300px]" : "w-[80px]",
          className
        )}
      >
        {children}
      </aside>
    </SidebarContext.Provider>
  )
}

export function SidebarHeader({ className, children }) {
  const { expanded } = useSidebar()
  return (
    <div className={cn(
      "flex h-16 items-center border-b border-white/20 transition-all duration-200 bg-gradient-to-r from-black to-gray-900", 
      expanded ? "px-6 justify-start gap-2" : "px-4 justify-center",
      className
    )}>
      {children}
    </div>
  )
}

export function SidebarContent({ className, children }) {
  const { expanded } = useSidebar()
  return (
    <div className={cn(
      "flex-1 overflow-hidden bg-gradient-to-b from-black to-gray-900",
      expanded ? "overflow-y-auto" : "overflow-hidden",
      className
    )}>
      {children}
    </div>
  )
}

export function SidebarFooter({ className, children }) {
  return <div className={cn("mt-auto border-t border-white/20 bg-black", className)}>{children}</div>
}

export function SidebarMenu({ className, children }) {
  return <div className={cn("space-y-2 p-3", className)}>{children}</div>
}

export function SidebarMenuItem({ className, children }) {
  return <div className={cn("", className)}>{children}</div>
}

export function SidebarMenuButton({ className, children, ...props }) {
  const { expanded } = useSidebar()
  const icon = React.Children.toArray(children).find(child => 
    React.isValidElement(child) && 
    child.type !== 'span' && 
    child.props.className?.includes('shrink-0')
  )
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center rounded-lg text-base text-gray-300 transition-colors hover:bg-white/10 hover:text-white",
        expanded ? "px-4 py-3 justify-start" : "p-3 justify-center",
        className
      )}
      {...props}
    >
      {expanded ? children : icon}
    </button>
  )
}

export function SidebarMenuSub({ className, children }) {
  const { expanded } = useSidebar()
  if (!expanded) return null;
  return (
    <div className={cn(
      "space-y-1 overflow-hidden transition-all duration-200 ml-4",
      className
    )}>
      {children}
    </div>
  )
}

export function SidebarMenuSubItem({ className, children }) {
  return <div className={cn("", className)}>{children}</div>
}

export function SidebarMenuSubButton({ className, children, ...props }) {
  const { expanded } = useSidebar()
  if (!expanded) return null;
  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center rounded-lg px-4 py-3 text-base text-gray-300 transition-colors hover:bg-white/10 hover:text-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function SidebarTrigger({ className, children, ...props }) {
  const { expanded, toggleSidebar } = useSidebar()
  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className={cn(
        "absolute -right-3 top-6 z-20 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-black text-white shadow-md transition-all duration-200 hover:border-white/40",
        expanded ? "" : "rotate-180",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
} 