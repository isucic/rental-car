import Header from './modules/header/header'
import Footer from './modules/footer/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-rent-grey">
      <Header />
      <Footer />
    </main>
  )
}
