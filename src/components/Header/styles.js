// styles.js
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    background: '#2196F3', // Set the background color to your preference
    padding: '20px', // Adjust the padding as needed
    textAlign: 'center', // Center the text horizontally
  },
  headerText: {
    color: 'white', // Set the text color
    fontSize: '24px', // Adjust the font size as needed
    marginBottom: '10px', // Add spacing below the heading
  },
}));

export default useStyles;
