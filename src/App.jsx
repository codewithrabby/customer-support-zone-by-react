import './App.css'

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

      <h1>Banner</h1>

      <main>
        Main Section
      </main>

      <footer>
        Footer Section
      </footer>


    </>
  )
}

export default App
