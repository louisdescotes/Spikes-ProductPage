import Objects from './components/Objects/Objects.jsx';
import Header from './components/Header/Header.jsx';
import Caroussels from './components/Objects/Caroussels.jsx';

export default function App() {
  return (
    <>
    <Header />
    <section className="relative flex items-center flex-col-reverse lg:flex-row gap-10 top-0 py-8">
      <Objects />
      <Caroussels />
    </section>
    </>
  )
}