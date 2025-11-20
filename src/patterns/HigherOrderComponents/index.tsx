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
      <div>
        <h2>HigherOrderComponents</h2>
        <div style={{ display: 'flex', gap: '200px' }}>
          <ProfileWithAuth />
          <AdminPanelWithAuth />
          <ResultsWithAuth />
        </div>
      </div>
    </AuthProvider>
  )
}

export default HigherOrderComponents