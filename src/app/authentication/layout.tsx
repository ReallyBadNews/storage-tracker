export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <h1>hello from authlayout</h1>
      {children}
    </div>
  )
}
