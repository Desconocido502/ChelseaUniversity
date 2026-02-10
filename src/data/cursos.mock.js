export const pensumRNR = [
  {
    semestre: 1,
    nombre: "Primer Bloque",
    cursos: [
      {
        codigo: "701001",
        nombre: "Dibujo Técnico",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: []
      },
      {
        codigo: "701002",
        nombre: "Matemática I",
        creditos: 5,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["799001"]
      },
      {
        codigo: "701003",
        nombre: "Biología General",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: []
      },
      {
        codigo: "701004",
        nombre: "Prácticas Generales I",
        creditos: 1,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: []
      },
      {
        codigo: "701005",
        nombre: "Metodología Científica",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: []
      },
      {
        codigo: "701006",
        nombre: "Sociología de Guatemala",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: []
      },
      {
        codigo: "701007",
        nombre: "Ética y Vida Universitaria",
        creditos: 1,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: []
      },
      {
        codigo: "799001",
        nombre: "Introducción a la Matemática",
        creditos: 5,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: []
      },
      {
        codigo: "799002",
        nombre: "Química General I",
        creditos: 5,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: []
      }
    ]
  },

  {
    semestre: 2,
    nombre: "Segundo Bloque",
    cursos: [
      {
        codigo: "702001",
        nombre: "Química General II",
        creditos: 5,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["799002"]
      },
      {
        codigo: "702002",
        nombre: "Climatología",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["701002"]
      },
      {
        codigo: "702003",
        nombre: "Matemática II",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["701002"]
      },
      {
        codigo: "702004",
        nombre: "Anatomía y Morfología Vegetal",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["701003"]
      },
      {
        codigo: "702005",
        nombre: "Prácticas Generales II",
        creditos: 1,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["701004"]
      },
      {
        codigo: "702006",
        nombre: "Entomología General",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["701003"]
      },
      {
        codigo: "702007",
        nombre: "Historia del Uso Social de los RNR en Guatemala",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["701006", "701007"]
      }
    ]
  },

  {
    semestre: 3,
    nombre: "Tercer Bloque",
    cursos: [
      {
        codigo: "703001",
        nombre: "Química Orgánica",
        creditos: 5,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["702001"]
      },
      {
        codigo: "703002",
        nombre: "Topografía I",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["701001", "702003"]
      },
      {
        codigo: "703003",
        nombre: "Matemática III",
        creditos: 5,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["702003"]
      },
      {
        codigo: "703004",
        nombre: "Botánica Sistemática",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["702004"]
      },
      {
        codigo: "703005",
        nombre: "Edafología I",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["702002", "702001"]
      },
      {
        codigo: "703006",
        nombre: "Economía General",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["702003"]
      }
    ]
  },

  {
    semestre: 4,
    nombre: "Cuarto Bloque",
    cursos: [
      {
        codigo: "704001",
        nombre: "Bioquímica",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["703001"]
      },
      {
        codigo: "704002",
        nombre: "Herramientas Gerenciales Introductorias",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["703006"]
      },
      {
        codigo: "704003",
        nombre: "Física General",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["702003"]
      },
      {
        codigo: "704004",
        nombre: "Edafología II",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["703005"]
      },
      {
        codigo: "704005",
        nombre: "Topografía II",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["703002"]
      },
      {
        codigo: "704006",
        nombre: "Estadística General",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["701005", "703003"]
      }
    ]
  },

  {
    semestre: 5,
    nombre: "Quinto Bloque",
    cursos: [
      {
        codigo: "706202",
        nombre: "Ecología General",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["702002", "701003"]
      },
      {
        codigo: "705001",
        nombre: "Fisiología Vegetal",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["703004", "704001"]
      },
      {
        codigo: "705002",
        nombre: "Hidrología",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["702002", "704006"]
      },
      {
        codigo: "705003",
        nombre: "Física Aplicada",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["704003"]
      },
      {
        codigo: "705004",
        nombre: "Genética General",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["701003", "704001"]
      },
      {
        codigo: "705308",
        nombre: "Protección Forestal (Plagas e Incendios)",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["702006"]
      },
      {
        codigo: "705309",
        nombre: "Vegetación del Bosque",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["703004", "704006"]
      },
      {
        codigo: "705310",
        nombre: "Economía de los RNR y Ambiente",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["704002"]
      }
    ]
  }
  ,
  {
    semestre: 6,
    nombre: "Sexto Bloque",
    cursos: [
      {
        codigo: "706001",
        nombre: "Conservación de Suelo y Agua",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["704004", "705002"]
      },
      {
        codigo: "706308",
        nombre: "Ecología Vegetal",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706202", "705001", "705309"]
      },
      {
        codigo: "706309",
        nombre: "Administración de Sistemas de RNR y Ambiente",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["705310"]
      },
      {
        codigo: "706310",
        nombre: "Estadística Aplicada Forestal",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["705309"]
      },
      {
        codigo: "706311",
        nombre: "Mediciones Forestales",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["705309"]
      },
      {
        codigo: "706312",
        nombre: "Fotogrametría y Fotointerpretación",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["704005", "704004"]
      },
      {
        codigo: "706313M",
        nombre: "Módulo Uso y Manejo del Recurso Hídrico",
        creditos: 2,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["705002", "703005", "702005"]
      },
      {
        codigo: "706315E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      }
    ]
  },
  {
    semestre: 7,
    nombre: "Séptimo Bloque",
    cursos: [
      {
        codigo: "707001",
        nombre: "Hidráulica",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["705003", "705002"]
      },
      {
        codigo: "707308",
        nombre: "Silvicultura",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706308", "706311"]
      },
      {
        codigo: "707309",
        nombre: "Sistemas de Información Geográfica",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706312"]
      },
      {
        codigo: "707310",
        nombre: "Mapeo y Clasificación de Suelos y Tierras",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706001", "706312"]
      },
      {
        codigo: "707311",
        nombre: "Formulación y Evaluación de Proyectos Ambientales",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706309"]
      },
      {
        codigo: "707312M",
        nombre: "Módulo Elaboración de Planes de Manejo del Bosque",
        creditos: 2,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706309", "706311", "706313M"]
      },
      {
        codigo: "707316E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      },
      {
        codigo: "707317E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      },
      {
        codigo: "707318E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      }
    ]
  },

  {
    semestre: 8,
    nombre: "Octavo Bloque",
    cursos: [
      {
        codigo: "708206",
        nombre: "Antropología Agraria",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["702007"]
      },
      {
        codigo: "708308",
        nombre: "Diseño y Estructuras para Manejo del Agua",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["704004", "704005", "707001"]
      },
      {
        codigo: "708309",
        nombre: "Tecnología de la Madera",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["702004", "705003"]
      },
      {
        codigo: "708310",
        nombre: "Administración y Desarrollo de Áreas Protegidas",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706308", "706309", "706310"]
      },
      {
        codigo: "708311",
        nombre: "Hidrogeología",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["705002"]
      },
      {
        codigo: "708312",
        nombre: "Legislación en RNR y Ambiente",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706308", "708206"]
      },
      {
        codigo: "708313M",
        nombre: "Módulo Empresarial",
        creditos: 2,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["707311", "707312M"]
      },
      {
        codigo: "708314M",
        nombre: "Módulo Planificación del Uso de la Tierra",
        creditos: 2,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706309", "707310", "707312M"]
      },
      {
        codigo: "708318E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      },
      {
        codigo: "708319E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      },
      {
        codigo: "708320E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      }
    ]
  }
  ,

  {
    semestre: 9,
    nombre: "Noveno Bloque",
    cursos: [
      {
        codigo: "709001E",
        nombre: "Problema Especial I",
        creditos: 2,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: []
      },
      {
        codigo: "709305",
        nombre: "Patología Forestal",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["705308", "706308"]
      },
      {
        codigo: "709306",
        nombre: "Propagación y Mejoramiento de Especies Forestales",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["705004", "705001", "705309"]
      },
      {
        codigo: "709307",
        nombre: "Mercadeo de Bienes y Servicios Ambientales",
        creditos: 3,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706309"]
      },
      {
        codigo: "709308M",
        nombre: "Módulo de Manejo Integrado de Cuencas Hidrográficas",
        creditos: 2,
        tipo: "obligatorio",
        carrera: "RNR",
        prerequisitos: ["706308", "707310", "708312", "708311", "708313M", "708314M"]
      },
      {
        codigo: "709009E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "Común",
        prerequisitos: []
      },
      {
        codigo: "709313E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      },
      {
        codigo: "709314E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      }
    ]
  }
  ,
  {
    semestre: 10,
    nombre: "Décimo Bloque",
    cursos: [
      {
        codigo: "710001",
        nombre: "Extensión y Organización de Productores",
        creditos: 4,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: ["708206", "706309"]
      },
      {
        codigo: "710002E",
        nombre: "Problema Especial II",
        creditos: 2,
        tipo: "obligatorio",
        carrera: "Común",
        prerequisitos: []
      },
      {
        codigo: "710304E",
        nombre: "Desarrollo de Recursos Hídricos",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: ["708308", "708311"]
      },
      {
        codigo: "710309E",
        nombre: "Curso Electivo",
        creditos: 3,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      },
      {
        codigo: "710310E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      },
      {
        codigo: "710311E",
        nombre: "Curso Electivo",
        creditos: 4,
        tipo: "electivo",
        carrera: "RNR",
        prerequisitos: []
      }
    ]
  }

];
