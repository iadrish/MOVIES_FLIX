import { BrowserRouter,Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav";
import { Container } from "@mui/material";
import Trending from "./components/Pages/Trending/Trending";
import Movies from "./components/Pages/Movies/Movies";

import Series from "./components/Pages/Series/Series";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
        <Routes>
          <Route path="/" Component={Trending}  />
          <Route path="/movies" Component={Movies} />
          
          <Route path="/series" Component={Series} />

        </Routes>
          

        
      </Container>
    </div>
    <SimpleBottomNavigation />
    
    </BrowserRouter>
  );

}
export default App;