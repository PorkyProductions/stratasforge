import Link from "next/link"
export default function Example() {

  return (
    <div className="">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        
        <div className="mx-auto max-w-2xl py-5 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
             Helping gamers get their STLs printed.
            </h1>
            <p className="mt-6 text-lg leading-8">
              Stratasforge is an all-inclusive, on-commission 3D printing company making fully custom figurines, 3D models, and 3D art.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-deepTeal px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
              >
                Get started
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
