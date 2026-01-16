import Footer from "./components/footer.tsx";
import Header from "./components/header";
import Main from "./components/main";
import { PORTFOLIO_DATA } from "./constants/portfolio.constant.ts";

const App = () => {
  return (
    <>
      <a className="skip" href="#content">{PORTFOLIO_DATA.skipLink}</a>
      <div className="wrap" role="main" aria-labelledby="name">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}
export default App;