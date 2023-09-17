import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Search from '../components/Search'
import Box from '@mui/material/Box'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import Grid from '@mui/material/Unstable_Grid2'

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Root = () => {
  return (
    <div>
        <header>
            <nav>
              <Box sx={{ flexGrow: 1 }}
              display='flex' 
              flexDirection='row' 
              justifyContent='center'
              alignItems='center'
              padding={2}>
                <Grid container spacing={2}>
                  <Grid xs={2}>
                    <Link to="/">
                      <HomeIcon fontSize='large'/>
                    </Link>
                  </Grid>
                  <Grid xs={10}>
                    <Search/>
                  </Grid>
                </Grid>
              </Box>
            </nav>
        </header>
        <Outlet/>
        <footer>
        </footer>
    </div>
  )
}

export default Root