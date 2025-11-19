import { useState, type JSX } from 'react'

type ToggleProps = {
  renderProps: (isOpen: boolean, handleToggle: () => void) => JSX.Element
}

const Toggle = ({ renderProps }: ToggleProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(prev => !prev)

  return (
    <div>
      {renderProps(isOpen, handleToggle)}
    </div>
  )
}

export { Toggle }