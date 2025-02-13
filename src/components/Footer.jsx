import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-700 text-white py-8 mt-10'>
      <div className='container mx-auto px-6'>
        {/* Footer Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left'>
          {/* Hospital Info */}
          <div>
            <h2 className='text-xl font-bold'>Phc Verul</h2>
            <p className='mt-2 text-sm'>
              Opposite Ghrushneshwar Temple, Ellora, Tq.Khuldabad, <br /> Dist Aurangabad <br />
              Phone: 02437-297130 <br />
              Email: phc.verul8@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className='text-xl font-bold'>Quick Links</h2>
            <ul className='mt-2 space-y-2'>
              <li>
                <Link to='/' className='hover:underline'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/doctors' className='hover:underline'>
                  Doctors
                </Link>
              </li>
              <li>
                <Link to='/appointments' className='hover:underline'>
                  Appointments
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className='text-xl font-bold'>Follow Us</h2>
            <div className='mt-2 flex justify-center md:justify-start space-x-4'>
              <a href='https://www.facebook.com/yash.wagh.14855' className='text-white hover:text-gray-300 text-2xl'>
                <FaFacebook />
              </a>
              <a href='#' className='text-white hover:text-gray-300 text-2xl'>
                <FaTwitter />
              </a>
              <a href='#' className='text-white hover:text-gray-300 text-2xl'>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white my-6'></div>

        {/* Developer Info */}
        <div className='text-center text-sm'>
          <p>
            Developed by{' '}
            <a href='https://github.com/yourgithub' className='font-bold hover:underline'>
              Shaikh Quadeer Pasha
            </a>
          </p>
          <p>© {new Date().getFullYear()} quadCodes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
