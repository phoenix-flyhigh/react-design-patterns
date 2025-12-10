import type { User } from './types'

const AdminPanel = ({ data }: { data: User }) => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h2>
        AdminPanel
      </h2>
      <p>Hi {data.name} with role {data.role}</p>
      <div style={{ border: "1px solid white", padding: "10px", borderRadius: "8px", marginTop: "10px" }}>
        {data.role === 'Admin' ?
          <p>Admin data</p> : <p style={{ color: "red" }}>Access Denied</p>
        }
      </div>
    </div>

  )
}

export default AdminPanel
