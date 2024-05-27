import { Segment, Image, Grid } from 'semantic-ui-react'
import NavBar from "./NavBar";
import Footer from "./Footer"
import EmailForm from './EmailForm';


const src = '/images/wireframe/image-text.png'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <section id="experience">
                <EmailForm/>
              </section>
      <Footer/>
    </div>
  )
}

export default Contact;