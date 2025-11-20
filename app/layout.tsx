import './globals.css'

export const metadata = {
  title: 'Closemate App - AI Sales Agent',
  description: 'Your autonomous sales assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
