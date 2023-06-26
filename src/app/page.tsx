import Image from 'next/image'
import ExampleImage from '../../public/example.jpg'
import Hero from '@/components/hero'
import Stats from '@/components/stats'

export default function Home() {
  return (
   <>
      <Hero />
      <Stats />
   </>
  );
}
