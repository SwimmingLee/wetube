import routes from "./routes"

export const localsMiddelWare = (req, res, next) => {
    res.locals.siteName = "GroundBnB";
    res.locals.routes = routes;
    next();
};