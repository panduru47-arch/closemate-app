import './globals.css'

export const metadata = {
  title: 'Closemate AI - Autonomous Sales Agent',
  description: 'AI-powered sales assistant for real estate, clinics, IT companies, and service providers',
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
