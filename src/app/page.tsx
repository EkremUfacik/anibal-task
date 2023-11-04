import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import SectionOur from "@/components/SectionOur";

const Home = () => {
  return (
    <div className="">
      <Header />
      <SectionOur />
      <Carousel />
      <iframe
        src="https://my.spline.design/clonermotioninfraredcopy-4b05346df83a063715be49220efad9f9/"
        className="w-full h-screen mt-20"
      ></iframe>
    </div>
  );
};

export default Home;
