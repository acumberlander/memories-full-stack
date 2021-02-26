import jwt from 'jsonwebtoken';

// Example that explains reason for auth middleware:
// User wants to like a post
// they click the like button => auth middleware checks that user is authenticated before liking the post

const secret = 'secret-key (env variable)';

const auth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const isCustomAuth = token.length < 500;

		let decodedData;

		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, secret);

			req.userId = decodedData?.id;
		} else {
			decodedData = jwt.decode(token);

			req.userId = decodedData?.sub;
		}

		next();
	} catch (error) {
		console.log(error);
	}
};

export default auth;
