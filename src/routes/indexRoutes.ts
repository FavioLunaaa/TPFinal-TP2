import {Request, Response, Router} from "express";

class IndexRoutes{

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/',(req, res) => ('Api: /api/posts'))
        
    }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes()


export default indexRoutes.router;