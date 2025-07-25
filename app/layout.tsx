import './styles/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-gray-200'>
        {children}
      </body>
    </html>
  );
}
