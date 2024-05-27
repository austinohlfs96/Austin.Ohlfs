
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landing";
import Error from './Error';
import Blog from './Blog';
import WorkExp from "./WorkExp";
import Contact from "./Contact"
import Projects from './Projects'
import AesirExperience from "./AESIRExp";


function Router() {
  const routes = (
    <>
      <Route path='/' element={<LandingPage/>} />,
      <Route path='/blog' element={<Blog/>} />,
      <Route path='/work-experience' element={<WorkExp/>} />,
      <Route path='/contact' element={<Contact/>} />,
      <Route path='/projects' element={<Projects/>} />,
      <Route path='/aesir' element={<AesirExperience/>} />,
      
      
    </>
  )
  return (
    <>
      <Routes>
        {routes}
        <Route path="/:error" element={<Error />} />
      </Routes>
    </>
  )
}

export default Router;