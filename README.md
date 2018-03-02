/*** Next.js ***/
Es una libreria de javascript con la que podemos construir aplicaciones web de manera sencilla
sin tener que preocuparnos por como enrutar ni otras cuestiones mas complejas.

* Caracteristicas:
- Server-render por default.
- División de código automático para cargas de página más rápidas.
- Enrutamiento simple del lado del cliente (basado en la página).
- Entorno de desarrollo basado en Webpack que admite el reemplazo de módulos activos (HMR).
- Capaz de implementar con Express o cualquier otro servidor HTTP Node.js.
- Personalizable con sus propias configuraciones de Babel y Webpack.

/** Navegacion del lado del cliente (Client-side navigation) **/
Next.js posee por default un historial de las paginas solicitadas llamado
'location.history', que nos permite navegar completamente entre las paginas del browser de nuestra
aplicacion, sin tener que volver a hacer una request al servidor, como ocurriria con un 
redirect() en Java por ejemplo. Esto mejora la performance y no tenemos que preocuparnos por
escribir codigo de ruteo en javascript ya que Next lo hace por nosotros, solo debemos
importar el modulo next/link y trabajar con el componente <Link>.
El componente Link es solo un Wrapper, no conoce la propiedad 'style', solo conoce algunas
propiedades de routing.
Podemos utilizar cualquier componente dentro de un Link, siempre y cuando acepten la propiedad
onClick.

/** Usando componentes compartidos **/
Podemos importar nuestros componentes desde cualquier directorio y nombrarlos como queramos,
el unico directorio especial es 'pages'.


/** Crear paginas dinamicas **/
Podemos crear paginas web dinamicas usando query strings.
Podemos pasar data a traves de parametros de las"query strings" de una URL.
Ej.: <Link href={`/post?title=${props.title}`}> // Utilizamos tambien las Template Strings de ES6.

Importante:
- Cada pagina recibe una propiedad llamada "URL" la cual contiene informacion de la URL actual.
  (Esta propiedad solo esta expuesta al componente principal de la pagina).
- Podemos usar el objeto "query", pues contiene la "query string".
- Entonces podemos obtener el titulo del ejemplo haciendo uso de "props.url.query.title".

Una pagina podria necesitar mas informacion a renderizar, o podriamos querer que las URLs
queden mas limpias y claras, esto puede mejorarse, pero es un comienzo.

/** Enmascaramiento de ruta (Route Masking) **/
Es una caracteristica unica de Next.js que mostrará una URL diferente en el navegador 
que la URL real que ve su aplicación.
Con la propiedad "as" utilizamos un alias, tomando el id de cada componente PostLink.

Si utilizamos el boton atras o adelante del navegador, navegaremos perfectamente entre las paginas
ya que el route masking funciona perfectamente con el historial de navegador.


