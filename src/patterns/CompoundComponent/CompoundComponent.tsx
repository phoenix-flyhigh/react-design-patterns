import React from 'react'
import Tab from './Tab'
import Tabs from './Tabs';

const CustomTabPanel = (props: { children?: React.ReactNode; tabId: number; selectedTabIndex: number }) => {
    const { children, selectedTabIndex, tabId, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={selectedTabIndex !== tabId}
            id={`simple-tabpanel-${tabId}`}
            aria-labelledby={`simple-tab-${tabId}`}
            style={{ width: '100%', textAlign: 'left', border: '1px solid #ddd', padding: '16px', height: '100px' }}
            {...other}
        >
            {selectedTabIndex === tabId && (
                <div>{children}</div>
            )}
        </div>
    )
}

const CompoundComponent = () => {
    const [openTabIndex, setOpenTabIndex] = React.useState(0)

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }

    const handleChange = (currentTabIndex: number) => {
        setOpenTabIndex(currentTabIndex)
    }

    return (
        <div className='tabs-container'>
            <Tabs value={openTabIndex} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
            <CustomTabPanel selectedTabIndex={openTabIndex} tabId={0}>
                Item One
            </CustomTabPanel>
            <CustomTabPanel selectedTabIndex={openTabIndex} tabId={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel selectedTabIndex={openTabIndex} tabId={2}>
                Item Three
            </CustomTabPanel>
        </div>
    )
}

export default CompoundComponent