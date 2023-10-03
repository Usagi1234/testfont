// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV1 from 'src/views/pages/auth/FooterIllustration'
import axios from 'axios'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import Swal from 'sweetalert2'

// import Cookies from 'js-cookie'
import cookieCutter from 'cookie-cutter'
import Cookies from 'js-cookie'

const now = new Date()

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const LoginPage = () => {
  // ** State
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false
  })

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const [success, setSuccess] = useState(null)

  const submitForm = () => {
    // ตรวจสอบ API authenticationtea
    // console.log('username', values.email)
    // console.log('password', values.password)

    axios
      .post('http://localhost:3200/api/authenticationcom', {
        username: values.email,
        password: values.password
      })
      .then(teaData => {
        if (teaData.data.statusCode !== 404) {
          // ถ้าไอดีตรงใน authenticationtea
          Cookies.set('._jwtUsername', teaData.data.jwt, { path: '/' })
          Cookies.set('._jwtRole', teaData.data.jwtRole, { path: '/' })
          setSuccess(true)
        }
      })
      .catch(error => {
        console.error('Error calling authenticationscom API:', error)
      })
  }

  useEffect(() => {
    if (success === false) {
      Toast.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'username & password is wrong'
      })
      setSuccess(null)
    } else if (success === true) {
      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
      setSuccess(null)
      setTimeout(() => {
        window.location.href = '/Home'
      }, 1000)
    }
  }, [success])

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  // Add a handleChange function to update the state values for email and password
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  // Add a handleClickShowPassword function and handleMouseDownPassword
  // to toggle password visibility
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  // Add a handleSubmit function to handle form submission
  const handleSubmit = e => {
    e.preventDefault()
    submitForm()
  }

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: `${theme.spacing(12)} ${theme.spacing(9)} ${theme.spacing(7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '1.5rem !important'
              }}
            >
              Login(Company)!👋🏻
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              id='email'
              label='Email'
              sx={{ marginBottom: 4 }}
              value={values.email}
              onChange={handleChange('email')}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'> Password </InputLabel>
              <OutlinedInput
                label='Password'
                value={values.password}
                onChange={handleChange('password')}
                id='auth-login-password'
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <FormControlLabel control={<Checkbox />} label='Remember Me' />
              <Link passHref href='/'>
                <LinkStyled onClick={e => e.preventDefault()}>Forgot Password?</LinkStyled>
              </Link>
            </Box>
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{ marginBottom: 7 }}
              type='submit' // change onClick to type="submit"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default LoginPage
