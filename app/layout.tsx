export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <h1>This is the root page</h1>
            {children}
            </body>
      </html>
    )
  }