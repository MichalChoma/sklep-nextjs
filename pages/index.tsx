import Main from '../components/Main'
import Footer from "../components/Footer";
import Header from "../components/Header";
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <ProductDetails data={DATA}/>
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
