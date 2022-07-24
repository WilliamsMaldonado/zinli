import "reflect-metadata";
import { urlencoded, json } from 'body-parser';
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import cors from "cors";
import "./controllers/mutual.controller";

const AppContainer: Container = new Container();

const server = new InversifyExpressServer(AppContainer);
server.setConfig((app) => {
  app.use(urlencoded({
    extended: true
  }));
  app.use(json());
  app.use(cors())
});

const app = server.build();
app.listen(3000);

export {AppContainer};