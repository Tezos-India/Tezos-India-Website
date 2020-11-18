import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiCard-root': {
      backgroundColor: '#12141D',
      color: '#FFFFFF',
    },
    '& .MuiPaper-root': {
      backgroundColor: '#12141D',
      color: '#FFFFFF',
    },
    '& .MuiCardContent-root': {
      paddingBottom: '15px',
      width: '100%',
      marginLeft:'15px',
    },
    color: '#FFFFFF',
    backgroundColor: '#12141D !important',
    borderRadius: '15px',
    border: '2px solid #2A2C34',
    width: '320px',
    height: '550px',
  },
}));

export default function BlogCard(props) {
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
