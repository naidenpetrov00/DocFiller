import { Box, Typography, useTheme, ButtonBase } from '@mui/material';
import backgroundPhoto from '../../../assets/images/IMG_2990.webp';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundPhoto})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 24 }}>
        <Typography variant="h1" fontFamily={'cursive'}>
          ЧСИ НЕДЕЛЧО МИТЕВ
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 24 }}>
        <ButtonBase
          component={Link}
          to={'/test'} // Replace with the actual path
          sx={{
            width: 320,
            height: 160,
            textDecoration: 'none',
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 8,
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: theme.palette.secondary.light, // Optional hover effect
            },
          }}
        >
          <Typography
            variant="h4"
            fontFamily={'sans-serif'}
            color="textPrimary"
          >
            ПОПЪЛНИ ДОКУМЕНТИ
          </Typography>
        </ButtonBase>
      </Box>
    </Box>
  );
};
