export interface BackupService {
    saveRecords(event: any):Promise<string>;
}