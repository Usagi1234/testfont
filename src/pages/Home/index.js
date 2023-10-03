// ** MUI Imports
import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import Icon from '@mdi/react'
import { mdiHandshake } from '@mdi/js'
import { mdiInformationOutline } from '@mdi/js'
import { mdiCalendarMonth } from '@mdi/js'
import { mdiPhone } from '@mdi/js'
import { mdiListBoxOutline } from '@mdi/js'
import { mdiAutorenew } from '@mdi/js'
import { mdiNewspaper } from '@mdi/js'
import Link from 'next/link'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/dashboard/Table'
import Trophy from 'src/views/dashboard/Trophy'
import TotalEarning from 'src/views/dashboard/TotalEarning'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import DepositWithdraw from 'src/views/dashboard/DepositWithdraw'
import SalesByCountries from 'src/views/dashboard/SalesByCountries'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <Icon path={mdiHandshake} size={6} />
                <Box>
                  <Typography variant='h5' sx={{ ml: 4 }}>
                    Co-Operative
                  </Typography>

                  <Typography variant='body2' sx={{ letterSpacing: '0.25px', ml: 4 }}>
                    It is a study plan that will help you provide engineering graduates with practical experience in the
                    workplace.
                  </Typography>
                  <Link href='/cooperative' passHref legacyBehavior>
                    <Button size='small' variant='contained' sx={{ ml: 40, mt: 10 }}>
                      View detial
                    </Button>
                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <Icon path={mdiInformationOutline} size={6} />
                <Box>
                  <Typography variant='h5' sx={{ ml: 4 }}>
                    About
                  </Typography>

                  <Typography variant='body2' sx={{ letterSpacing: '0.25px', ml: 4 }}>
                    A study program aimed at engineering graduates to gain experience and enhance their practical
                    knowledge in the workplace.
                  </Typography>
                  <Link href='/about' passHref legacyBehavior>
                    <Button size='small' variant='contained' sx={{ ml: 40, mt: 10 }}>
                      View detial
                    </Button>
                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <Icon path={mdiCalendarMonth} size={5} />
                <Box>
                  <Typography variant='h5' sx={{ ml: 4 }}>
                    Calendar
                  </Typography>

                  <Typography variant='body2' sx={{ letterSpacing: '0.25px', ml: 4 }}>
                    Cooperative Education Calendar Internships Student Vocational Skills Development Project
                  </Typography>
                  <Link href='/calendar' passHref legacyBehavior>
                    <Button size='small' variant='contained' sx={{ ml: 40, mt: 10 }}>
                      View detial
                    </Button>
                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <Icon path={mdiPhone} size={5} />
                <Box>
                  <Typography variant='h5' sx={{ ml: 4 }}>
                    Contact
                  </Typography>

                  <Typography variant='body2' sx={{ letterSpacing: '0.25px', ml: 4 }}>
                    Contact Cooperative Education Head of Cooperative Education and Lecturer in Computer Engineering
                  </Typography>
                  <Link href='/contact' passHref legacyBehavior>
                    <Button size='small' variant='contained' sx={{ ml: 40, mt: 10 }}>
                      View detial
                    </Button>
                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <Icon path={mdiListBoxOutline} size={4} />
                <Box>
                  <Typography variant='h5' sx={{ ml: 4 }}>
                    Form
                  </Typography>

                  <Typography variant='body2' sx={{ letterSpacing: '0.25px', ml: 4 }}>
                    Forms and regulations related to cooperative education, internship
                  </Typography>
                  <Link href='/form' passHref legacyBehavior>
                    <Button size='small' variant='contained' sx={{ ml: 40, mt: 10 }}>
                      View detial
                    </Button>
                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex' }}>
                <Icon path={mdiNewspaper} size={5} />
                <Box>
                  <Typography variant='h5'>NEWS</Typography>

                  <Typography variant='body2' sx={{ letterSpacing: '0.25px', ml: 4 }}>
                    Various news related to cooperative education
                  </Typography>
                  <Link href='/news' passHref legacyBehavior>
                    <Button size='small' variant='contained' sx={{ ml: 32, mt: 10 }}>
                      View detial
                    </Button>
                  </Link>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
