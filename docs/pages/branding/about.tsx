import * as React from 'react';
import BrandingRoot from 'docs/src/modules/branding/BrandingRoot';
import BrandingBeginToday from 'docs/src/modules/branding/BrandingBeginToday';

export default function Page() {
  return (
    <BrandingRoot>
      <BrandingBeginToday/>
      <About />
    </BrandingRoot>
  );
}

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Quote from 'docs/src/modules/branding/Quote';
import BulletItem from 'docs/src/modules/branding/BulletItem';
import UnderlinedText from 'docs/src/modules/branding/UnderlinedText';
import Persona from 'docs/src/modules/branding/Persona';
import FeedbackIcon from 'docs/src/modules/branding/icons/Feedback';
import ChangesIcon from 'docs/src/modules/branding/icons/Changes';
import FinanceIcon from 'docs/src/modules/branding/icons/Finance';
import HelpIcon from 'docs/src/modules/branding/icons/Help';
import OpenCollectiveIcon from 'docs/src/modules/branding/icons/OpenCollective';
import ArrowCirleIcon from 'docs/src/modules/branding/icons/ArrowCircle';

const AboutUsRoot = styled(Box)<{}>(({ theme }) => ({
  '& .MuiGrid-relative': {
    position: 'relative',
  },
  '& .MuiGrid-bottomGutter': {
    marginBottom: theme.spacing(10),
  },
  '& .MuiGrid-centered': {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(30),
      paddingRight: theme.spacing(30),
    },
  },
  '& .MuiGrid-centered-content': {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(25),
      paddingRight: theme.spacing(25),
    },
  },
  '& .MuiGrid-imageWrapper': {
    width: '100%',
  },
  '& .MuiGrid-statistics': {
    [theme.breakpoints.up('xs')]: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
      marginLeft: theme.spacing(12),
    },
    width: 370,
  },
  '& .MuiGrid-panel': {
    [theme.breakpoints.up('xs')]: {
      '&.MuiGrid-panel': {
        padding: `${theme.spacing(3)} ${theme.spacing(1)}`,
      },
    },
    [theme.breakpoints.up('md')]: {
      '&.MuiGrid-panel': {
        padding: `${theme.spacing(10)} ${theme.spacing(12)}`,
      },
    },
  },
  '& .MuiGrid-panelSmallPadding': {
    [theme.breakpoints.up('xs')]: {
      '&.MuiGrid-panelSmallPadding': {
        padding: `${theme.spacing(6)} ${theme.spacing(2)}`,
      },
    },
    [theme.breakpoints.up('md')]: {
      '&.MuiGrid-panelSmallPadding': {
        padding: `${theme.spacing(5)} ${theme.spacing(6)}`,
      },
    },
  },
  '& .MuiGrid-panelInverted': {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
  '& .MuiGrid-smallLeftSpacing': {
    [theme.breakpoints.up('md')]: {
      '&.MuiGrid-smallLeftSpacing': {
        paddingLeft: theme.spacing(8),
      },
    },
  },
  '& .MuiGrid-team': {
    background: theme.palette.greyF3,
    [theme.breakpoints.up('xs')]: {
      '&.MuiGrid-team': {
        paddingBottom: theme.spacing(15),
      },
    },
  },
  '& .MuiGrid-company': {
    background: theme.palette.greyEA,
    padding: '100px',
    [theme.breakpoints.up('xs')]: {
      '&.MuiGrid-company': {
        paddingBottom: theme.spacing(17),
      },
    },
  },
  '& .MuiGrid-contributors': {
    background: theme.palette.greyF3,
    padding: '100px',
    [theme.breakpoints.up('xs')]: {
      '&.MuiGrid-contributors': {
        paddingBottom: theme.spacing(12),
      },
    },
  },
  '& .MuiGrid-emeriti': {
    background: theme.palette.greyEA,
    padding: '100px',
  },
  '& .MuiGrid-joinOurTeam': {
    [theme.breakpoints.up('xs')]: {
      padding: `${theme.spacing(10)} ${theme.spacing(5)}`,
    },
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(20)} ${theme.spacing(15)}`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing(30)} ${theme.spacing(35)}`,
    },
    position: 'relative',
    overflow: 'hidden',
    '& [class*="MuiButton-root"]': {
      background: 'white',
      color: theme.palette.secondary.main,
      '&:hover': {
        background: '#D2D2D2',
      },
      '&:active': {
        background: 'white',
      },
    },
  },
  '& .MuiGrid-supportCardsWrapper': {
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(6),
    },
  },
  '& .MuiGrid-ourValues': {
    '&.MuiGrid-ourValues': {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.up('xs')]: {
        '&.MuiGrid-ourValues': {
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
        },
      },
      [theme.breakpoints.up('md')]: {
        '&.MuiGrid-ourValues': {
          paddingLeft: theme.spacing(10),
          paddingRight: theme.spacing(10),
        },
      },
    },
  },
  '& .MuiGrid-panel-horizontalSpacing-xs': {
    [theme.breakpoints.up('xs')]: {
      '&.MuiGrid-panel-horizontalSpacing-xs': {
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
      },
    },
    [theme.breakpoints.up('md')]: {
      '&.MuiGrid-panel-horizontalSpacing-xs': {
        padding: `${theme.spacing(10)} ${theme.spacing(12)}`,
      },
    },
  },
  '& .MuiGrid-beginWithMUIToday': {
    [theme.breakpoints.up('xs')]: {
      padding: `${theme.spacing(10)} ${theme.spacing(5)} ${theme.spacing(15)} ${theme.spacing(5)}`,
    },
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(20)} ${theme.spacing(15)}`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing(30)} ${theme.spacing(35)}`,
    },
    overflow: 'hidden',
  },
  '& .MuiGrid-personasContainer': {
    '& > *': {
      marginTop: theme.spacing(1),
    },
  },
  '& .MuiGrid-discoverMore': {
    '& h2': {
      [theme.breakpoints.up('lg')]: {
        textAlign: 'left',
      },
    },
  },
}));

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
    background: color === 'main' ? theme.palette.vividBlue : theme.palette.primary.main,
    width: 80,
    height: 80,
  },
}));

