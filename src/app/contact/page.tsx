'use client';
import { Meteors } from "@/components/ui/meteors"
export default function Page() {
  return (
    <div className="">
      <div className=" w-full h-screen relative">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
          <h1 className="font-bold mt-12  text-7xl text-white mb-4 relative z-50">
            Contact Us
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 max-w-xl text-center">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
          </p>

          <div className="min-w-[600px] space-y-6">
            <input type="text" className="bg-black px-6 py-4 rounded-xl min-w-full placeholder:text-slate-500" placeholder="Enter your email address" />
            <textarea className="bg-black px-6 py-4 rounded-xl min-w-full placeholder:text-slate-500" rows={7} placeholder="Write your message here" />
          </div>
          {/* Meaty part - Meteor effect */}
          <Meteors number={40} />
        </div>
      </div>
    </div>
  )
}

