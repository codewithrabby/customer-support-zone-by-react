import './App.css'
import xImg from "./assets/x.png"
import linkedinImg from "./assets/linkedin.png"
import facebookImg from "./assets/facebook.png"
import mailImg from "./assets/mail.png"
import vector1 from "./assets/vector1.png"
import vector2 from "./assets/vector2.png"





function App() {

  return (
    <>
      {/* ===== NAVBAR Section Starts from here... ===== */}
      <nav className="w-full bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="font-bold text-lg">
            <h3 className='text-[#130B2D]'>CS — Ticket System</h3>
          </div>

        <div className='flex items-center'>
          <ul className="hidden md:flex gap-6 text-sm text-[#000000] font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">FAQ</li>
            <li className="hover:text-black cursor-pointer">Changelog</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li className="hover:text-black cursor-pointer">Download</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
          </ul>
          <button className="ml-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-md text-[#FFFFFF] font-semibold px-4 py-2 rounded-lg shadow hover:bg-purple-700">
            + New Ticket
          </button>
        </div>
        </div>
      </nav>

      {/* ===== BANNER Section Starts from here... ===== */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-6 py-10">
        <div className="relative bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] rounded-xl p-8 flex flex-col items-center justify-center overflow-hidden">
          <img src={vector1} alt="left decoration" className="absolute left-0 top-0 h-full object-cover"/>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-2xl font-medium">In-Progress</h2>
            <p className="text-6xl font-bold mt-2">0</p>
          </div>
          <img src={vector2} alt="right decoration" className="absolute right-0 top-0 h-full object-cover"/>
        </div>

        <div className="relative bg-gradient-to-r from-[#54CF68] to-[#00827A] text-[#FFFFFF] rounded-xl p-8 flex flex-col items-center justify-center overflow-hidden">
          <img src={vector1} alt="left decoration" className="absolute left-0 top-0 h-full object-cover"/>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-2xl font-medium">Resolved</h2>
            <p className="text-6xl font-bold mt-2">0</p>
          </div>
          <img src={vector2} alt="right decoration" className="absolute right-0 top-0 h-full object-cover"/>
        </div>
      </section>

      <main>
        Main Section
      </main>


      {/* ===== FOOTER Section Starts from here...  ===== */}
      <footer className="bg-[#000000] text-gray-300 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6 py-12">
          <div className="">
            <h2 className="font-bold text-[#FFFFFF] text-2xl">CS — Ticket System</h2>
            <p className="mt-3 text-[#A1A1AA] text-sm leading-relaxed">CS Ticket System helps businesses manage customer issues efficiently with faster response times, clear tracking, and smooth communication. Our platform ensures reliable support and improved customer satisfaction.</p>
          </div>

          <div>
            <h3 className="text-[#FFFFFF] text-xl font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-[#A1A1AA]">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sales</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFFFFF] text-xl font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-[#A1A1AA]">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFFFFF] text-xl font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-sm text-[#A1A1AA] mb-4">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFFFFF] text-xl font-semibold mb-3">Social Links</h3>
            <ul className="space-y-3 text-sm text-[#A1A1AA]">
              <li className="flex items-center gap-2"><img src={xImg} alt="x.com logo" />@CS — Ticket System</li>
              <li className="flex items-center gap-2"><img src={linkedinImg} alt="linkedin logo" />#CS — Ticket System</li>
              <li className="flex items-center gap-2"><img src={facebookImg} alt="facebook logo" />&CS — Ticket System</li>
              <li className="flex items-center gap-2"><img src={mailImg} alt="mail logo" />support@csst.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t w-7xl mx-auto border-gray-800 text-center text-sm py-4">
          <p className='text-[#FAFAFA]'>©2025 CS — Ticket System. All rights reserved. </p>
        </div>
      </footer>
    </>
  )
}

export default App
