import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Registration from '../pages/Registration'
import Aadhar from '../pages/RegistrationPages/Aadhar'
import VerifyAadhaar from '../pages/RegistrationPages/VerifyAadhaar'
import YourDetails from '../pages/RegistrationPages/YourDetails'
import VerifyPhnNumber from '../pages//RegistrationPages/VerifyPhnNumber'
import AddPhoto from "../pages/RegistrationPages/AddPhoto"
import YourAddress from '../pages/RegistrationPages/Address'
import EmploymentDetails from "../pages/RegistrationPages/EmploymentDetails"
import IncomeDetails from "../pages/RegistrationPages/IncomeDetails"
import PanVerify from "../pages/RegistrationPages/PanVerify"
import AddressProof from "../pages/RegistrationPages/AddressProof"
import BankStatement from "../pages/RegistrationPages/BankStatement"
import SalarySlip from "../pages/RegistrationPages/SalarySlip"
import IncomeTaxReturn from "../pages/RegistrationPages/IncomeTaxReturn"
import Congratulations from '../pages/RegistrationPages/Congratulations'

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/aadhaar" element={<Registration><Aadhar/></Registration> } />
        <Route path="/register/verifyaadhaar" element={<Registration><VerifyAadhaar/></Registration> } />
        <Route path="/register/yourdetails" element={<Registration><YourDetails/></Registration> } />
        <Route path="/register/verifynumber" element={<Registration><VerifyPhnNumber/></Registration> } />
        <Route path="/register/addphoto" element={<Registration><AddPhoto/></Registration> } />
        <Route path="/register/address" element={<Registration><YourAddress/></Registration> } />
        <Route path="/register/employmentdetails" element={<Registration><EmploymentDetails/></Registration> } />
        <Route path="/register/incomedetails" element={<Registration><IncomeDetails/></Registration> } />
        <Route path="/register/panverify" element={<Registration><PanVerify/></Registration> } />
        <Route path="/register/addressproof" element={<Registration><AddressProof/></Registration> } />
        <Route path="/register/bankstatement" element={<Registration><BankStatement/></Registration> } />
        <Route path="/register/salaryslip" element={<Registration><SalarySlip/></Registration> } />
        <Route path="/register/incometaxreturn" element={<Registration><IncomeTaxReturn/></Registration> } />
        <Route path="/registered" element={<Registration><Congratulations/></Registration> } />
    </Routes>
  )
}

export default Router