import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Layout from "./Layout";
import Register from "./pages/Register";
import axios from "axios";
import { UserContextProvider } from "./userContext";
import AccountPage from "./pages/AccountPage";
import Places from "./pages/Places";
import PlacesFormPage from "./pages/PlacesFormPage";
import AccountNav from "./AccountNav";
import PlacePage from "./pages/PlacePage";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";
import AnyWeek from "./pages/AnyWeek";
import AddGuests from "./pages/AddGuests";


axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <UserContextProvider>
     <Routes>
       <Route path="/" element={<Layout/>}>
       <Route index element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/account" element={<AccountPage/>}/>
       <Route path="/account/places" element={<Places/>}/>
       <Route path="/account/bookings" element={<AccountNav/>}/>
       <Route path="/account/places/new" element={<PlacesFormPage/>}/>
       <Route path="/account/places/:id" element={<PlacesFormPage/>}/>
       <Route path="/places/:id" element={<PlacePage/>}/>
       <Route path="/account/booking" element={<BookingsPage/>}/>
       <Route path="/account/booking/:id" element={<BookingPage/>}/>\
       <Route path="/anyweek" element={<AnyWeek/>}/>
       <Route path="/addguest" element={<AddGuests/>}/>
       </Route>
      </Routes>
    </UserContextProvider>
    
  );
}
