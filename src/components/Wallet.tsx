interface ComponentProps {
  foo?: string
  bar?: boolean
}

const Component: React.FC<ComponentProps> = (): JSX.Element => {
  return <div></div>
}

export default Component
