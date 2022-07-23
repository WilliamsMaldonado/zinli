import { Container } from "inversify";
import { BackupController } from "./controllers/backup.controller";
import { BackupServiceImpl } from "./services/backup-impl.service";
import { BackupService } from "./services/backup.service";
import { KinesisserviceImpl } from "./services/kinesis-imp.service";
import { KinesisService } from "./services/kinesis.service";
import { CONTROLLERS, SERVICES } from "./utils/constants";

const AppContainer: Container = new Container();
AppContainer.bind<BackupController>(CONTROLLERS.BackupController).to(BackupController);
AppContainer.bind<BackupService>(SERVICES.BackupService).to(BackupServiceImpl);
AppContainer.bind<KinesisService>(SERVICES.KinesisService).to(KinesisserviceImpl);

export {AppContainer};