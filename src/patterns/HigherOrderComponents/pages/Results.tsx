import type { User } from './types'

const Results = ({ data }: { data: User }) => {
    return (
        <div>
            <h2>
                Results Page
            </h2>
            <p>Hi {data.name} with role {data.role}</p>
            <div style={{ border: "1px solid white", padding: "10px", borderRadius: "8px", marginTop: "10px" }}>
                {data.role === 'ResultsViewer' || data.role === 'Admin' ?
                    <p>Results data</p> : <p style={{ color: "red" }}>Access Denied</p>
                }
            </div>
        </div>
    )
}

export default Results