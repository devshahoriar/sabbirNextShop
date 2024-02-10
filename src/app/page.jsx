import BottomStatus from '@/components/shared/BottomStatus'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import HomeBanner from '@/components/shared/HomeBanner'
import ProductsConteiner from '@/components/shared/ProductsConteiner'
import { Separator } from '@/components/ui/Separator'
import connectDB from '@/db/connectDB'

const page = () => {
  connectDB()
  return (
    <main>
      <Header />
      <HomeBanner />
      <section className="container mt-5">
        <h1 className="text-2xl pb-5">All Products</h1>
        <Separator />
        <ProductsConteiner />
        <Separator />
        <BottomStatus />
      </section>
      <Footer />
    </main>
  )
}

export default page
