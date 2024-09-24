import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Partners = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Find a Car: Search initiated!");
  };

  return (
    <div
      className="bg-cover bg-center px-5 h-[100vh] md:h-[60vh]"
      style={{ backgroundImage: `url('/images/partners-bg.png')` }}
    >
      <div className="max-w-screen-xl mx-auto h-full relative animate__animated animate__fadeInUp">
        <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-full">
          {/* Form Section */}
          <div className="w-full bg-white p-5 md:p-10 py-6 md:py-12 rounded-lg shadow-lg">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col md:flex-row items-center gap-4 justify-between"
            >
              {/* Pick-up Location */}
              <div className="w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Pick-up Location
                </label>
                <select
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="block w-full bg-gray-100 rounded-md p-3 md:p-4"
                  required
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                </select>
              </div>

              {/* Drop-off Location */}
              <div className="w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Drop-off Location
                </label>
                <select
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleChange}
                  className="block w-full bg-gray-100 rounded-md p-3 md:p-4"
                  required
                >
                  <option value="" disabled>
                    Select Location
                  </option>
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                </select>
              </div>

              {/* Pick-up Date */}
              <div className="w-full relative">
                <label className="block text-gray-700 font-semibold mb-2">
                  Pick-up Date
                </label>
                <DatePicker
                  selected={formData.pickupDate}
                  onChange={(date) =>
                    setFormData({ ...formData, pickupDate: date })
                  }
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={15}
                  dateFormat="dd/MM/yyyy h:mm aa"
                  className="block w-full bg-gray-100 rounded-md p-3 md:p-4"
                  placeholderText="dd/mm/yyyy"
                  required
                />
              </div>

              {/* Drop-off Date */}
              <div className="w-full">
                <label className="block text-gray-700 font-semibold mb-2">
                  Drop-off Date
                </label>
                <DatePicker
                  selected={formData.dropoffDate}
                  onChange={(date) =>
                    setFormData({
                      ...formData,
                      dropoffDate: date,
                    })
                  }
                  dateFormat="dd/MM/yyyy h:mm aa"
                  showTimeSelect
                  timeFormat="h:mm aa"
                  timeIntervals={15}
                  timeCaption="Time"
                  className="block w-full bg-gray-100 rounded-md p-3 md:p-4"
                  placeholderText="dd/mm/yyyy"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-l from-[#FBBB04] to-[#daa003] text-white font-semibold px-6 py-4 mt-2 md:mt-8 rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Find a Car
                </button>
              </div>
            </form>
          </div>

          {/* Partners Section */}
          <div className="text-center">
            <button className="custom-shadow bg-white px-8 py-3 rounded-md my-5 md:my-10">
              <p className="bg-white bg-gradient-to-r from-[#FBBB04] to-black text-xl inline-block text-transparent bg-clip-text font-semibold">
                Long Term Lease
              </p>
            </button>
            <div className="max-w-screen-xl mx-auto flex items-center gap-12">
              <div className="w-full h-[2px] bg-[#d4d4d469]"></div>
              <div className="w-full h-[2px] bg-[#d4d4d469]"></div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-5 mt-5">
              <img
                src="/images/partners1.png"
                alt="Nissan"
                className="w-full h-full p-3 object-contain"
              />
              <img
                src="/images/partners2.png"
                alt="Toyota"
                className="w-full h-full p-3 object-contain"
              />
              <img
                src="/images/partners3.png"
                alt="Kia"
                className="w-full h-full p-3 object-contain"
              />
              <img
                src="/images/partners4.png"
                alt="Hyundai"
                className="w-full h-full p-3 object-contain"
              />
              <img
                src="/images/partners5.png"
                alt="Citroën"
                className="w-full h-full p-3 object-contain"
              />
              <img
                src="/images/partners6.png"
                alt="Peugeot"
                className="w-full h-full p-3 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
