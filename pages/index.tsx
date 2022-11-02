import ProductLayout from '../components/ProductLayout'
import { ProductDetails } from "../components/Product";

const DATA = {
  id:1,
  description:
    "Contrary to popular belief, Lorem Ipsum is not simply random text.",
  thumbnailUrl: "https://picsum.photos/id/1060/536/354",
  title: "Random image",
  rating: 4.5,
  price:45,
  count:4.5,
};



const Home = () => {
  return (
      <ProductLayout>
        <ProductDetails data={DATA}/>
      </ProductLayout>
  );
};

export default Home;
