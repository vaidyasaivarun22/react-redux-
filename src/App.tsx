import { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import DashboardComponent from './components/Dashboard';
import CartComponent from './components/Cart';
import RootLayout from './components/RootLayout';

export const App: FC<{ name: string }> = ({ name }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<DashboardComponent />}></Route>
        <Route path="/cart" element={<CartComponent />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
