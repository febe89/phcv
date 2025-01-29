const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
      <img src={doctor.image} alt={doctor.name} className="w-24 h-24 mx-auto rounded-full" />
      <h2 className="text-xl font-semibold mt-2">{doctor.name}</h2>
      <p className="text-gray-500">{doctor.specialization}</p>
      <p className="text-sm text-gray-600 mt-2">Experience: {doctor.experience} years</p>
      <p className={`mt-2 ${doctor.availability ? "text-green-600" : "text-red-500"}`}>
        {doctor.availability ? "Available" : "Not Available"}
      </p>
      <button 
        className={`mt-3 px-4 py-2 text-white rounded ${
          doctor.availability ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!doctor.availability}
      >
        {doctor.availability ? "Book Appointment" : "Unavailable"}
      </button>
    </div>
  );
};

export default DoctorCard;
