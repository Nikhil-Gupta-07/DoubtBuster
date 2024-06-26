import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getstudentdata } from '@/frontendservices/operations/studentdash'
import { useDispatch } from 'react-redux'
import { endpoints } from '@/frontendservices/api'

const UserDetails = () => {
  const dispatch = useDispatch()
  const [expertdata, setexpertdata] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('/api/expertdash/getdata')
        console.log(res.data)
        console.log('datadikhao')
        setexpertdata(res.data.experts) // Assuming users is the key containing user data
        setLoading(false)
      } catch (error) {
        console.error('Error fetching user data:', error)
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  const DocumentUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null)
  }
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0])
  }

  const handleUpload = () => {
    // Perform upload logic here (e.g., send file to server)
    if (selectedFile) {
      console.log('Uploading file:', selectedFile)
      // You can implement upload functionality using Axios or Fetch API
    }
  }

  return (
    <div className="w-full h-full m-0 p-0">
      <div className="flex font-sans ... bg-white w-full h-1/2 justify-between">
        {/* User Details */}
        <div className="w-1/2 m-14 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">User Details</h1>
          {loading ? (
            <p className="m-1">Loading...</p>
          ) : expertdata ? (
            <div className="flex flex-col font-semibold mt-8 gap-1">
              <p>
                <strong className="text-xl font-semibold">Name:</strong>{' '}
                {expertdata.firstName} {expertdata.lastName}
              </p>
              <p>
                <strong className="text-xl font-semibold">Email:</strong>{' '}
                {expertdata.email}
              </p>
              {/* Add more details here as needed */}
            </div>
          ) : (
            <p>No user data available</p>
          )}
        </div>
        <div className="w-full">
          <img
            src="https://img.freepik.com/free-vector/business-teamwork-concept-teamwork-leadership-effort-hard-work-team-strategy-concept-brainstorm-workshop-management-skills-vector-cartoon-illustration-flat-design_1150-56223.jpg?w=740"
            alt="banner"
          />
        </div>
        {/* User Image */}
        <div className="w-1/2 p-10 pt-7 flex justify-end items-start">
          {expertdata && (
            <img
              src={expertdata.image}
              alt="User"
              className="w-20 h-20 rounded-full"
            />
          )}
        </div>
      </div>
      <div className="bg-white">
        <h1 className="ml-14 pt-6 mb-4 text-3xl font-bold">Documents</h1>
        <div className="flex pb-11">
          <div className="max-w-lg mt-6 mx-10 p-6 bg- rounded-lg shadow-md shadow-black">
            <h1 className="text-2xl font-semibold mb-4">Upload AdhaarCard</h1>
            <div className="flex items-center mb-4">
              <label
                htmlFor="file-upload"
                className="mr-2 cursor-pointer bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Select File
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <button
              onClick={handleUpload}
              className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Upload
            </button>
          </div>
          <div className="max-w-xl mx-10 mt-6 p-6 bg-white rounded-lg shadow-md shadow-black">
            <h1 className="text-2xl font-semibold mb-4">Upload Pancard</h1>
            <div className="flex items-center mb-4">
              <label
                htmlFor="file-upload"
                className="mr-2 cursor-pointer bg-white text-black  px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              >
                Select File
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            <button
              onClick={handleUpload}
              className="bg-black text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
