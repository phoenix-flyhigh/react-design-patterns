import AdminPanel from "./pages/AdminPanel"
import Profile from "./pages/Profile"
import Results from "./pages/Results"
import withAuthWrapper from "./withAuthWrapper"
import { AuthProvider } from "./AuthContext"

const HigherOrderComponents = () => {

  const ProfileWithAuth = withAuthWrapper(Profile)
  const AdminPanelWithAuth = withAuthWrapper(AdminPanel)
  const ResultsWithAuth = withAuthWrapper(Results

  )
  return (
    <AuthProvider>
      <div style={{width: "100%"}}>
        <h2>HigherOrderComponents</h2>
        <div style={{ display: 'flex', width: "100%", justifyContent: "space-around" }}>
          <ProfileWithAuth />
          <AdminPanelWithAuth />
          <ResultsWithAuth />
        </div>
      </div>
    </AuthProvider>
  )
}

export default HigherOrderComponents