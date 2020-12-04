import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiCard-root': {
      backgroundColor: '#2A2C34',
      color: '#FFFFFF',
    },
    '& .MuiPaper-root': {
      backgroundColor: '#2A2C34',
      color: '#FFFFFF',
    },
    '& .MuiCardContent-root': {
      paddingBottom: '15px',
      width: '100%',
      marginLeft:'15px',
    },
    color: '#FFFFFF',
    backgroundColor: '#2A2C34 !important',
    borderRadius: '15px',
    width: '300px',
    height: '320px',
  },
}));

export default function CommunityCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent
        className={[classes.contetentStyle, props.cardStyle].join(' ')}
        style={(classes.backgroundColor, classes.color)}
      >
        {props.children}
      </CardContent>
    </Card>
  );
}
