# micro service mutual
>Se crean unso certificados locales
```bash
openssl req -x509 -nodes -days 9999 -newkey rsa:2048 -keyout server.key -out server.crt
openssl req -x509 -nodes -days 9999 -newkey rsa:2048 -keyout client.key -out client.crt
```
> Se instala en el servidor local nginx para que realice la validacion de los certificados y enrute a el servidor, de acuerdo a la configuracion del archivo myapp.conf
```.conf
server{
    listen 443 ssl;
    ssl_certificate /opt/homebrew/etc/nginx/certs/server.crt;
    ssl_certificate_key /opt/homebrew/etc/nginx/certs/server.key;
    ssl_client_certificate /opt/homebrew/etc/nginx/certs/client.crt;
    ssl_verify_client on;
    location /mutual/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

}
```
>Se agrega el archivo a la configuracion del nginx
```bash
include /etc/nginx/sites-available/myapp.conf
```
>Se inicia el servidor nginx

>Se crea un micro servicio que solo tiene un get que devuelve el  resultado 
```js
{
    "message": "certificate verified succesfully"
}
```

>Se crea un cliente que apunta a la ruta https://localhost/mutual/test por lo cual nginx validara el certificado por el puerto 443 y permitira la conexion al puerto local 3000 src/client/mutual.client.ts
- para correr el servidor se coloca el script start
- para correr el cliente se coloca el script start:client (solo despues de correr el start) 

- ¿Cómo se ve una implementación para Mutual TLS en una lambda escrita en node.js?

    El servidor que valida atravez del puerto 443 con nginx

    El cliente que envia los certificados src/client/mutual.client.ts

- ¿Qué consideraciones adicionales deben se señaladas respecto a la implementación de Mutual TLS?

    Se debe contar con un certificado SSL validado por una agencia.

    Es bueno para evitar ataques de midleman,suplantacion de ientidades, phishing y muchos otros por que tiene una autenticacion en doble via
    
# source
- https://www.cloudflare.com/es-es/learning/access-management/what-is-mutual-tls/
- https://dev.to/dinckan_berat/mutual-tlsmtls-with-nginx-and-nodejs-3ahp#:~:text=Mutual%20TLS%20a.k.a%20mTLS%20is,also%20used%20to%20secure%20microservices.