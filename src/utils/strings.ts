export const shortenAddress = (address: string | null | undefined): string => {
  if (address === undefined || address === null) return 'Undefined'

  return `${address.substring(6, 0)}...${address.substring(
    address.length - 4,
    address.length
  )}`
}

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}
