import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardsCarousel from './slider'
import './App.css'
import Header from './header'
import Discover from './discover'
import Signup from './signup'
import Signin from './signin'
import ForgetPassword from './recoverpass'
import ForgotPassword from './forgotpass'
import Verification from './verifyCode'
import ChangePassword from './changepassword'
import Update from './updateprofile'
import UserInformationPage from './viewProfile'
import SignupGoogle from './signupGoogle'
import BusinessOwnerView from './businessOwner/businessOwnerView'
import FaqWithImage from './businessOwner/faqs'
import BusinessOwnerUpdate from './businessOwner/BusinessOwnerUpdate'
import BusinessOwnerUpdateAgain from './businessOwner/BusinessOwnerUpdateAgain'
import UsersTable from './businessOwner/ViewBusinessOwner'
import AddBusiness from './business/AddBusiness'
import ViewBusiness from './business/ViewBusiness'
import UpdateBusiness from './business/UpdateBusiness'


import { MantineProvider, ColorSchemeProvider } from '@mantine/core'

function App() {
  return (
    <>
    {/*
    <Header />
    <CardsCarousel />
    <Discover />
  */}
  
  <Signup />
  
  
    </>
  )
}

export default App
