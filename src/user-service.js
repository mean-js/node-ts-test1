import * as express from 'express';

let userServiceRouter = express.Router();

userServiceRouter.get("/", function(req, res){
    res.json({"A": "B"});
});

export const userServiceRouter = userServiceRouter;