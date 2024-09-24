import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FleetForm = ({ formData, handleFormChange, locations, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col md:flex-row items-center gap-4 justify-between mt-5 md:my-10"
    >
      <div className="w-full">
        <label className="block text-gray-700 font-semibold mb-2">
          Pick-up Location
        </label>
        <select
          name="pickupLocation"
          value={formData.pickupLocation}
          onChange={handleFormChange}
          className="block w-full bg-gray-200 rounded-md p-3 md:p-4"
          required
        >
          <option value="" disabled>
            Select Location
          </option>
          {locations?.map((location) => (
            <option key={location.name} value={location.address}>
              {location.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full">
        <label className="block text-gray-700 font-semibold mb-2">
          Drop-off Location
        </label>
        <select
          name="dropoffLocation"
          value={formData.dropoffLocation}
          onChange={handleFormChange}
          className="block w-full bg-gray-200 rounded-md p-3 md:p-4"
          required
        >
          <option value="" disabled>
            Select Location
          </option>
          {locations?.map((location) => (
            <option key={location.name} value={location.address}>
              {location.name}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full relative">
        <label className="block text-gray-700 font-semibold mb-2">
          Pick-up Date
        </label>
        <DatePicker
          selected={formData.pickupDate}
          onChange={(date) =>
            handleFormChange({ target: { name: "pickupDate", value: date } })
          }
          showTimeSelect
          timeFormat="h:mm aa"
          timeIntervals={15}
          dateFormat="dd/MM/yyyy h:mm aa"
          className="block w-full bg-gray-200 rounded-md p-3 md:p-4"
          placeholderText="dd/mm/yyyy"
          required
        />
      </div>

      <div className="w-full">
        <label className="block text-gray-700 font-semibold mb-2">
          Drop-off Date
        </label>
        <DatePicker
          selected={formData.dropoffDate}
          onChange={(date) =>
            handleFormChange({ target: { name: "dropoffDate", value: date } })
          }
          dateFormat="dd/MM/yyyy h:mm aa"
          showTimeSelect
          timeFormat="h:mm aa"
          timeIntervals={15}
          className="block w-full bg-gray-200 rounded-md p-3 md:p-4"
          placeholderText="dd/mm/yyyy"
          required
        />
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="w-full bg-gradient-to-l from-[#FBBB04] to-[#daa003] text-white font-semibold px-6 py-4 mt-2 md:mt-8 rounded-lg hover:opacity-90 transition duration-300"
        >
          Check availability
        </button>
      </div>
    </form>
  );
};

export default FleetForm;
