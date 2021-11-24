import { ReactNode } from 'react'

interface CardProps {
  children?: ReactNode
}

/*
 * More functionality can be added to the Card component. These should be pretty versatile
 *
 */
const Card: React.FC<CardProps> = ({ children }): JSX.Element => {
  return (
    <div className="bg-gray-50 overflow-hidden dark:bg-gray-950 sm:rounded-lg">
      {children}
    </div>
  )
}

export default Card
