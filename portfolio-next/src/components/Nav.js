import { Col, Grid, Group, UnstyledButton, createStyles, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ColorSchemeButton from './ColorSchemeButton';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));



export default function HeaderSimple({ }) {
    const links = [
        { "link": "/about", "label": "Features" },
        { "link": "/pricing", "label": "Pricing" },
        { "link": "/learn", "label": "Learn" },
        { "link": "/community", "label": "Community" }
    ]
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();
    const router = useRouter()

    const items = links.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={cx(classes.link, { [classes.linkActive]: active === link.link })}
          onClick={(event) => {
              event.preventDefault();
              setActive(link.link);
          }}
        >
          {link.label}
        </a>
    ));

    return (
        <Grid gutter="md" style={{ paddingTop: '1rem' }}>
          <Col span={3} align="center">
              {router.pathname != '/' &&
                <Link href={'/'}><UnstyledButton> Home </UnstyledButton></Link>
              }  
          </Col>
          <Col span={7} align="center">

          </Col>
          <Col span={2} align="right">
            <Group>
              {router.pathname != '/projects' &&
                <Link href={'/projects'} style={{textDecoration: 'none'}}><UnstyledButton> Projects</UnstyledButton></Link>
              }
                <Link href={'/cv'} style={{textDecoration: 'none'}}><UnstyledButton> CV</UnstyledButton></Link>
              <ColorSchemeButton />
            </Group>
          </Col>
        </Grid>
    );
}