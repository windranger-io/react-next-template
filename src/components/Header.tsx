interface HeaderProps {
  foo?: string
}

export default function Header({}: HeaderProps) {
  return (
    <div className="flex h-32 bg-gray-100 justify-center items-center">
      Hey 👋
    </div>
  )
}
