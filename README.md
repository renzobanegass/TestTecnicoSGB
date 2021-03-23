# TestTecnicoSGB

1. El contenido de los cuadros puede ser un grafico, un listado, un html, una imagen.
2. Al menos 8 cuadros, se puede repetir tipos.
3. La pagina debe ser adaptable a distintos tamaños.
4. Debe funcionar en los distintos navegadores: Chrome, Explorer, Edge, Mozilla, Safari.
5. Los cuadros se pueden cambiar de tamaño, ninguno debe ocupar al otro, al cambiarse los tamaños se deben reorganizar en la página.
6. El contenido de cada cuadro se puede recargar en forma individual, sin afectar al resto de la pagina.


En el test inclui una api que es simplemente una modificacion del preset de .NET core para conseguir información y poder rellenar dinámicamente la primer card, porque no pude encontrar apis similares públicas.

El segundo cuadro llama a una api que trae mensajes de texto aleatorios.

El resto de los cuadros son imágenes que al recargarse cambian aleatoriamente.

Usé JQuery, JQuery UI, Chart.js para el gráfico y Font-Awesome, además de HTML, CSS, Javascript y .NET CORE con C#.
