var CMSC = [
    {
      "type": "CMSC",
      "number": 201,
      "description": "An introduction to computer science through problem solving and computer programming.", 
      "prereq": [],
      "unlock": 0 
    },
    {
      "type": "CMSC",
      "number": 202,
      "description": "This course continues the development of the ability of the student to program and problem-solve by providing an introduction to object-oriented design and programming (OOP).", 
      "prereq": [
        "CMSC 201"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 203,
      "description": "This course introduces the fundamental tools, topics and concepts of discrete mathematics needed to study computer science.", 
      "prereq": [
        "CMSC 202"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 304,
      "description": "A survey course that reviews social issues and the ethical impact of information technology throughout the world.", 
      "prereq": [
        "CMSC 202"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 313,
      "description": "This course introduces the student to the low-level abstraction of a computer system from a programmer�s point of view, with an emphasis on low-level programming.", 
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 331,
      "description": "This course examines the theory, design and implementation of programming languages and provides students with an introduction to programming languages that are likely to be new to them.", 
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 341,
      "description": "An examination of a range of advanced data structures, with an emphasis on an object-oriented approach.", 
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 345,
      "description": "This course introduces the basic concepts of software engineering, including software life cycle, requirements analysis and software design methods.", 
      "prereq": [
        "CMSC448"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 411,
      "description": "This course covers the design of complex computer systems making heavy use of the components and techniques discussed in CMSC 313, CMPE 212 and CMPE 310.", 
      "prereq": [
        "CMSC 313"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 421,
      "description": "An introduction to the fundamentals of operating systems.", 
      "prereq": [
        "CMSC 313",
        "CMSC 341"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 441,
      "description": "This course studies fundamental algorithms, strategies for designing algorithms, and mathematical tools for analyzing algorithms.", 
      "prereq": [
        "CMSC 341",
        "MATH 152",
        "STAT 355"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 447,
      "description": "This course introduces the basic concepts of software engineering, including software life cycle, requirements analysis and software design methods.", 
      "prereq": [],
      "unlock": 2
    }
  ]
var CMSC_REQ_ELEC = [
    {
      "type": "CMSC",
      "number": 426,
      "description": "This course will provide an introduction to computer security, with specific focus on the computing aspects.", 
      "prereq": [
        "CMSC 421"
      ],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 431,
      "description": "A detailed study of the design and implementation of a compiler for a high-level programming language.", 
      "prereq": [
        "CMSC 313",
        "CMSC 331",
        "CMSC 341"
      ],
      "unlock": 3
    },
    {
      "type": "CMSC",
      "number": 435,
      "description": "An introduction to the fundamentals of interactive computer graphics.", 
      "prereq": [
        "CMSC 313",
        "CMSC 341",
        "MATH 221"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 448,
      "description": "A continuation of the study of software engineering with emphasis on topics not fully covered in CMSC 345 and CMSC 447.", 
      "prereq": [
        "CMSC 447"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 451,
      "description": "This course introduces the basic concepts in the theory of formal languages.", 
      "prereq": [
        "CMSC 202",
        "CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 455,
      "description": "Topics include numerical linear algebra, interpolation, solving non-linear systems and the numerical solution of differential equations.", 
      "prereq": [
        "MATH 152",
        "MATH 221",
        "CMSC 341 "
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 456,
      "description": "The theme of this course is abstract algebra from an algorithmic perspective.", 
      "prereq": [
        "MATH 152",
        "MATH 221",
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 461,
      "description": "This course covers database management and the different data models used to structure the logical view of databases.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 471,
      "description": "This course provides a broad introduction to artificial intelligence, its sub-fields and their applications.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 481,
      "description": "This course introduces the fundamentals of data communication and computer networking, including circuit and packet switching; network architectures and protocols; local/metropolitan/wide-area networks, OSI and TCP/IP standards; network programming and applications; and network management.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 483,
      "description": "This course introduces the fundamentals of data communication and computer networking, including circuit and packet switching; network architectures and protocols; local/metropolitan/wide-area networks, OSI and TCP/IP standards; network programming and applications; and network management.", 
      "prereq": [
        "CMSC 421"
      ],
      "unlock": 1
    }
  ]
var CMSC_ELEC = [
    {
      "type": "CMSC",
      "number": 232,
      "description": "The use of networking, threaded programs and techniques for object reflection and persistence will be discussed in class and will be the motivation for homework assignments.", 
      "prereq": [
        "CMSC 202"
      ],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 352,
      "description": "This course examines important issues concerning women, gender and information technology (IT).", 
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 427,
      "description": "This course covers fundamental concepts, methodologies, and algorithms related to wearable computing.", 
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 432,
      "description": "This course covers the concepts of object-oriented programming (OOP) languages and systems, including an introduction to fundamental abstraction, modularity and encapsulation mechanisms in OOP from a software engineering and representational perspective.", 
      "prereq": [
        "CMSC 331",
        "CMSC 341"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 433,
      "description": "A detailed study of the design and implementation of a compiler for a high-level programming language.", 
      "prereq": [
        "CMSC 331"
      ],
      "unlock": 3
    },
    {
      "type": "CMSC",
      "number": 436,
      "description": "This course addresses the theoretical and practical issues in creating visual representations of large amounts of data.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 437,
      "description": "This is a practical, hands-on course in how to program interactive 2-D graphical user interfaces using the X11/Motif package and OpenGL.", 
      "prereq": [
        "CMSC 341",
        "MATH 221"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 442,
      "description": "An introduction to information and coding theory.", 
      "prereq": [
        "CMSC 203",
        "MATH 221"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 443,
      "description": "An introduction to cryptology, the science of making and breaking codes and ciphers.", 
      "prereq": [
        "CMSC 341",
        "MATH 221",
        "STAT 355"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 444,
      "description": "Selected recent research topics in information assurance, such as social engineering, buffer overflow, malicious code, spyware, denial of service, information warfare, computer forensics, recovery and response, enterprise security, clandestine channels and emissions security, security analysis, security models and formal techniques, best practices, and national policy for information assurance.", 
      "prereq": [
        "CMSC 421",
        "MATH 481"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 446,
      "description": "This course is an introduction to software design patterns.", 
      "prereq": [
        "CMSC 331",
        "MATH 241"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 452,
      "description": "This course covers the fundamental topics in sentential and first-order logic, including models, logical consequence, deduction and the completeness theorem.", 
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 453,
      "description": "An introduction to the application of combinatorial methods to computer science.", 
      "prereq": [
        "CMSC 341",
        "MATH 241"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 457,
      "description": "The course begins with a brief overview of those topics in quantum mechanics and mathematics needed for the understanding of quantum computation.", 
      "prereq": [
        "CMSC 203",
        "MATH 221                                                                                                                                                    "
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 465,
      "description": "This course puts special emphasis on the student’s ability to do research in existing and emerging technology and to summarize and present findings clearly.", 
      "prereq": [
        "CMSC 461",
        "CMSC 481"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 466,
      "description": "This course is designed to prepare students to be e-commerce developers.", 
      "prereq": [],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 473,
      "description": "The course will introduce the students to the problems, methods, and applications of Natural Language Programming (NLP).", 
      "prereq": [],
      "unlock": 3
    },
    {
      "type": "CMSC",
      "number": 475,
      "description": "This course is an in-depth introduction to neural networks.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 476,
      "description": "This course is an introduction to the theory and implementation of software systems designed to search through large collections of text.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 477,
      "description": "This course covers fundamental techniques for developing intelligent agents and multi-agent systems.", 
      "prereq": [
        "CMSC 471"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 478,
      "description": "The course will introduce the students to the problems, methods, and applications of Natural Language Programming (NLP).", 
      "prereq": [
        "CMSC 471"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 479,
      "description": "This course covers fundamental concepts, methodologies, and algorithms related to autonomous mobile robotics, touching on mechanical, motor, sensory, perceptual, and cognitive aspects of the problem of building robots that move about and decide what to do on their own.", 
      "prereq": [
        "CMSC 471"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 484,
      "description": "This course is an in-depth look at several of the technologies currently in use to develop applications for the Web.", 
      "prereq": [
        "CMSC 202"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 486,
      "description": "This course provides a technical introduction to mobile radio telephony.", 
      "prereq": [
        "MATH 152"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 487,
      "description": "The objective of this course is to teach the fundamental concepts, architectures, and protocols related to network security.", 
      "prereq": [
        "CMSC 421",
        "CMSC 481"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 493,
      "description": "The computer games capstone course is designed to allow students completing the computer science games track to engage in a complete group project development experience.", 
      "prereq": [
        "CMSC 435",
        "CMSC 471"
      ],
      "unlock": 2
    }
  ]
var MATH = [
    {
      "type": "MATH",
      "number": 151,
      "description": "Topics of this course include limits, continuity, the rate of change, derivatives, differentiation formulas for algebraic, trigonometric, logarithmic, and exponential functions, maxima and minima, integration and computation of areas, the Fundamental Theorem of Calculus, areas and volumes of solids of revolution, and applications.", 
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "MATH",
      "number": 152,
      "description": "Topics of this course include inverse functions, methods of integration, improper integrals, hyperbolic functions, sequences and infinite series, power series, Taylor series, conic sections, polar coordinates, and applications.", 
      "prereq": [
        "MATH 151"
      ],
      "unlock": 1
    },
    {
      "type": "MATH",
      "number": 221,
      "description": "Topics of this course include: linear equations, Gauss-Jordan reduction, matrices and determinants and their properties, vector spaces and subspaces, basis and dimension, linear transformations, kernel and range, eigenvalues and eigenvectors, and matrix diagonalization.", 
      "prereq": [
        "MATH 151"
      ],
      "unlock": 1
    },
    {
      "type": "STAT",
      "number": 355,
      "description": "An introduction to applied statistics designed for science majors and others with demonstrated quantitative ability.", 
      "prereq": [
        "MATH 152"
      ],
      "unlock": 1
    }
  ]
var SCIENCE = [
    {
      "type": "BIOL",
      "number": 100,
      "description": "A broad overview of contemporary biological science. Major areas include the biochemistry of energy transformation, cell structure and function, Mendelian, molecular and population genetics, development and differentiation, plant and animal physiology, evolution, and ecology.", 
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "BIOL",
      "number": 301,
      "description": "An introduction to the processes of evolution, the outcomes of evolution, and the field of ecology. Processes of evolution include understanding natural selection, genetic drift, molecular evolution and general evolution theory. ", 
      "prereq": [
        "BIOL 100"
      ],
      "unlock": 1
    },
    {
      "type": "BIOL",
      "number": 141,
      "description": "Major topics include structure and synthesis of nucleic acids and proteins, molecular genetics, prokaryotic and eukaryotic cell structure and function, biochemistry of energy transformation, and animal and plant development and physiology.", 
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "BIOL",
      "number": 142,
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 141"
      ],
      "unlock": 1
    },
    {
      "type": "CHEM",
      "number": 101,
      "description": "An introduction to chemistry for science majors and other students who require a thorough grounding in the principles of chemistry.", 
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CHEM",
      "number": 102,
      "description": "Principles of chemical and physical equilibrium, liquids and solids, elementary thermodynamics, electron and proton transfer reactions, electrochemistry, chemical kinetics and a further study of the periodic properties of the elements.", 
      "prereq": [
        "CHEM 101"
      ],
      "unlock": 1
    },
    {
      "type": "PHYS",
      "number": 121,
      "description": "This course emphasizes classical mechanics.", 
      "prereq": [
        "MATH 151"
      ],
      "unlock": 1
    },
    {
      "type": "PHYS",
      "number": 122,
      "description": "This course emphasizes electricity, magnetism, heat and thermodynamics.", 
      "prereq": [
        "PHYS 121",
        "MATH 152"
      ],
      "unlock": 2
    }
  ]