import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import Benefits from "@/scenes/benefits";
import OurClasses from "@/scenes/ourClasses";
import ContactUs from "@/scenes/contactUs";
import Footer from "@/scenes/footer";


function App() {

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
      );
      const [isTopOfPage ] = useState<boolean>(true);

  return (
    <div className="app ">
    <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

            <Home setSelectedPage={setSelectedPage} />
            <Benefits setSelectedPage={setSelectedPage} />
            <OurClasses setSelectedPage={setSelectedPage} />
            <ContactUs setSelectedPage={setSelectedPage} />
            <Footer />
    </div>
  )
}

export default App
