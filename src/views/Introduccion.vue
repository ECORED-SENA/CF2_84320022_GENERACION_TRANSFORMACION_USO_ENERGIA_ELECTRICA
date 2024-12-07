<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.justify-content-center.align-items-start.mb-5
      .col-lg-8
        p(data-aos="fade-right").mb-4 En la actualidad, la energía eléctrica es esencial para el funcionamiento de la industria y la vida cotidiana en los hogares. Su generación, transformación y adaptación son procesos complejos que permiten el uso seguro y eficiente de aparatos y maquinaria, sin importar la magnitud de los voltajes que provienen de las centrales eléctricas. Comprender estos procesos es fundamental para quienes trabajan o estudian en campos relacionados con la electricidad y la electrónica. 

        .bg-color-1.mb-4.p-4
          .row
            .col-lg-auto(data-aos="fade-right")
              img(src="@/assets/curso/intro/1.svg", style="max-width: 110px", alt="").m-auto.mb-4.mb-lg-0
            .col-lg(data-aos="fade-left")
              p.mb-0 Uno de los conceptos clave en la transformación de la energía eléctrica es la diferencia entre la corriente alterna (CA) y la corriente continua (CC). Mientras que la corriente alterna se utiliza para la transmisión de energía a largas distancias debido a sus bajas pérdidas energéticas, la corriente continua es necesaria para muchos dispositivos que requieren un flujo de energía constante y estable. Este conocimiento es indispensable para adaptar correctamente la energía a diferentes aplicaciones industriales y domésticas. 

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-auto
            figure
              img(src="@/assets/curso/intro/2.svg", style="max-width: 295px", alt="").m-auto.mb-4.mb-lg-0
          .col-lg
            p.mb-0 En este componente formativo, se estudiarán las técnicas y dispositivos que permiten la conversión de la corriente alterna en continua, como el transformador, el rectificador, el filtro y el regulador. Estos elementos juegan un papel fundamental en la transformación de la energía, garantizando que los dispositivos puedan operar sin problemas y de manera segura. 
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/3.png", style="max-width: 400px", alt="").m-auto.mb-4.mb-lg-0
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
