import GlobalStyles from "./styles/GlobalStyles";

// Lessons imports
// import Lesson05 from "./lessons/Lesson05/Lesson05";
// import Lesson06 from "./lessons/Lesson06/Lesson06";
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Lesson09 from "./lessons/Lesson09/Lesson09";

// import Lesson10 from "./Lessons/Lesson10/Lesson10";
import Lesson11 from "./Lessons/Lesson11/Lesson11";
// import Lesson12 from "./Lessons/Lesson12/Lesson12";


// Homeworks imports
// import Homework10 from "./Homeworks/Homework10/Homework10";

function App() {
  return (
    // <></> - fragmet. Он позволяет задать обертку (выступает в качестве родителя), чтобы
    // не было ошибок если у нас есть несколько соседних элементов, но на самой странице никакой
    // новый элемент добавлен не будет
    <>
      <GlobalStyles />
      {/* Lesson 05. TypeScript */}
      {/* <Lesson05 /> */}
      {/* Lesson 06. Component typing */}
      {/* <Lesson06/> */}
      {/* Lesson 07. Styling components */}
      {/* <Lesson07/> */}
      {/* Lesson 08. Controlled and uncontrolled components */}
      {/* <Lesson08 /> */}
      
      {/* <Lesson09 /> */}
      {/* Lesson 09. ToDoList */}

      {/* Lesson 10. Formik, Yup */}
      {/*<Lesson10 /> */}
      {/*<Homework10 />*/}

       {/*Lesson 11. Employees App */}
      <Lesson11 />
       {/*Lesson 12 */}
      {/*<Lesson12 />*/}
      
    </>
  );
}

export default App;