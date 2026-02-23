import UserList from '@/features/user/components/UserList'
import { User } from '@/features/user/types'
import React from 'react'

const users: User[] = [
    {
        id: '1',
        username: 'phanith',
        firstName: 'phanith',
        lastName: 'nhoem'
    }
]

const page = () => {
    
  return (
    <UserList users={users}/>
  )
}

export default page
