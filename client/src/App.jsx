import {
  Navbar,
  Welcome,
  Footer,
  Transactions,
  Services,
  Loader,
} from "./components/index";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
