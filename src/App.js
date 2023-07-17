import { Provider } from 'react-redux';
import './App.css';
// // import Navbar from './components/header/header';
// // import Banner from './components/banner/banner';
// // import Comp from './components/abtcompany/abtcomp';
// // import Statex from './components/stateex/state';
// // import Choose from './components/chooseus/chooseus';
// // import Intouch from './components/getintouch/getintouch';
// // import Footer from './components/footer/footer';
// // import End from './components/foot/foot';
// // import ArrayComp from './components/arraycomp/arraycomp';
// import Additem from './components/additem/additem';
//import LoadData from './components/servercall/servercall';
import Counter from './components/Counter';
import store from './redux/store';

function App() {
  return (
    <>
    {/*  <Navbar/>
      <Banner />
      <Comp />
      <Choose />
      <Intouch />
      <Footer />
      <End/>
      <Statex/>
      <ArrayComp/> 
  <Additem/>
  <LoadData/> */}
<Provider store= {store}>
<Counter/>
</Provider>
 
  
  
    </>
  );
}
export default App;
