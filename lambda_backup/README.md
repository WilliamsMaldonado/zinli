# lamda backup data analytics
Para guardar la data para untilizarla como lago de datos se propone utilizar kinesis y guardar todos estos logs en un s3
* [DynamoDB to Kinesis](https://aws.amazon.com/es/blogs/database/archive-data-from-amazon-dynamodb-to-amazon-s3-using-ttl-and-amazon-kinesis-integration/)
* [RDS to Kinesis](https://aws.amazon.com/es/blogs/database/filter-amazon-aurora-database-activity-stream-data-for-segregation-and-monitoring/)

>Codigo
- Se crea una lambda que recibe los datos del kinesis data firehouse y los pueda filtrar en un fututo para guardarlos en el s3, tambien se coloca en el controlador un ejemplo de como las lambdas pueden enviar su informacion al kinesis, tambien se podria hacer una lib que se encargue de los envios de los datos de las lambdas a el kinesis

- ¿Cuáles son las opciones para alimentar el lago de datos de BI (implementado en un RDS) con los
cambios históricos de cada una de las 26 tablas?

    Guardar todos los datos generales de las diferentes tablas configurando kinesis para colocarlos en un s3 filtrandolos si es necesario atravez de una lambda como la que se creo que puede filtrar y envia al s3.

- ¿Cuáles son las opciones para registrar el funcionamiento de cada lambda y enviarlo al lago de datos?

    Se puede crear una libreria que ayude a enviar el request y los response de las lamdas al kinesis que finalmente envia todo al lago de datos en un s3

    linea 19 en backup.controller.ts
