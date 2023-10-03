import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import TabContext from '@mui/lab/TabContext'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useState } from 'react'
import Icon from '@mdi/react'
import { mdiFileDocumentCheckOutline } from '@mdi/js'

export default function doc_updownTeacher() {
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', width: '100%', my: 6 }}>
                <Box>
                  <Icon path={mdiFileDocumentCheckOutline} size={6} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='h4'> Document for Teacher</Typography>
                  <Typography variant='subtitle1'> Download document and Upload Document sign Co-operative</Typography>
                </Box>
              </Box>
              <TabContext value={value}>
                <TabList onChange={handleChange} aria-label='card navigation example'>
                  <Tab value='1' label='Download Document' />
                  <Tab value='2' label='Upload Document ' />
                </TabList>
                <CardContent>
                  <TabPanel value='1' sx={{ p: 0 }}>
                    {/* <Box>{DataGrid Map }</Box> */}
                  </TabPanel>
                  <TabPanel value='2' sx={{ p: 0 }}>
                    {/* <Box>{Data Grid Map}</Box> */}
                  </TabPanel>
                </CardContent>
              </TabContext>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
