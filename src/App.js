import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/header' element={<Header></Header>}></Route>
        <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>

      </Routes>
    </div>
  );
}

export default App;
