import { Link } from 'react-router-dom'
import hospitalImage from '../assets/hospital.jpg' // Import your hospital image

const Home = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      {/* Hero Section */}

      <div className='bg-gray-100 min-h-screen'>
        {/* Hero Section */}
        <div className='bg-blue-600 text-white py-20 px-6 flex flex-col md:flex-row items-center justify-center'>
          {/* Left Side - Text Content */}
          <div className='md:w-1/2 text-center md:text-left'>
            <h1 className='text-4xl font-bold'>Welcome to Phc Verul</h1>
            <p className='mt-4 text-lg max-w-lg'>Providing world-class healthcare services with modern technology and a team of expert doctors.</p>
            <Link to='/appointments'>
              <button className='mt-6 bg-white text-blue-600 px-6 py-2 rounded-md text-lg font-semibold shadow-lg'>Book an Appointment</button>
            </Link>
          </div>

          {/* Right Side - Hospital Image */}
          <div className='md:w-1/2 mt-6 md:mt-0 flex justify-center'>
            <img src={hospitalImage} alt='Hospital' className='w-full max-w-md rounded-lg shadow-lg' />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className='container mx-auto px-6 py-16'>
        <h2 className='text-3xl font-bold text-center text-blue-700'>About Our Hospital</h2>
        <p className='mt-4 text-gray-700 text-center max-w-3xl mx-auto'>CityCare Hospital has been at the forefront of medical innovation, providing exceptional patient care for over 20 years. We specialize in cardiology, neurology, orthopedics, and pediatric care, ensuring that every patient receives the best treatment.</p>
      </div>

      {/* Services Section */}
      <div className='bg-white py-16'>
        <h2 className='text-3xl font-bold text-center text-blue-700'>Our Services</h2>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto'>
          {[
            { title: 'Emergency Care', icon: '🚑', description: '24/7 emergency services with expert trauma care.' },
            { title: 'Cardiology', icon: '❤️', description: 'Advanced heart care and cardiology treatments.' },
            { title: 'Neurology', icon: '🧠', description: 'Expert neurological treatments and brain care.' },
            { title: 'Pediatrics', icon: '👶', description: 'Comprehensive healthcare for infants and children.' },
            { title: 'Orthopedics', icon: '🦴', description: 'Specialized bone and joint treatments.' },
            { title: 'Cancer Treatment', icon: '🎗️', description: 'Cutting-edge oncology treatments and care.' }
          ].map((service, index) => (
            <div key={index} className='bg-blue-100 p-6 rounded-lg shadow-md text-center'>
              <div className='text-5xl'>{service.icon}</div>
              <h3 className='text-xl font-semibold mt-3'>{service.title}</h3>
              <p className='text-gray-600 mt-2'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Profiles Section */}
      <div className='container mx-auto px-6 py-16'>
        <h2 className='text-3xl font-bold text-center text-blue-700'>Meet Our Expert Doctors</h2>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {[
            { name: 'Dr. Sangharsh Uttam Rajule', specialization: 'Cardiologist', image: 'https://via.placeholder.com/100' },
            { name: 'Dr. A Kadam ', specialization: 'Neurologist', image: 'https://via.placeholder.com/100' },
            { name: 'Dr. Xyz', specialization: 'Pediatrician', image: 'https://via.placeholder.com/100' }
          ].map((doctor, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-md text-center'>
              <img src={doctor.image} alt={doctor.name} className='w-24 h-24 mx-auto rounded-full' />
              <h3 className='text-lg font-semibold mt-3'>{doctor.name}</h3>
              <p className='text-gray-600'>{doctor.specialization}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className='bg-blue-600 text-white text-center py-16'>
        <h2 className='text-2xl font-bold'>Need Medical Assistance?</h2>
        <p className='mt-2'>Book an appointment with our specialists today.</p>
        <Link to='/appointments'>
          <button className='mt-4 bg-white text-blue-600 px-6 py-2 rounded-md text-lg font-semibold shadow-lg'>Schedule a Consultation</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
