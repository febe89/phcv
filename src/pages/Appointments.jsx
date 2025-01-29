import { useState } from 'react'

const Appointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: 'Dr. Sangharsh Uttam Rajule', date: '2025-01-29', time: '10:30 AM' },
    { id: 2, doctor: 'Dr. A Kadam', date: '2025-01-29', time: '2:00 PM' }
  ])

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold'>My Appointments</h2>
      <div className='mt-4'>
        {appointments.map((appt) => (
          <div key={appt.id} className='bg-gray-100 p-4 rounded-lg mb-3'>
            <p>
              <strong>Doctor:</strong> {appt.doctor}
            </p>
            <p>
              <strong>Date:</strong> {appt.date}
            </p>
            <p>
              <strong>Time:</strong> {appt.time}
            </p>
            <button className='bg-red-500 text-white px-3 py-1 rounded mt-2'>Cancel</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Appointments
