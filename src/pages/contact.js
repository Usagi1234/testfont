import Grid from '@mui/material/Grid'
import {
  Box,
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import CardMedia from '@mui/material/CardMedia'

export default function contact() {
  const dummyData = [
    { nameInstructor: 'ผศ.สมหมาย สารมาท', contact: '098-5258488' },
    { nameInstructor: 'อาจารย์อรรถพล วิเวก', contact: '081-8839294' },
    { nameInstructor: 'อาจารย์กิตตินันท์ น้อยมณี', contact: '081-7846230' },
    { nameInstructor: 'อาจารย์ธนิต เกตุแก้ว', contact: '098-8289519' },
    { nameInstructor: 'อาจารย์ปณต พุกกะพันธุ๊', contact: '086-5601625' },
    { nameInstructor: 'อาจารย์สัญญา อุทธโยธา', contact: '085-0300081' }
  ]

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Typography variant='h5'>Contact</Typography>
              </Box>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ width: '80%' }}>
                  <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                      <TableHead>
                        <TableRow>
                          <TableCell align='left'>NAME Instructor</TableCell>
                          <TableCell align='center'>contact</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Object.values(dummyData)?.map((dummyData, index) => (
                          <TableRow key={index}>
                            <TableCell align='left'>{dummyData.nameInstructor}</TableCell>
                            <TableCell align='center'>{dummyData.contact}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
