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
  }
];
