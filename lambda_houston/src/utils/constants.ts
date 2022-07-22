export const CONTROLLERS = {
    HoustonController: Symbol.for("HoustonController"),
};

export const SERVICES = {
    HoustonServiceS3: Symbol.for("HoustonServiceS3"),
    HoustonServiceSSM: Symbol.for("HoustonServiceSSM"),
    HoustonServiceDynamo: Symbol.for("HoustonServiceDynamo"),
};

export const TYPES = {
    SSM: "ssm",
    S3: "s3",
    DYNAMO: "dynamo"
}