import { controller, httpGet, interfaces, next, request, response } from "inversify-express-utils";
import { Request, Response, NextFunction } from "express";

@controller("/mutual")
export class MutualController implements interfaces.Controller {
    @httpGet("/test")
    private index(@request() req: Request, @response() res: Response, @next() next: NextFunction) {
        res.status(200).json({
            message: "certificate verified succesfully",
          });
    }
}