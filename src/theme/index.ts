import { extendTheme } from '@chakra-ui/react'
import { Button } from './Button'

export const theme = extendTheme({
  components: { Button },
  styles: {
    global: {
      //** */
      body: {},
    },
  },
})
