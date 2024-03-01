import Contacts from "@/component/Contact";
import ContactUs from "@/component/ContactUs";
import FirstScreen from "@/component/FirstScreen";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import TitlePage from "@/component/TitlePage";
import MainGere from "@/component/main";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <FirstScreen />
      <TitlePage></TitlePage>
      <ContactUs />
      <Contacts />
      <Footer />
    </main>
  );
}
