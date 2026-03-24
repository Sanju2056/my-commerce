import Banner from "../HomePageComponents/Banner/Banner"
import BlogContainer from "../HomePageComponents/BlogContainer/BlogContainer"
import FAQ from "../HomePageComponents/FAQ/Faq"
import FeatureProduct from "../HomePageComponents/FeaturedProduct/FeatureProduct"
import Hero from "../HomePageComponents/Hero/Hero"
import MostPopularProduct from "../HomePageComponents/MostPopularProduct/MostPopularProduct"
import RangeofCategories from "../HomePageComponents/RangeOfCategories/RangeofCategories"
// import ProductDetailPage from "../ProductDetailPage/ProductDetailPage"

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero/>
      <div className="flex flex-col gap-10 ">
        <FeatureProduct/>
        <RangeofCategories/>
        <MostPopularProduct/>
        <Banner/>
        <BlogContainer/>
        <FAQ/>
      </div>
      {/* <ProductDetailPage/> */}
    </div>
  )
}

export default HomePage