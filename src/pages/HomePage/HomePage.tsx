import Banner from "../HomePageComponents/Banner/Banner"
import FeatureProduct from "../HomePageComponents/FeaturedProduct/FeatureProduct"
import Hero from "../HomePageComponents/Hero/Hero"
import MostPopularProduct from "../HomePageComponents/MostPopularProduct/MostPopularProduct"
import RangeofCategories from "../HomePageComponents/RangeOfCategories/RangeofCategories"

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero/>
      <div className="flex flex-col gap-10 ">
        <FeatureProduct/>
        <RangeofCategories/>
        <MostPopularProduct/>
        <Banner/>
        <div></div>
      </div>
    </div>
  )
}

export default HomePage