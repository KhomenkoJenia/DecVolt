import About from "@/component/About";
import Contacts from "@/component/Contact";
import ContactUs from "@/component/ContactUs";
import FirstScreen from "@/component/FirstScreen";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Product from "@/component/Product";
import TitlePage from "@/component/TitlePage";
import SliderCastom from "@/component/UI/Slider.jsx";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <FirstScreen />
      <TitlePage />
      <ContactUs />
      <Product />
      <About />
      <Contacts />
      <Footer />
    </main>
  );
}
