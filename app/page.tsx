import { Header } from "./components/header"
import { Footer } from "./components/Footer"
import { AboutSection } from "./components/About"
import { ContactSection } from "./components/Contact"
const PortFolio=()=>{
  return (
    <div className="min-h-screen bg-gray-100">
                    <Header />
                    <AboutSection />
                    <ContactSection />
                    <Footer />
                </div>
  )
}
export default PortFolio