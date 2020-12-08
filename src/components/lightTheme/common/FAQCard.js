import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiCard-root': {
      backgroundColor: '#2C7DF7',
      color: '#FFFFFF !important',
    },
    '& .MuiPaper-root': {
      backgroundColor: '#2C7DF7',
      color: '#FFFFFF',
    },
    '& .MuiCardContent-root': {
      paddingBottom: '15px',
      width: '100%',
      marginLeft:'15px',
    },
    color: '#FFFFFF !important',
    backgroundColor: '#2C7DF7 !important',
    borderRadius: '10px',
    width: '70vh',
    height: '70px',
  },
}));

export default function FAQCard(props) {
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
