import React from 'react'
import { User } from '../types'

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {

    

  return (
    <div>
      {
        users.map(user => (
            <div>
                <h2>user.username</h2>
                <p>user.firstName</p>
            </div>
        ))

      }
    </div>
  )
}

export default UserList
