import { FC } from 'react';
import { LoveDeathRobots } from 'love-death-robots';
import { Link, Box, Button, Container, createTheme, CssBaseline, IconButton, Stack, ThemeProvider, Typography } from '@mui/material';
import { yellow, grey, blue, purple, green, red } from '@mui/material/colors';
import { usePalette } from '../palette/palette';
import { GitHub } from '@mui/icons-material';

export const App: FC = () => {
  const palette = usePalette();
  const theme = createTheme({ palette });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h2">
            Love, Death + Robots SVG icon
          </Typography>
          <div>
            ...
          </div>
        </Box>

        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h5">
            Installation
          </Typography>
          <Typography variant="body1">
            Run one of the following commands to install it and save it to your package.json dependencies:
          </Typography>
          <div>
            ...
          </div>
        </Box>

        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h5">
            Usage
          </Typography>
          <Typography variant="body1">
            Import icons using one of these two options:
          </Typography>
          <div>
            ...
          </div>
        </Box>

        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h5">
            Color
          </Typography>
          <Stack spacing={1} direction="row" alignItems="center">
            <LoveDeathRobots />
            <LoveDeathRobots color={grey[500]} />
            <LoveDeathRobots color={blue[500]} />
            <LoveDeathRobots color={purple[500]} />
            <LoveDeathRobots color={green[500]} />
            <LoveDeathRobots color={red[500]} />
            <LoveDeathRobots color={yellow[500]} />
          </Stack>
        </Box>

        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h5">
            Different Color
          </Typography>
          <Stack spacing={1} direction="row" alignItems="center">
            <LoveDeathRobots color={[blue[500], 'currentColor', 'currentColor']} />
            <LoveDeathRobots color={['currentColor', purple[500], 'currentColor']} />
            <LoveDeathRobots color={['currentColor', 'currentColor', red[500]]} />
          </Stack>
        </Box>

        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h5">
            Size
          </Typography>
          <Stack spacing={1} direction="row" alignItems="center">
            <LoveDeathRobots size={18}/>
            <LoveDeathRobots size={24}/>
            <LoveDeathRobots size={35}/>
            <LoveDeathRobots size={40}/>
          </Stack>
        </Box>


        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h5">
            Buttons with icon
          </Typography>
          <Stack spacing={1} direction="row" alignItems="center">
            <IconButton size="small">
              <LoveDeathRobots />
            </IconButton>

            <IconButton size="small">
              <LoveDeathRobots size={18}/>
            </IconButton>
          </Stack>
        </Box>

        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h5">
            Buttons with icon and label
          </Typography>
          <Stack spacing={1} direction="row" alignItems="center">
            <Button variant="outlined" size="small" startIcon={<LoveDeathRobots />}>
              Love, Death + Robots
            </Button>
            <Button variant="contained" size="small" startIcon={<LoveDeathRobots />}>
              Love, Death + Robots
            </Button>
          </Stack>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'end' ,
          justifyContent: 'space-between',
          padding: '8px 8px 8px 12px',
        }}>
          <Typography variant="caption" display="block" color="textSecondary">
            © {new Date().getFullYear()} Love, Death + Robots SVG icon
          </Typography>
          <Link href="https://github.com/dmytropaduchak" target="_blank" underline="none" sx={{ display: 'flex', alignItems: 'center', fontSize: 12 }}>
            <GitHub sx={{ marginRight: 1, fontSize: 12 }}/>
            Dmytro Paduchak
          </Link>
          {/* <Box>
            <Settings />
          </Box> */}
        </Box>
      </Container>
    </ThemeProvider>
  )
}

