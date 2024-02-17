export default function Layout({ children }: any) {
  return (
    <div>
      <h3 className="text-xl">Inner Nav Item</h3>
      {children}
    </div>
  )
}
