import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import Root from './pages/root'
import Error from './pages/error'
import CreatePage from './pages/create'
import BrowsePage from './pages/browse'
import PaletteDetailPage from './pages/paletteDetail'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Root/>, 
    errorElement: <Error/>,
    children: [
      { index: true, path: '/', element: <HomePage/>},
      { path: '/create', element: <CreatePage/>},
      { path: '/browse', element: <BrowsePage/>},
      { path: '/palette/:palId', element: <PaletteDetailPage/>},
      //{ path: '/contact', element: <ContactPage/>},
      //{ path: '/contact/list', element: <ContactList/>},
    ] 
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
