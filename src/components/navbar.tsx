import Image from "next/image"
import Link from "next/link"
import '@/css/navbar.css'
import Logo from '../../public/vertical.jpg'
export default function Example() {

  return (
    <div className="bg-center">
        <div className="navbar-container">
            <Image src={Logo} alt="Logo" />
            <div>About</div>
            <div>Contacts</div>
            <div>Products</div>  
            
        </div>
      
    </div>
  )
}
