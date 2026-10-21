import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./Components/Layout/Layout";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Users from "./pages/Users/Users";
import AdminUser from "./pages/Users/components/AdminUser/AdminUser";
import Home from "./pages/Home/Home";
import Clients from "./pages/Clients/Clients";
import Google from "./pages/Clients/components/Google/Google";
import Apple from "./pages/Clients/components/Apple/Apple";
import SpaceX from "./pages/Clients/components/SpaceX/SpaceX";



// Lessons imports
import Lesson05 from "./Lessons/Lesson05/Lesson05";
import Lesson06 from "./Lessons/Lesson06/Lesson06";
import Lesson07 from "./Lessons/Lesson07/Lesson07";
import Lesson08 from "./Lessons/Lesson08/Lesson08";
import Lesson09 from "./Lessons/Lesson09/Lesson09";
import Lesson10 from "./Lessons/Lesson10/Lesson10";
import Lesson11 from "./Lessons/Lesson11/Lesson11";
import Lesson12 from "./Lessons/Lesson12/Lesson12";
import Lesson15 from "./pages/Lesson15/Lesson15";



// Homeworks imports

// import Homework05 from "./Homeworks/Homework05/Homework05";
import Homework06 from "./Homeworks/Homework06/Homework06";
import Homework07 from "./Homeworks/Homework07/Homework07";
import Homework08 from "./Homeworks/Homework08/Homework08";

import Homework10 from "./Homeworks/Homework10/Homework10";



function App() {
  return (
    // <></> - fragment. Он позволяет задать обертку (выступает в качестве родителя), чтобы
    // не было ошибок если у нас есть несколько соседних элементов, но на самой странице никакой
    // новый элемент добавлен не будет
    <BrowserRouter>
      <GlobalStyles />
      <Layout>



        {/* Routes - компонент из react-router, в котором мы храним
        все пути и компоненты страниц, которые должно по ним отображаться */}
        <Routes>
          {/* Route - компонент, который содержит путь и страницу, которая отображается
          по этому пути */}
          <Route path="/" element={<Home />} />
          <Route path="/lesson-05" element={<Lesson05 />} />
          <Route path="/lesson-06" element={<Lesson06 />} />
          <Route path="/lesson-07" element={<Lesson07 />} />
          <Route path="/lesson-08" element={<Lesson08 />} />
          <Route path="/lesson-09" element={<Lesson09 />} />
          <Route path="/lesson-10" element={<Lesson10 />} />
          <Route path="/lesson-11" element={<Lesson11 />} />
          <Route path="/lesson-12" element={<Lesson12 />} />
                            {/* Lesson 14. React Router */}
          <Route path="/users" element={<Users />} />

          <Route path="/users/admin" element={<AdminUser />} />
                              {/* Lesson 15. Context */}
          <Route path="/lesson-15" element={<Lesson15 />} />
          {/* Homeworks */}

            {/* <Route path="/homework-05" element={<Homework05 />} /> */}
          <Route path="/hw-06" element={<Homework06 />} />
          <Route path="/hw-07" element={<Homework07 />} />
          <Route path="/hw-08" element={<Homework08 />} />
          <Route path="/hw-10" element={<Homework10 />} />

          <Route path="/clients" element={<Clients />}>
          <Route path="google" element={<Google />} />
          <Route path="apple" element={<Apple />} />
          <Route path="spacex" element={<SpaceX />} />  
          </Route>
          
          {/* Страница PageNotFound будет показываться, если ни один из маршрутов
          выше не будет найден */}
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

