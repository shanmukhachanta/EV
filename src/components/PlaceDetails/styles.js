import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: 'auto',
  },
  media: {
    height: 350,
  },
  content: {
    padding: theme.spacing(2),
  },
  icon: {
    verticalAlign: 'middle',
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
