import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gemechu - Software Engineer',
  description: 'Full-stack developer focused on scalable backend systems and smooth digital experiences.',
  keywords: ['Software Engineer', 'Full-stack Developer', 'React', 'Node.js', 'Next.js', 'Flutter'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}


