import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0 15px',
	},
	heading: {
		color: 'rgba(0,183,255, 1)',
	},
	image: {
		marginLeft: '15px',
	},
	form: {
		minWidth: '300px',
	},
	postsContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));