const DiscoverMoreCard = styled((props: any) => {
  const { imagePosition, src, alt, title, children, href, ...other } = props;
  return (
    <Card elevation={0} {...other}>
      <CardContent>
        <Grid
          className="DiscoverMoreCard-header"
          component="a"
          href={href}
          container
          direction="row"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h4">{title}</Typography>
          </Grid>
          <Grid item>
            <ArrowCirleIcon />
          </Grid>
        </Grid>
        <Typography className="DiscoverMoreCard-content">{children}</Typography>
        <Box
          component="img"
          alt={alt}
          src={src}
          sx={{
            height: 243,
            width: imagePosition === 'center' ? 290 : 330,
            display: 'block',
            marginTop: 'auto',
          }}
        />
      </CardContent>
    </Card>
  );
})(({ theme, ...props }) => ({
  '&[class*="MuiCard-root"]': {
    background: theme.palette.secondary.main,
    color: 'white',
  },
  '& img': {
    marginLeft: props.imagePosition === 'center' || props.imagePosition === 'end' ? 'auto' : 0,
    marginRight: props.imagePosition === 'center' ? 'auto' : 0,
  },
  '& svg': {
    marginTop: 4,
  },
  height: theme.spacing(50),
  padding: 0,
  '& .DiscoverMoreCard-header': {
    textDecoration: 'none',
    color: 'white',
    padding: theme.spacing(2),
  },
  '& .DiscoverMoreCard-content': {
    padding: theme.spacing(2),
  },
  '& [class*="MuiCardContent-root"]': {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
}));

function About() {
  // export default function About() {
  return (
    <>
      <AboutUsRoot> 
        <Grid container spacing={1} className="MuiGrid-support MuiGrid-panel">
          <Grid item xs={12}>
            <Typography variant="h2">Here is <UnderlinedText>what to expect</UnderlinedText></Typography>
            <Typography variant="h2">from Material UI</Typography>
          </Grid>
          <Grid container className="MuiGrid-supportCardsWrapper">
            <Grid item lg={6} md={12}>
              <SupportCard icon={<QuestionAnswerIcon fontSize="large"/>} title="Volume discount">
              The licenses are on a per-developer basis. We offer the following tiered discounts from list prices when purchasing more than one license for your development team: <br></br><br></br>

              2-5 Licenses: <span style={{fontWeight: "bold"}}>10% discount</span><br></br>
              6-10 Licenses: <span style={{fontWeight: "bold"}}>15% discount</span><br></br>
              11+: License capped, extra developers do not need to be licensed.<br></br>
              </SupportCard>
            </Grid>
            <Grid item lg={4} md={12}>
              <SupportCard
                color="info"
                icon={<FeedbackIcon fontSize="large" />}
                title="Perpetual license"
              >
                When you purchase, <span style={{fontWeight: "bold"}}>you are granted a license to use a version of the product in perpetuity.</span> 
                There are no further charges until you choose to extend your license to cover newer versions.<br></br><br></br>

                Please note that while the use of the software is perpetual, support and corrective maintenance are not. 
                We do not provide issue resolution to versions older than 12 months. We roll bug fixes, performance enhancements, 
                and other improvements into new releases; we don't patch, fix or in any way alter older versions.
              </SupportCard>
            </Grid>
            <Grid item lg={6} md={12}>
              <SupportCard
                color="info"
                icon={<QuestionAnswerIcon fontSize="large" />}
                title="1-year subscription 
                to new versions"
              >
                <Typography gutterBottom> When you make a purchase <span style={{fontWeight: "bold"}}>you get a subscription to license new versions for 366 days.</span>
                You can see our <Link href="/">changelog</Link>. After 366 days (or up to 5-year if you choose an extension package) you will no longer be allowed to use the latest versions without 
                renewing your subscription. You can continue to use your licensed versions in perpetuity.</Typography><br></br>

                <Typography gutterBottom> Please note that while the use of the software is perpetual, support and corrective maintenance are not. 
                  We roll bug fixes, performance enhancements, and other improvements into new releases; we don't patch, fix or in any way alter older versions.
                </Typography>
              </SupportCard>
            </Grid>
            <Grid item lg={6} md={12}>
              <SupportCard icon={<QuestionAnswerIcon fontSize="large" />} title="Subscription renewal">
                <Typography gutterBottom>
                At the end of your subscription period, you will no longer be able to license the latest versions or access support without renewing. 
                This could range from 366 days up to a 5-year term. <span style={{fontWeight: "bold"}}>Renewal pricing is substantially lower than first-year subscription costs.</span>
                </Typography><br></br>
                <Typography gutterBottom>
                Please note that while the use of the software is perpetual, access to new features, support and corrective maintenance are not. 
                We do not provide issue resolution to versions older than 12 months. We roll bug fixes, performance enhancements, and other improvements 
                into new releases; we don't patch, fix or in any way alter older versions.
                </Typography>
              </SupportCard>
            </Grid>
          </Grid>
        </Grid>
      </AboutUsRoot>
      </>
  );
}
