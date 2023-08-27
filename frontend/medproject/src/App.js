// import logo from "./logo.svg";
// import "./App.css";
import Header from "./header/Header";
import Home from "./home/Home";
import Auth from "./auth/Auth";
import { Route, Routes } from "react-router-dom";
import AdminAuth from "./auth/AdminAuth";
import Medicines from "./medicine/Medicines";
import { useSelector } from "react-redux";
import AddMedicine from "./medicine/AddMedicine";
import AddMr from "./mr/AddMr";
import MedicineUpdate from "./medicine/MedicineUpdate";
import ShopkeeperAuth from "./auth/ShopkeeperAuth";
import MR from "./mr/MR";
import MRupdate from "./mr/MRupdate";
import CartProductDisplay from "./cart/CartProductDisplay";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/medicines" element={<Medicines />} />
          <Route path="/add-medicine" element={<AddMedicine />} />
          <Route path="/add-mr" element={<AddMr />} />
          <Route path="/medicines/:id" element={<MedicineUpdate />} />
          <Route path="/auth/admin" element={<AdminAuth />} />
          <Route path="/auth/user" element={<ShopkeeperAuth />} />
          <Route path="/mr/admins/:id" element={<MR />} />
          <Route path="/user/cartItem/:id" element={<CartProductDisplay />} />
          <Route path="/mr/:id" element={<MRupdate/>} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
