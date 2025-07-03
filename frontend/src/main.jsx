import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './landingpage/Footer.jsx'
import Navbar from "./landingpage/Navbar";

import HomePage from './landingpage/home/HomePage.jsx'
import SignUp from './landingpage/signup/SignUp.jsx'
import AboutPage from './landingpage/about/AboutPage.jsx'
import PricingPage from './landingpage/pricing/PricingPage.jsx'
import SupportPage from './landingpage/support/SupportPage.jsx'
import ProductPage from './landingpage/products/ProductPage.jsx'
import NotFound from './landingpage/NotFound.jsx'





createRoot(document.getElementById('root')).render(
  
<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>

)
