import Image from 'next/image'
import ExampleImage from '../../public/example.jpg'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
   <>
      <Navbar/>
      <Hero />
   </>
  );
}
