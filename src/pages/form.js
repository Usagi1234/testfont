import Grid from '@mui/material/Grid'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export default function form() {
  const file_pdf1 = 'http://localhost:3000/form/coop_manual2-63.pdf'
  const file_pdf2 = 'http://localhost:3000/form/coop_form_01.pdf'
  const file_pdf3 = 'http://localhost:3000/form/coop_form_02TH.pdf'
  const file_pdf4 = 'http://localhost:3000/form/coop_form_02EN.pdf'
  const file_pdf5 = 'http://localhost:3000/form/coop_form_03.pdf'
  const file_pdf6 = 'http://localhost:3000/form/coop_form_04.pdf'
  const file_pdf7 = 'http://localhost:3000/form/coop_form_05.pdf'
  const file_pdf8 = 'http://localhost:3000/form/coop_form_06.pdf'
  const file_pdf9 = 'http://localhost:3000/form/coop_form_07.pdf'
  const file_pdf10 = 'http://localhost:3000/form/coop_form_report_65.pdf'

  const file_word2 = 'http://localhost:3000/form/coop_form_01.docx'
  const file_word3 = 'http://localhost:3000/form/coop_form_02TH.docx'
  const file_word4 = 'http://localhost:3000/form/coop_form_02EN.docx'
  const file_word5 = 'http://localhost:3000/form/coop_form_03.doc'
  const file_word6 = 'http://localhost:3000/form/coop_form_04.docx'
  const file_word7 = 'http://localhost:3000/form/coop_form_05.docx'
  const file_word8 = 'http://localhost:3000/form/coop_form_06.doc'
  const file_word9 = 'http://localhost:3000/form/coop_form_07.docx'
  const file_word10 = 'http://localhost:3000/form/coop_form_report_65.docx'

  const DownloadFileAtURL = url => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <TableContainer>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Typography variant='h5'>Form</Typography>
                </Box>
                <Box>
                  <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell>File Name</TableCell>
                        <TableCell>File</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Typography>คู่มือ โครงการพัฒนาทักษะวิชาชีพของนักศึกษา </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' onClick={() => DownloadFileAtURL(file_pdf1)}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.01_ฟอร์มโครงการพัฒนาทักษะวิชาชีพ </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }} onClick={() => DownloadFileAtURL(file_word2)}>
                            WORD
                          </Button>
                          <Button variant='contained' onClick={() => DownloadFileAtURL(file_pdf2)}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.02_ใบสมัครข้อมูลนักศึกษา (ภาษาไทย) </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }} onClick={() => DownloadFileAtURL(file_word3)}>
                            WORD
                          </Button>
                          <Button variant='contained' onClick={() => DownloadFileAtURL(file_pdf3)}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.02_ใบสมัครข้อมูลนักศึกษา (ภาษาอังกฤษ) </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }} onClick={() => DownloadFileAtURL(file_word4)}>
                            WORD
                          </Button>
                          <Button variant='contained' onClick={() => DownloadFileAtURL(file_pdf4)}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.03_แบบตอบรับนักศึกษาโครงการพัฒนาทักษะวิชาชีพ </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }} onClick={() => DownloadFileAtURL(file_word5)}>
                            WORD
                          </Button>
                          <Button variant='contained' onClick={() => DownloadFileAtURL(file_pdf5)}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.04_ใบประเมินผลฝึกงานนักศึกษา </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }} onClick={() => DownloadFileAtURL(file_word6)}>
                            WORD
                          </Button>
                          <Button variant='contained' onClick={() => DownloadFileAtURL(file_pdf6)}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.05_แบบตอบรับการนิเทศโครงการพัฒนาทักษะวิชาชีพ </Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }} onClick={() => DownloadFileAtURL(file_word7)}>
                            WORD
                          </Button>
                          <Button variant='contained' onClick={() => DownloadFileAtURL(file_pdf7)}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.06_แบบฟอร์มประเมินสถานประกอบการ</Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }} onClick={() => DownloadFileAtURL(file_word8)}>
                            WORD
                          </Button>
                          <Button variant='contained' onClick={() => DownloadFileAtURL(file_pdf8)}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>สก.วศ.07_แบบประเมินนักศึกษา (ระหว่างการนิเทศ)</Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }} onClick={() => DownloadFileAtURL(file_word9)}>
                            WORD
                          </Button>
                          <Button variant='contained' onClick={() => DownloadFileAtURL(file_pdf9)}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Typography>แบบฟอร์มรายงานการปฎิบัติงานสหกิจศึกษา</Typography>
                        </TableCell>
                        <TableCell>
                          <Button variant='contained' sx={{ mr: 6 }} onClick={() => DownloadFileAtURL(file_word10)}>
                            WORD
                          </Button>
                          <Button variant='contained' onClick={() => DownloadFileAtURL(file_pdf10)}>
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
