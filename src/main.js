import * as fs from 'fs';
import * as path from 'path'; 
import {sep as SEP} from 'path';
import * as _ from 'lodash';
import * as Express from 'express';
import { Router} from 'express';
import {userServiceRouter} from './user-service';

class Main{
    static main(){
        console.log(path);
        console.log(SEP);
        console.log(fs);
        console.log(_);
        console.log("Hello World");
        console.log(Express);
        console.log(Router);

        let app = new Express();
        let appRouter = Express.Router();

        app.get("/", function(req, res, next){
            res.json({"Hello": "Hello World"});
        });

        app.use("/user", userServiceRouter);

        app.listen(3006, function(){
            console.log("Server started!!");
        });
    }
}


Main.main();