// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import TranslateIcon from '@mui/icons-material/Translate';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SchoolIcon from '@mui/icons-material/School';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { isLogged } from '../utils/auth';

const icons = {
  NavigationOutlinedIcon,
  ChromeReaderModeOutlinedIcon,
  TranslateIcon,
  SecurityOutlinedIcon,
  MonetizationOnOutlinedIcon,
  ErrorOutlineRoundedIcon,
  HourglassEmptyRoundedIcon,
  HelpOutlineOutlinedIcon,
  SchoolIcon,
  SportsSoccerIcon
};

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages = () => {
  return {
    id: 'pages',
  title: 'pages',
  caption: 'prebuild-pages',
  type: 'group',
  icon: icons.NavigationOutlinedIcon,
  children: [
    {
      id: 'facultades',
      title: 'Facultades',
      type: 'item',
      url: '/facultades',
      icon: icons.SchoolIcon
    },
    {
      id: 'sample-page',
      title: 'Publicaciones',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeReaderModeOutlinedIcon
    },
    {
      id: 'disciplinas',
      title: 'Disciplinas',
      type: 'item',
      url: '/disciplinas',
      icon: icons.SportsSoccerIcon
    },
    ...(!isLogged()
  ?[
    {
      id: 'auth',
      title: 'Autenticacion',
      type: 'collapse',
      icon: icons.SecurityOutlinedIcon,
      children: [
        {
          id: 'login-1',
          title: 'Login',
          type: 'item',
          url: '/pages/auth/login',
          target: '_blank'
        },
        {
          id: 'register',
          title: 'Registrarse',
          type: 'item',
          url: '/pages/auth/register',
          target: '_blank'
        }
      ]
    }
  ]
:[]),
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
      icon: icons.HelpOutlineOutlinedIcon,
      chip: {
        label: 'Help?',
        color: 'primary'
      },
      external: true,
      target: '_blank'
    }
  ]
  }
  
};

export default pages;
