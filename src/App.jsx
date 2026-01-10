import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="container py-5">
        <h1 className="mb-3">Welcome to Amelia Grey</h1>
        <p className="text-muted">
          A quiet retreat inspired by English country charm.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default App;
