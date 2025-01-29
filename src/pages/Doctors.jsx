import DoctorCard from '../components/DoctorCard'

const Doctors = () => {
  // Sample doctors data (this can be fetched from an API later)
  const doctorsList = [
    {
      id: 1,
      name: 'Dr. Sangharsh Uttam Rajule',
      specialization: 'Cardiologist',
      experience: 10,
      availability: true,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 2,
      name: 'Dr. A Kadam',
      specialization: 'Neurologist',
      experience: 8,
      availability: true,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 3,
      name: 'Dr. Emily Brown',
      specialization: 'Pediatrician',
      experience: 12,
      availability: false,
      image: 'https://via.placeholder.com/100'
    },
    {
      id: 4,
      name: 'Dr. Robert Wilson',
      specialization: 'Orthopedic Surgeon',
      experience: 15,
      availability: true,
      image: 'https://via.placeholder.com/100'
    }
  ]

  return (
    <div className='min-h-screen bg-gray-100 py-10 px-6'>
      <h1 className='text-3xl font-bold text-center text-blue-700 mb-6'>Meet Our Expert Doctors</h1>

      {/* Doctors List */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        {doctorsList.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}

export default Doctors
