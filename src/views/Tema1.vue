<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Transformación de la corriente eléctrica: alterna y continua

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La energía eléctrica es fundamental en hogares e industrias. Existen dos tipos principales de corriente: alterna (CA), utilizada para transportar energía a largas distancias, y continua (CC), necesaria para el funcionamiento de muchos dispositivos. En esta unidad, se explica cómo se transforma la corriente alterna en continua mediante transformadores, rectificadores, filtros y reguladores para adaptarla a distintas aplicaciones.

    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4 Corriente alterna

    p(data-aos="fade-right").mb-4 La corriente alterna se caracteriza por su cambio constante de polaridad, alcanzando un valor máximo en polaridad positiva, luego descendiendo a cero y, finalmente, logrando otro valor máximo en polaridad negativa. Las señales eléctricas provenientes de las centrales eléctricas son típicamente de este tipo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Representación de la corriente alterna y corriente continua

        figure
          img(src="@/assets/curso/tema1/f1.png", style="max-width: 100%", alt="La figura presenta   dos representaciones gráficas, una de la corriente alterna y otra de la corriente continua. La primera gráfica, a la izquierda, presenta una onda sinusoidal que varía en el tiempo, caracterizando la corriente alterna. La segunda gráfica, a la derecha, ilustra un circuito de corriente continua con una batería conectada a una bombilla, mostrando un flujo constante de voltaje en 1.5V a lo largo del tiempo.").m-auto

    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4 Corriente continua

    p(data-aos="fade-right").mb-4 La corriente directa (CD) o corriente continua (CC) es aquella en la cual las cargas eléctricas o electrones se desplazan en un único sentido dentro de un circuito eléctrico cerrado, moviéndose del polo negativo al polo positivo, como en el caso de las baterías, dinamos y otras fuentes generadoras de corriente continua.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 2.
              span Generador eléctrico

            figure
              img(src="@/assets/curso/tema1/f2.png", style="max-width: 100%", alt="La  figura  representa un generador portátil diseñado para proporcionar energía eléctrica en lugares sin acceso a la red.").m-auto


    .titulo-tres.mb-4(data-aos="flip-up").mb-4
      h4 Transformación de la corriente eléctrica alterna a continua

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9

        .bg-color-2.mb-4.p-4
          .row
            .col-lg-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px", alt="").m-auto.mb-4.mb-lg-0
            .col-lg(data-aos="fade-left")
              p.mb-0 La corriente alterna presenta la ventaja de permitir un cambio de voltaje de forma relativamente económica. Además, su pérdida de energía al transportarse a largas distancias es considerablemente menor en comparación con la corriente continua, lo cual explica por qué las centrales eléctricas transmiten señales alternas.
        
        p(data-aos="fade-right").mb-4 No obstante, muchos aparatos industriales y electrodomésticos requieren convertir esta señal alterna en una continua. Por ejemplo, al conectar un radio a una señal alterna de 110 voltios, internamente se convierte a 12 o 24 voltios continuos, que es el voltaje con el cual realmente opera el dispositivo.
      
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/3.svg", style="max-width: 100%", alt="").m-auto.mb-4.mb-lg-0

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 3.
          span Diagrama de conversión de corriente alterna a corriente continua

        figure
          img(src="@/assets/curso/tema1/f3.png", style="max-width: 100%", alt="Diagrama de bloques del proceso de conversión de corriente alterna (A.C.) a corriente continua (C.C.). El flujo comienza con la entrada en A.C., pasa por un transformador que ajusta el nivel de voltaje, sigue a un rectificador que convierte la señal a una forma unidireccional, continúa hacia un filtro que suaviza la señal, y termina en un regulador que proporciona una salida de corriente continua estable.").m-auto

    p(data-aos="fade-right").mb-4 Los pasos para la transformación son:

    .bg-full-width.bg-fondo-4(data-aos="fade-down").mb-5
      .p-4.p-md-5
        .tarjeta.bg-color-white.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
          SlyderA(tipo='b')
            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Transformador
                  p.mt-4 Aumenta o disminuye la amplitud de la señal alterna. La señal entrante se conecta en el primario, y en los secundarios se obtiene una señal alterna de 12 o 30 voltios.
              .col-lg-4
                img(src='@/assets/curso/tema1/slider-1.png', style="max-width: 630px", alt="Presenta un  transformador con una conexión de entrada en el lado primario y dos salidas de voltaje en el lado secundario, con valores de 12V y 30V. Los cables del primario y los secundarios están claramente diferenciados, y se observa cómo el transformador ajusta los niveles de voltaje de la señal alterna.").mx-auto


            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                 h4 Rectificador
                 p.mt-4 Elimina un semiciclo de la señal alterna entregada por el transformador, generalmente mediante semiconductores.
              .col-lg-4
                img(src='@/assets/curso/tema1/slider-2.png', style="max-width: 630px", alt="Presenta un   rectificador de puente de diodos, que permite convertir la señal de corriente alterna (CA) en corriente continua (CC). Los cuatro diodos están dispuestos en un circuito de puente que elimina un semiciclo de la señal alterna.").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Filtro
                  p.mt-4 Convierte la señal rectificada en una señal muy similar a la continua.
              .col-lg-4
                img(src='@/assets/curso/tema1/slider-3.png', style="max-width: 630px", alt="Esquema del proceso de transformación de corriente alterna (CA) a corriente continua (CC), que incluye un transformador, un rectificador en puente, y un filtro. Este diagrama muestra el flujo de la señal desde la entrada de voltaje alterno hasta la salida continua.").mx-auto

            .row.pt-lg-4
              .col-lg-8.mb-4.mb-lg-0
                .pe-4
                  h4 Regulador
                  p.mt-4 Genera una señal perfectamente continua en el valor requerido.
              .col-lg-4
                img(src='@/assets/curso/tema1/slider-4.png', style="max-width: 630px", alt="Diagrama detallado que representa un sistema completo de transformación de CA a CC, con transformador de poder, rectificador de puente, filtro y regulador de tensión. Incluye elementos específicos como resistencias, condensadores y el regulador que asegura una salida de voltaje continua y estable.").mx-auto



    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprender los dos tipos de #[strong corriente eléctrica y el proceso de transformación de alterna] a continua permite entender el funcionamiento de #[strong máquinas eléctricas y electrónicas en el hogar y la industria]. La corriente alterna que ofrecen las compañías eléctricas varía en voltaje a lo largo del tiempo, lo cual no resulta adecuado para alimentar todos los aparatos, ya que no se mantiene un voltaje constante. En este contexto, los transformadores, rectificadores, filtros y reguladores desempeñan un papel esencial en el sistema. Profundice en el estudio de estos elementos y amplíe su conocimiento sobre energía eléctrica.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
