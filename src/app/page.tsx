import Image from 'next/image'
import ExampleImage from '../../public/example.jpg'
import Hero from '@/components/hero'

export default function Home() {
  return (
   <>
      <Hero>
        <div>
          <Image src={ExampleImage} alt="Example" placeholder='blur' />
        </div>
      </Hero>
   </>
  );
}
