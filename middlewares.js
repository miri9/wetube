import routes from "./routes";

export const localMiddleware = (req,res,next) => {
	res.locals.siteName = "WeTube";
	res.locals.routes = routes;
	res.locals.user = {
		isAuthenticated: true,
		id: 5
		// 가짜 정보
	};
	next();
};