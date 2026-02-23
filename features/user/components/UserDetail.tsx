import React from 'react'
import { User } from '../types';

interface UserDetailProps {
    user: User;
}

const UserDetail = ({ user }: UserDetailProps) => {
  return (
    <div>
      <h1>user.username</h1>
      <p>user.firstName</p>
    </div>
  )
}

export default UserDetail
