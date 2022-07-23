# lamda backup data analytics
Para guardar la data para untilizarla como lago de datos se propone utilizar kinesis y guardar todos estos logs en un s3
* [DynamoDB to Kinesis](https://aws.amazon.com/es/blogs/database/archive-data-from-amazon-dynamodb-to-amazon-s3-using-ttl-and-amazon-kinesis-integration/)
* [RDS to Kinesis](https://aws.amazon.com/es/blogs/database/filter-amazon-aurora-database-activity-stream-data-for-segregation-and-monitoring/)

>Codigo
- Se crea una lambda que recibe los datos del kinesis data firehouse y los pueda filtrar en un fututo para guardarlos en el s3, tambien se coloca en el controlador un ejemplo de como las lambdas pueden enviar su informacion al kinesis, tambien se podria hacer una lib que se encargue de los envios de los datos de las lambdas a el kinesis