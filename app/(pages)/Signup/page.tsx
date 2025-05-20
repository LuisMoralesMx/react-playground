'use client';

import { useState } from 'react';

export default function Signup() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);

  const newErrors: string[] = [];

  const handleSubmit = () => {
    if (firstName.trim() === '') {
      newErrors.push('First name is required.');
    }

    if (lastName.trim() === '') {
      newErrors.push('Last name is required.');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle successful submission (e.g., send data to the server)
    console.log('Form submitted:', { firstName, lastName });

    // Reset form fields
    setFirstName('');
    setLastName('');
    setErrors([]);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="mt-4 text-lg">Create an account to get started!</p>
      </div>

      {errors.length > 0 && (
        <div className="flex flex-col items-center justify-center p-4 mt-5">
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <ul>
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center justify-center p-5 mt-5">
        {/* First Name */}
        <label htmlFor="firstName" className="text-lg">
          First Name:
        </label>
        <input
          id="firstName"
          className="border border-gray-300 rounded p-2 mt-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        ></input>

        {/* Last Name */}
        <label htmlFor="lastName" className="text-lg mt-4">
          Last Name:
        </label>
        <input
          id="lastName"
          className="border border-gray-300 rounded p-2 mt-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
        ></input>

        {/* Submit Button */}
        <button className="mt-4 bg-blue-500 text-white rounded p-2" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
