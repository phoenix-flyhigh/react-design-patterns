import type { HTMLAttributes } from 'react'

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
    label: string
}

const Tab = ({ label, ...rest }: TabProps) => {
    return (
        <div {...rest}>
            <h3>{label}</h3>
        </div>
    )
}

export default Tab