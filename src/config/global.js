export default {
  global: {
    componenteFormativo: 'Transformación de la energía eléctrica',
    descripcionCurso:
      'El componente formativo presenta cómo se transforma la energía eléctrica de las centrales para hacerla apta para electrodomésticos y maquinaria. Explica la corriente alterna y continua, así como el proceso de conversión mediante transformadores, rectificadores, filtros y reguladores. Comprender este proceso permite entender el funcionamiento de dispositivos eléctricos en industrias y hogares.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Transformación de la corriente eléctrica: alterna y continua',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Corriente continua',
      referencia:
        'Juan Bautista Chávez. (2023). ¿En qué consiste la corriente continua?.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yo3hDiqz3eI',
    },
    {
      tema: 'Corriente alterna',
      referencia:
        'Juan Bautista Chávez. (2023). ¿En qué consiste la Corriente Alterna?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=1a3nqVd1N2s',
    },
    {
      tema: 'Transformación de la corriente eléctrica: alterna y continua ',
      referencia:
        'TecNey PE. (2022). La forma más fácil para pasar de Corriente Alterna a Corriente Continua.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qJfyHf2X0XE',
    },
  ],
  glosario: [
    {
      termino: 'Corriente alterna (A.C.)',
      significado:
        'Tipo de corriente eléctrica que cambia de polaridad constantemente, variando entre valores positivos y negativos.',
    },
    {
      termino: 'Corriente continua (C.C.)',
      significado:
        'Tipo de corriente eléctrica en la que las cargas fluyen en un solo sentido, manteniendo un voltaje constante.',
    },
    {
      termino: 'Electrón',
      significado:
        'Partícula subatómica con carga negativa, responsable del flujo de corriente en los circuitos eléctricos.',
    },
    {
      termino: 'Filtro',
      significado:
        'Elemento que suaviza la señal rectificada para hacerla similar a la corriente continua, eliminando fluctuaciones.',
    },
    {
      termino: 'Fuente de alimentación',
      significado:
        'Sistema que proporciona energía eléctrica a un circuito o dispositivo, ya sea en forma de A.C. o C.C.',
    },
    {
      termino: 'Rectificador',
      significado:
        'Componente que convierte la corriente alterna en una corriente unidireccional eliminando un semiciclo de la señal.',
    },
    {
      termino: 'Regulador',
      significado:
        'Dispositivo que estabiliza el voltaje de salida en corriente continua, proporcionando una corriente constante.',
    },
    {
      termino: 'Semiciclo',
      significado:
        'Mitad de un ciclo de una onda alterna, correspondiente a una polaridad (positiva o negativa) de la corriente.',
    },
    {
      termino: 'Transformador',
      significado:
        'Dispositivo que ajusta el nivel de voltaje de la corriente alterna, aumentando o disminuyendo su amplitud.',
    },
    {
      termino: 'Voltaje',
      significado:
        'Diferencia de potencial eléctrico entre dos puntos, que impulsa el flujo de corriente en un circuito.',
    },
  ],
  referencias: [
    {
      referencia: 'Fisicalab. (s.f.). <em>La corriente alterna</em>.',
      link: '',
    },
    {
      referencia:
        'Así funciona. (s.f.). <em>¿Qué es la corriente directa?</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilmar Martínez Urrutia',
          cargo: 'Experto temático  ',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca ',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
