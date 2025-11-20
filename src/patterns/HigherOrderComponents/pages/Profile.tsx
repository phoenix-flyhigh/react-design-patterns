import type { User } from './types'

const Profile = ({data} : {data: User}) => {
  return (
    <div>
      <h2>
        Profile page 
      </h2>
      <p>Hi  {data.name} with role {data.role} </p>
      <p>Email ID: {data.email}</p>
    </div>
  )
}

export default Profile