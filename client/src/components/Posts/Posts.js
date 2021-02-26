import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
	const [loadMessage, setLoadMessage] = useState();
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();

	useEffect(() => {
		setTimeout(() => {
			setLoadMessage('Almost ready...');
		}, 5000);
	});

	const RenderedPosts = posts.map((post) => (
		<Grid className={classes.post} key={post._id} item xs={12} sm={12} lg={6}>
			<Post post={post} setCurrentId={setCurrentId} />
		</Grid>
	));

	return !posts.length ? (
		<div className={classes.loadContainer}>
			<CircularProgress size={100} />
			<h3>{loadMessage}</h3>
		</div>
	) : (
		<Grid
			className={classes.container}
			container
			alignItems="stretch"
			spacing={3}
		>
			{RenderedPosts}
		</Grid>
	);
};

export default Posts;
