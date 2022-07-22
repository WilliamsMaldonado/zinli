import { Container } from "inversify";
import { HoustonController } from "./controllers/houston.controller";
import { HoustonImplDyanamoService } from "./services/houston-impl-dynamo.service";
import { HoustonImplS3Service } from "./services/houston-impl-s3.service";
import { HoustonImplSSMService } from "./services/houston-impl-ssm.service";
import { HoustonService } from "./services/houston.service";
import { CONTROLLERS, SERVICES } from "./utils/constants";

const AppContainer: Container = new Container();
AppContainer.bind<HoustonController>(CONTROLLERS.HoustonController).to(HoustonController);
AppContainer.bind<HoustonService>(SERVICES.HoustonServiceS3).to(HoustonImplS3Service);
AppContainer.bind<HoustonService>(SERVICES.HoustonServiceSSM).to(HoustonImplSSMService);
AppContainer.bind<HoustonService>(SERVICES.HoustonServiceDynamo).to(HoustonImplDyanamoService);

export {AppContainer};