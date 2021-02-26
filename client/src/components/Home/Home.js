import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from '../../styles';
import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';

const Home = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<Grow in>
			<Container>
				<Grid
					className={classes.mainContainer}
					container
					justify="space-between"
					alignItems="stretch"
					spacing={3}
				>
					<Grid className={classes.form} item xs={12} sm={4}>
						<Form currentId={currentId} setCurrentId={setCurrentId} />
					</Grid>
					<Grid className={classes.postsContainer} item xs={12} sm={6}>
						<Posts setCurrentId={setCurrentId} />
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
};

export default Home;
