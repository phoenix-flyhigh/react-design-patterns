import { Toggle } from './Toggle'


const ShowModal = (isOpen: boolean, handleToggle: () => void) => {
    return (
        <div>
            <button onClick={handleToggle}>{isOpen ? "Close" : "Open"} Modal</button>

            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    width: '70%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    border: '1px solid white',
                    color: "white",
                    zIndex: 1000,
                }}>
                    <h2>Modal Title</h2>
                    <p>This is a modal content.</p>
                    <button onClick={handleToggle}>Close Modal</button>
                </div>
            )}
        </div>
    )
}

const ShowDropdown = (isOpen: boolean, handleToggle: () => void) => {
    return (
        <div>
            <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"} Dropdown</button>

            {isOpen && (
                <div style={{

                    marginTop: '10px',
                    padding: '10px',
                    border: '1px solid white',
                    color: "white",
                    width: '150px',
                }}>
                    <ul style={{
                        display: 'flex',
                        flexDirection: 'column',
                        listStyleType: 'none',
                        padding: 0,
                        margin: 0
                    }}>
                        <li>Option 1</li>
                        <li>Option 2</li>
                    </ul>
                </div>
            )}
        </div>
    )
}


const RenderPropsPattern = () => {
    return (
        <div style={{ display: 'flex', gap: '40px' }}>
            <Toggle renderProps={ShowModal} />
            <Toggle renderProps={ShowDropdown} />
        </div>

    )
}

export default RenderPropsPattern