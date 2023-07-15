## Prueba técnica 2023

### Nivel de dificultad: Intermedio. Nivel de dificultad: Intermedio.

Una prueba técnica para validar conocimientos sobre las siguientes tecnologías:

1. PostgreSQL
2. Play Framework (Java) o GraphQL (JavaScript)
3. NextJS
4. Redux (opcional)

---

La prueba consiste en un sistema frontend sencillo, construido en NextJS (ReactJS) y usando Redux junto con Play Framework o GraphQL, que haga un pequeño
CRUD sobre los recursos necesarios para cumplir los requisitos básicos de la historia de usuario que encontrará más adelante.
Es decir, que permita:

1. Crear un recurso
2. Editar un recurso
3. Eliminar un recurso
4. Presentar una lista con los recursos disponibles

---

El sistema puede tener un mínimo de UX (User eXperience, se refiere a usabilidad del sistema, no al diseño https://en.wikipedia.org/wiki/User_experience). La parte
visual no es prioritaria, pero se recomienda usar Ant Design: https://ant.design/
La entrega se hace según la fecha acordada previamente, y basta con enviar una URL con el código del repositorio, en GitHub o similares.

---

### Entrevista con el cliente

El país se ha aventurado en un nuevo modelo para administrar su catastro. En este Catastro, al igual que en la versión anterior, el centro de todo es el Predio.
El predio se compone de un numero predial, que lo identifica de manera inequívoca a nivel nacional, avalúo, nombre, departamento y municipio.
Entrevista con un funcionario de catastro:

**_Funcionario:_** El sistema debe registrar la información de todos los predios de un municipio, es necesario modificar su información y también eliminarlos. Pero el predio tiene más cosas que están asociadas a él: tiene propietarios, construcciones y puede tener un terreno.

**_Entrevistador:_** ¿El predio siempre tiene un terreno?

**_Funcionario:_** No, puede pasar que el predio sólo tenga construcciones.

**_Entrevistador:_** ¿Qué información tienen los propietarios?

**_Funcionario:_** Hay propietarios dos tipos: Personas Naturales y Personas Jurídicas. Las personas naturales deben tener tipo de documento, el número del documento,
nombres y apellidos; los otros tienen el NIT y la razón social. Ambos deben tener dirección, teléfono y pueden tener un correo electrónico.

**_Entrevistador:_** ¿Y las construcciones y los terrenos?

**_Funcionario:_** Las construcciones tienen el número de pisos, el área total, si la construcción es industrial, comercial o residencial y la dirección de la construcción. Los
terrenos tienen el área, el valor comercial, si está cerca de fuentes de agua, si es un terreno rural o urbano y si tiene construcciones en él.

**_Entrevistador:_** Entonces, ¿un predio puede tener más de un terreno?

**_Funcionario:_** No. Un predio puede tener muchas construcciones, pero sólo un terreno.

**_Entrevistador:_** ¿Qué es lo que debería poder hacer el sistema?

**_Funcionario:_** Debe poder hacer la inscripción, edición y eliminación de un predio, se deben poder ver, crear, modificar y eliminar sus propietarios, construcciones y su
terreno si lo tiene. ¡Aahh!, evidentemente, también se deben ver los predios que ya estén registrados.
¡Te deseamos éxitos!¡Te deseamos éxitos!
