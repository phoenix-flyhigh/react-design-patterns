import type { User } from './types'

const Results = ({ data }: { data: User }) => {
    return (
        <div>
            <h2>
                Results Page
            </h2>
            <p>Hi {data.name} with role {data.role}</p>
            {data.role === 'ResultsViewer' || data.role === 'Admin' ?
                <p>Results data</p> : <p>Access Denied</p>
            }
        </div>
    )
}

export default Results