import Header from '@/components/layout/Header'
import './globals.css'
import WagmiProvider from '@/components/wagmi/WagmiProvider'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] })

export const metadata = {
  title: 'blockchain messager',
  description: 'Blockchain messager is a web application that seeks to be able to send messages on Ethereum-based blockchains using text converted to utf8 in the data field of the transaction.',
}

const bodyCss = `${roboto.className} dark:text-white text-slate-800 bg-slate-100 dark:bg-slate-600`

const setInitialTheme = `
function getUserPreference() {
  if(window.localStorage.getItem('theme')) {
    return window.localStorage.getItem('theme')
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? 'dark' 
    : 'light'
}
document.documentElement.classList.add(getUserPreference());
`;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bodyCss}>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <WagmiProvider>
          <Header />
          {children}
        </WagmiProvider>
      </body>
    </html>
  )
}
