import { Children, cloneElement, isValidElement, type ReactNode, type ReactElement } from 'react'
import type { TabProps } from './Tab'

type TabsProps = {
    value: number
    onChange: (index: number) => void
    children: ReactElement<TabProps> | ReactElement<TabProps>[] | ReactNode
}

const Tabs = ({ value: selectedTabIndex, onChange, children, ...rest }: TabsProps) => {
    return (
        <div {...rest} style={{ display: 'flex', gap: '24px', width: '100%' }}>{
            Children.map(children, (child, idx) =>
                isValidElement(child)
                    ? (() => {
                        const childProps = (child.props ?? {}) as Record<string, any>
                        const id = childProps.id ?? `simple-tab-${idx}`
                        const ariaControls = childProps['aria-controls'] ?? `simple-tabpanel-${idx}`

                        return cloneElement(child as ReactElement<TabProps>, {
                            id,
                            'aria-controls': ariaControls,
                            'aria-selected': selectedTabIndex === idx,
                            role: 'tab',
                            tabIndex: 0,
                            onClick: () => onChange(idx),
                            style: {
                                cursor: 'pointer',
                                backgroundColor: selectedTabIndex === idx ? 'lightblue' : 'black',
                                color: selectedTabIndex === idx ? 'black' : 'gray',
                                padding: '0 16px',
                                borderRadius: '4px',
                                border: 'none',
                                outline: 'none',
                                fontWeight: selectedTabIndex === idx ? 'bold' : 'normal',
                            }
                        })
                    })()
                    : child
            )
        }</div>
    )
}

export default Tabs