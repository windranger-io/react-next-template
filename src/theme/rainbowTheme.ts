import { darkTheme } from '@rainbow-me/rainbowkit'
const baseTheme = darkTheme()

/* more customization on https://www.rainbowkit.com/docs/custom-theme */
export const myCustomTheme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    accentColor: '#ddd',
    accentColorForeground: '#000',
    // actionButtonSecondaryBackground: 'green',
  },
  fonts: {
    ...baseTheme.fonts,
  },
  radii: {
    ...baseTheme.radii,
    actionButton: '0px',
    connectButton: '0px',
    menuButton: '3px',
    modal: '3px',
    modalMobile: '3px',
  },
  shadows: {
    ...baseTheme.shadows,
    connectButton: 'none',
    dialog: 'none',
    profileDetailsAction: 'none',
    selectedOption: 'none',
    selectedWallet: 'none',
    walletLogo: 'none',
  },
}
