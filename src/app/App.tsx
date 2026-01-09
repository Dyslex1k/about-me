import './App.css'
import Navbar from '../components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      
      <section id="home" className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">What the Sigma!?</h1>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-zinc-900">
        <h1 className="text-6xl font-bold">I am the Omgea Rizzler</h1>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold">Bussin my dih on that gyatt!!!</h1>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-zinc-900">
        <h1 className="text-6xl font-bold">Goonernation@gmail.com</h1>
      </section>
    </div>
  );
}
export default App