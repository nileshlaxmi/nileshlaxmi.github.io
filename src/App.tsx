import Footer from "./components/footer.tsx";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <div className="wrap" role="main" aria-labelledby="name">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}
export default App;