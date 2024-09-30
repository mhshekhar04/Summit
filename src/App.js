
import './App.css';
import Header from './components/Header/Header';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Roadmap from './components/Roadmap/Roadmap';
import FaqContainer from './components/FaqContainer/FaqContainer';
import NewsBlogs from './components/NewsBlogs/NewsBlogs';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import CircleGradient from './components/CircleGradient';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <WhyChooseUs/>
      <Roadmap/>
      <NewsBlogs/>
      <FaqContainer/>
      <Footer/>
      <CircleGradient/>
    </div>
  );
}

export default App;
