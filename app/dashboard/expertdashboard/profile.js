import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getstudentdata } from '@/frontendservices/operations/studentdash'
import { useDispatch } from 'react-redux'
import { endpoints } from '@/frontendservices/api'
import { useSelector } from 'react-redux';

const UserDetails = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const {user} = useSelector( (state) => state.profile );
  console.log(user);


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
    <div>
    <h1>User Details</h1>
    {user ? (
        <div>
            <p>
                <strong>Name:</strong> {user.firstName} {user.lastName}
            </p>
            <p>
                <strong>Email:</strong> {user.email}
            </p>
            <p>
                <img
                    src={user.image}
                    alt="User"
                    style={{ width: '100px', height: '100px' }}
                />
            </p>
        </div>
    ) : (
        <>
            <h1>no user found</h1>
        </>
    )}
</div>

  )
}

export default UserDetails
