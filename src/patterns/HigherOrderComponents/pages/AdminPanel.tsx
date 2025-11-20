import type { User } from './types'

const AdminPanel = ({data}: {data: User}) => {
  
  return (
    <div>
      <h2>
        AdminPanel
      </h2>
      <p>Hi {data.name} with role {data.role}</p>
      {data.role === 'Admin' ?
      <p>Admin data</p> : <p>Access Denied</p>
      }
    </div>
    
  )
}

export default AdminPanel
