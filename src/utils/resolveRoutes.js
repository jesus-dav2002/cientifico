import router from "../routes/index"

const resolveRoutes = (route) => {
    if(router.length <= 3) {
        let validRoute = route === '/' ? route: '/:id';
        return validRoute;
    }
    return `/${route}`;
}

export default resolveRoutes;