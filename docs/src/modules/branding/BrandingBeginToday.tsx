import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'docs/src/modules/components/Link';
import Grid from '@material-ui/core/Grid';
import UnderlinedText from 'docs/src/modules/branding/UnderlinedText';
import { styled } from '@material-ui/core/styles';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import FeedbackIcon from 'docs/src/modules/branding/icons/Feedback';
import ChangesIcon from 'docs/src/modules/branding/icons/Changes';
import FinanceIcon from 'docs/src/modules/branding/icons/Finance';
import HelpIcon from 'docs/src/modules/branding/icons/Help';
import OpenCollectiveIcon from 'docs/src/modules/branding/icons/OpenCollective';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';


const SupportCard = styled((props: any) => {
  const { color, icon, title, children, ...other } = props;
  return (
    <Card elevation={0} {...other}>
      <CardHeader avatar={<Avatar aria-label={title}>{icon}</Avatar>} />
      <CardContent>
        <Typography variant="h3">{title}</Typography>
        <Typography component="div">{children}</Typography>
      </CardContent>
    </Card>
  );
})(({ color = 'primary', theme }) => ({
  '& [class*="MuiAvatar-root"]': {
    background: color === 'info' ? theme.palette.vividBlue : theme.palette.primary.main,
    width: 80,
    height: 80,
  },
}));

export default function BrandingBeginToday() {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box
        component="img"
        src="/static/branding/block5.png"
        alt=""
        sx={{
          height: '100%',
          position: 'absolute',
          left: {
            md: -160,
            lg: 0,
          },
          display: {
            xs: 'none',
            md: 'block',
          },
          bottom: 0,
        }}
      />
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          py: { xs: 17, sm: 18, md: 16 },
        }}
      >
        <Box
          component="img"
          src="/static/branding/block1-blue.svg"
          alt=""
          sx={{
            width: 293,
            height: 120,
            position: 'absolute',
            right: 0,
            top: 'calc(100% - 81px)',
            zIndex: 200,
            visibility: ['hidden', 'visible'],
          }}
        />
        <Typography variant="h2" align="center">
          Begin with Material-UI today
        </Typography>
        <Typography align="center" sx={{ mt: 2, mb: 4, fontSize: [16, 18] }}>
          Start with Material-UI and discover the benefits
        </Typography>
        <Button
          component={Link}
          noLinkStyle
          href="/getting-started/usage/"
          size="large"
          variant="contained"
          endIcon={<NavigateNextIcon />}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}
