import { FC, ReactNode, useCallback, useState, SyntheticEvent } from 'react';
import { LoveDeathRobots } from 'love-death-robots';
import { Link, Box, Button, Container, createTheme, CssBaseline, IconButton, Stack, ThemeProvider, Typography, Tab } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { yellow, grey, blue, purple, green, red } from '@mui/material/colors';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import ReactDOMServer from 'react-dom/server';
import Favicon from 'react-favicon';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/tomorrow-night';

import { usePalette } from '../palette/palette';
import { Theme } from '../theme/theme';

enum PACKAGE_MANAGES {
  NPM = 'npm',
  PNPM = 'pnpm',
  YARN = 'yarn',
}

const INSTALLATIONS = {
  [PACKAGE_MANAGES.NPM]: 'npm i --save @dmytropaduchak/love-death-robots',
  [PACKAGE_MANAGES.PNPM]: 'pnpm add @dmytropaduchak/love-death-robots',
  [PACKAGE_MANAGES.YARN]: 'yarn add @dmytropaduchak/love-death-robots',
}

const svgToUrl = (component: ReactNode) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(component);
  const encodedSvg = encodeURIComponent(svgString)
    .replace(/%0A/g, '')
    .replace(/%20/g, ' ')
    .replace(/%3D/g, '=')
    .replace(/%3A/g, ':')
    .replace(/%2F/g, '/');
  return `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
};

export const App: FC = () => {
  const [packageManager, setPackageManager] = useState(PACKAGE_MANAGES.NPM);
  const palette = usePalette();
  const theme = createTheme({ palette });
  const url = svgToUrl(<LoveDeathRobots color="white" />);

  const onChange = useCallback((_: SyntheticEvent, newValue: PACKAGE_MANAGES) => {
    setPackageManager(newValue);
  }, [setPackageManager]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Favicon url={url} />
      <Container maxWidth="md" sx={{ minHeight: 'calc(100vh - 36px)' }}>
        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h2">
            Love, Death + Robots SVG icon
          </Typography>
          <Typography variant="body1">
            A React library that provides beautifully designed SVG icons inspired by the aesthetics of Love, Death + Robots. Perfect for modern UIs, this lightweight package offers customizable and scalable icons to enhance your web or mobile applications.
          </Typography>
        </Box>

        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h5">
            Installation
          </Typography>
          <Typography variant="body1">
            Run one of the following commands to install it and save it to your package.json dependencies
          </Typography>
          <Box sx={{
            borderRadius: '8px',
            width: '100%',
            typography: 'body1',
            backgroundColor: 'rgb(29, 31, 33)',
            marginTop: 1,
            '& .MuiTabs-root': {
              minHeight: 'auto',
              'button': {
                maxWidth: 'auto',
                minWidth: 'auto',
                minHeight: 'auto',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '10px',
              }
            },
          }}>
            <TabContext value={packageManager}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={onChange}>
                  {Object.keys(INSTALLATIONS).map((i, key) => (
                    <Tab label={i} value={i} key={key} />
                  ))}
                </TabList>
              </Box>
              {Object.keys(INSTALLATIONS).map((i, key) => (
                <TabPanel key={key} value={i} sx={{
                  p: 1,
                  pre: {
                    margin: 0
                  }
                }}>
                  <SyntaxHighlighter language="bash" style={style}>
                    {INSTALLATIONS[i as PACKAGE_MANAGES]}
                  </SyntaxHighlighter>
                </TabPanel>
              ))}
            </TabContext>
          </Box>
        </Box>

        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h5">
            Usage
          </Typography>
          <Typography variant="body1">
            To start using the icons, first import the desired component from the library
          </Typography>
          <Box sx={{
            'pre': {
              margin: '0px !important',
              padding: '1em !important',
              borderRadius: '8px',
            },
            width: '100%',
            marginTop: 1,
            marginBottom: 2,
          }}>
            <SyntaxHighlighter language="typescript" style={style}>
              {`import { LoveDeathRobots } from '@dmytropaduchak/love-death-robots';`}
            </SyntaxHighlighter>
          </Box>
        </Box>

        <Box sx={{
          marginBottom: 2,
        }}>
          <Typography variant="h5">
            Color
          </Typography>
          <Typography variant="body1">
            Customize the color of the icon by passing the color prop. This allows you to match the icon’s appearance to your design or theme
          </Typography>

          <Box sx={{
            'pre': {
              margin: '0px !important',
              padding: '1em !important',
              borderRadius: '8px',
            },
            width: '100%',
            marginTop: 1,
            marginBottom: 1,
          }}>
            {/* <SyntaxHighlighter language="typescript" style={style}>
              {`<LoveDeathRobotIcon color="#9e9e9e" />
<LoveDeathRobotIcon color="#2196f3" />
<LoveDeathRobotIcon color="#9c27b0" />
<LoveDeathRobotIcon color="#4caf50" />
<LoveDeathRobotIcon color="#f44336" />
<LoveDeathRobotIcon color="#ffeb3b" />`}
            </SyntaxHighlighter> */}
          </Box>

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

      </Container>
      <Container maxWidth="md" sx={{
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
            <Theme />
          </Link>
      </Container>
    </ThemeProvider>
  )
}

