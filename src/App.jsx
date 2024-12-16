import './App.css'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Banner from './Banner.jsx'
import Root from './Root.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Banner />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
