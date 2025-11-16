import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk, useUser, UserButton } from '@clerk/clerk-react'
const BookIcon = ()=>(
    <img src="assets.bookingicon" alt="bookingicon" className="w-4 h-4 text-gray-700" />


)
const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Venues', path: '/venues' },
    { name: 'Events', path: '/events' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const {openSignIn} = useClerk()
  const {user} = useUser()
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? 'bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4'
          : 'py-4 md:py-6 text-white'
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-12 ${isScrolled ? 'invert opacity-100' : ''}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? 'bg-gray-700' : 'bg-white'
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}

        <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        Dashboard
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <img
  src={assets.searchicon}
  alt="search"
  className={`h-7 transition-all duration-500 ${isScrolled ? 'invert' : ''}`}/>
  {user ?
   (<UserButton>
    <UserButton.MenuItems>
        <UserButton.Action label="My Bookings" labelIcon={<BookIcon/>} 
        onClick={()=> navigate('/my-bookings')}/>

    </UserButton.MenuItems>
   </UserButton>):
   (<button  onClick={openSignIn} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>)
}
                </div>


      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center">
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuicon}
          alt="menu"
          className="h-6 cursor-pointer"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-gray-800 text-lg transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeicon} alt="close" className="h-6" />
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {!user && (
          <button
            onClick={openSignIn}
            className="px-8 py-2.5 rounded-full bg-black text-white"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar
