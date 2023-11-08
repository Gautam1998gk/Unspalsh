import {createBrowserRouter,/*  createRoutesFromElements, Route, */
    RouterProvider,
  } from "react-router-dom";
import Home from "./Pages/Home";
import MainLayout from "./Pages/MainLayout";
import ImagesMain, { loader as ImagesLoader } from "./Pages/ImagesMain";
import Image, { loader as ImageLoader } from "./Pages/Image";

/* const Router=createBrowserRouter( createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>}/>
        <Route path=":query" element={<ImagesMain/>} loader={loader}/>
      </Route>
    )
  ); */

  const Router=createBrowserRouter([
    {path:"/", element:<MainLayout/>,children:[
        {index:true ,element:<Home/>},
        {path:":query",element:<ImagesMain/>,loader:ImagesLoader},
        {path:":query/:id",element:<Image/>,loader:ImageLoader}
    ]}
  ])
    


const App = () => {
  return <RouterProvider router={Router}/>
}

export default App
