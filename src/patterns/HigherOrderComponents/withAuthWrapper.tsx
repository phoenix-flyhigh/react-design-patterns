import React, { useEffect } from 'react'
import type { User } from './pages/types'
import { useAuthContext } from './AuthContext'

function withAuthWrapper<P extends { data: User }>(WrappedComponent: React.ComponentType<P>) {
    return function AuthFunction(props: Omit<P, 'data'>) {

        const { user, setUser } = useAuthContext()

        useEffect(() => {
            const adminUser: User = {
                id: 1,
                name: 'John Doe',
                email: 'john.doe@gmail.com',
                role: 'Admin'
            }
            const user: User = {
                id: 2,
                name: 'Jane Smith',
                email: 'jane.smith@gmail.com',
                role: 'User'
            }
            const resultsViewer: User = {
                id: 3,
                name: 'Bob Viewer',
                email: 'bob.viewer@gmail.com',
                role: 'ResultsViewer'
            }

            const fetchUser = async () => {
                setTimeout(() => {
                    const random = Math.random();
                    if (random < 0.33) setUser(adminUser)
                    else if (random < 0.66) setUser(resultsViewer)
                    else
                        setUser(user)
                }, 1000);
            }
            fetchUser()
        }, [])
        if (!user) {
            return <div>Loading...</div>
        }
        return (
            <>
                <WrappedComponent {...(props as P)} data={user} />
            </>
        )
    }
}

export default withAuthWrapper