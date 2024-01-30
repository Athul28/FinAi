import Header from "./Header"
import ChatButButton from "./ChatBotButton"
import AboutChatbot from "./AboutChatbot"
import AboutUs from "./AboutUs"
import Footer from "./Footer"
import Quotes from "./Quotes"
import Articles from "./articles"
import CompoundInterest from "./CompoundInterest"

function App() {
  return (
    <>
    <div className="bg-[#FFF7D4] font-ubuntu">
      <Header />
      <ChatButButton />
      <Quotes />
      <Articles />
      <CompoundInterest />
      <AboutChatbot />
      <AboutUs />
      <Footer />
    </div>

    </>
  )
}

export default App
