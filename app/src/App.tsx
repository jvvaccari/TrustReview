import { Box, Stack, ThemeProvider } from '@mui/material'
import './App.css'
import Search from './components/Search'
import { defaultTheme } from './theme/default'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <Stack sx={{ width: '100vw', height: '100vh', bgcolor: 'background.default', alignItems: 'center', justifyContent: 'center' }}>
      <Box>
        <Search value={''} onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.')
        }} />
      </Box>
    </Stack>
    </ThemeProvider>
  )
}

export default App
