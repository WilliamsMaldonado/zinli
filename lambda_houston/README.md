# lamda houston
Error con variables de entorno en aws se permite maximo 4kb, las nuevas configuraciones llegan a los 5.6kb

>Soluciones:

1. Se puede pensar en reducir el tamañano de las variables eliminando tal vez aquellas que no se necesiten ya
2. Colocar el archivo JSON con las reglas de negocio en un s3
3. Colocar el archivo JSON con las reglas de negocio en ssm Advanced 8kb

>Codigo
- una nueva lambda que devuelve los parametros de negocio, tambien se puede hacer directamente en la lambda que lo necesite
- El codigo implementado aca toma una variable de entorno "type" = (s3, ssm), para definir que estrategia llevar acabo si el s3 o ssm