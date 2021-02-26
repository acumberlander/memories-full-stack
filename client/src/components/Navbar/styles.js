import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		/* Media query that changes justify content property
			to center when the window gets smaller than the specified value.
		*/
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
		alignItems: 'center',
		padding: '10px 50px',
		flexWrap: 'wrap',
	},
	authAppBar: {
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		/* Media query that changes justify content property
			to center when the window gets smaller than the specified value.
		*/
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
		alignItems: 'center',
		padding: '10px 50px',
		flexWrap: 'wrap',
	},
	heading: {
		color: 'rgba(0,183,255, 1)',
		textDecoration: 'none',
	},
	image: {
		marginLeft: '15px',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '400px',
	},
	profile: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '400px',
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
}));
