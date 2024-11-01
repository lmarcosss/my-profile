export function LogoLink({ children, href }) {
  return (
    <link href={href} className="bg-transparent border-none">
      {children}
    </link>
  )
}
