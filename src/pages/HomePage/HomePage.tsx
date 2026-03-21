import FeatureProduct from "../HomePageComponents/FeaturedProduct/FeatureProduct"
import Hero from "../HomePageComponents/Hero/Hero"
import RangeofCategories from "../HomePageComponents/RangeOfCategories/RangeofCategories"

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero/>
      <div className="flex flex-col gap-10 ">
        <FeatureProduct/>
        <RangeofCategories/>
        <div></div>
      </div>
    </div>
  )
}

export default HomePage