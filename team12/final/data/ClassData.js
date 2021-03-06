var CMSC = [
    {
      "type": "CMSC",
      "number": 201,
      "title": "Computer Science I for Majors",
      "description": "An introduction to computer science through problem solving and computer programming.", 
      "prereq": [],
      "unlock": 0 
    },
    {
      "type": "CMSC",
      "number": 202,
      "title": "Computer Science II for Majors",
      "description": "This course continues the development of the ability of the student to program and problem-solve by providing an introduction to object-oriented design and programming (OOP).", 
      "prereq": [
        "CMSC 201"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 203,
      "title": "Discrete Structures",
      "description": "This course introduces the fundamental tools, topics and concepts of discrete mathematics needed to study computer science.", 
      "prereq": [
        "CMSC 202"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 304,
      "title": "Social and Ethical Issues in Information Technology",
      "description": "A survey course that reviews social issues and the ethical impact of information technology throughout the world.", 
      "prereq": [
        "CMSC 202"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 313,
      "title": "Computer Organization and Assembly Language Programming",
      "description": "This course introduces the student to the low-level abstraction of a computer system from a programmer�s point of view, with an emphasis on low-level programming.", 
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 331,
      "title": "Principles of Programming Language",
      "description": "This course examines the theory, design and implementation of programming languages and provides students with an introduction to programming languages that are likely to be new to them.", 
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 341,
      "title": "Data Structures",
      "description": "An examination of a range of advanced data structures, with an emphasis on an object-oriented approach.", 
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 345,
      "title": "Software Design and Development",
      "description": "This course introduces the basic concepts of software engineering, including software life cycle, requirements analysis and software design methods.", 
      "prereq": [
        "CMSC448"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 411,
      "title": "Computer Architecture",
      "description": "This course covers the design of complex computer systems making heavy use of the components and techniques discussed in CMSC 313, CMPE 212 and CMPE 310.", 
      "prereq": [
        "CMSC 313"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 421,
       "title": "Principles of Operating Systems",
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
      "title": "Design and Analysis of Algorithms",
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
      "title": "Software Engineering I",
      "description": "This course introduces the basic concepts of software engineering, including software life cycle, requirements analysis and software design methods.", 
      "prereq": [],
      "unlock": 2
    }
  ]
var CMSC_REQ_ELEC = [
    {
      "type": "CMSC",
      "number": 426,
      "title": "Principles of Computer Security",
      "description": "This course will provide an introduction to computer security, with specific focus on the computing aspects.", 
      "prereq": [
        "CMSC 421"
      ],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 431,
      "title": "Compiler Design Principles",
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
      "title": "Computer Graphics",
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
      "title": "Software Engineering II",
      "description": "A continuation of the study of software engineering with emphasis on topics not fully covered in CMSC 345 and CMSC 447.", 
      "prereq": [
        "CMSC 447"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 451,
      "title": "Automata Theory and Formal Languages",
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
      "title": "Numerical Computations",
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
      "title": "Symbolic Computation",
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
      "title": "Database Management Systems",
      "description": "This course covers database management and the different data models used to structure the logical view of databases.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 471,
      "title": "Introduction to Artificial Intelligence",
      "description": "This course provides a broad introduction to artificial intelligence, its sub-fields and their applications.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 481,
      "title": "Computer Networks",
      "description": "This course introduces the fundamentals of data communication and computer networking, including circuit and packet switching; network architectures and protocols; local/metropolitan/wide-area networks, OSI and TCP/IP standards; network programming and applications; and network management.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 483,
      "title": "Parallel and Distributed Processing",
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
      "title": "Advanced programming techniques in Java will be presented.",  
      "description": "The use of networking, threaded programs and techniques for object reflection and persistence will be discussed in class and will be the motivation for homework assignments.", 
      "prereq": [
        "CMSC 202"
      ],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 352,
      "title": "This course examines important issues concerning women, gender and information technology (IT).", 
      "description": "This course examines important issues concerning women, gender and information technology (IT).", 
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 427,
      "title": "Wearable Computing",
      "description": "This course covers fundamental concepts, methodologies, and algorithms related to wearable computing.", 
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 432,
      "title": "Object-Oriented Programming Languages and Systems",
      "description": "This course covers the concepts of object-oriented programming (OOP) languages and systems, including an introduction to fundamental abstraction, modularity and encapsulation mechanisms in OOP from a software engineering and representational perspective.", 
      "prereq": [
        "CMSC 331",
        "CMSC 341"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "title": "Compiler Design Principles",
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
      "title": "Data Visualization",
      "description": "This course addresses the theoretical and practical issues in creating visual representations of large amounts of data.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 437,
      "title": "Graphical User Interface Programming",
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
      "title":"An introduction to information and coding theory.", 
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
      "title": "Cryptology",
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
      "title": "Information Assurance", 
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
      "title": "Introduction to Design Patterns", 
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
      "title": "Logic for Computer Science",
      "description": "This course covers the fundamental topics in sentential and first-order logic, including models, logical consequence, deduction and the completeness theorem.", 
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 453,
      "title": "Applied Combinatorics and Graph Theory",
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
      "title": "Quantum Computation",
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
      "title": "Introduction to Electronic Commerce",
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
      "title": "Electronic Commerce Technology",
      "description": "This course is designed to prepare students to be e-commerce developers.", 
      "prereq": [],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 473,
      "title": "Introduction to Natural Language Programming",
      "description": "The course will introduce the students to the problems, methods, and applications of Natural Language Programming (NLP).", 
      "prereq": [],
      "unlock": 3
    },
    {
      "type": "CMSC",
      "number": 475,
      "title": "Introduction to Neural Networks",
      "description": "This course is an in-depth introduction to neural networks.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 476,
      "title": "Information Retrieval",
      "description": "This course is an introduction to the theory and implementation of software systems designed to search through large collections of text.", 
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 477,
      "title": "Agent Architectures and Multi-Agent Systems",
      "description": "This course covers fundamental techniques for developing intelligent agents and multi-agent systems.", 
      "prereq": [
        "CMSC 471"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 478,
      "title": "Introduction to Machine Learning",
      "description": "The course will introduce the students to the problems, methods, and applications of Natural Language Programming (NLP).", 
      "prereq": [
        "CMSC 471"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 479,
      "title": "Introduction to Robotics",
      "description": "This course covers fundamental concepts, methodologies, and algorithms related to autonomous mobile robotics, touching on mechanical, motor, sensory, perceptual, and cognitive aspects of the problem of building robots that move about and decide what to do on their own.", 
      "prereq": [
        "CMSC 471"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 484,
      "title": "Java Server Technologies",
      "description": "This course is an in-depth look at several of the technologies currently in use to develop applications for the Web.", 
      "prereq": [
        "CMSC 202"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 486,
      "title": "Mobile Telephony Communications",
      "description": "This course provides a technical introduction to mobile radio telephony.", 
      "prereq": [
        "MATH 152"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 487,
      "title": "Introduction to Network Security",
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
      "title": "Capstone Games Group Project",
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
      "title": "Calculus and Analytic Geometry I",
      "description": "Topics of this course include limits, continuity, the rate of change, derivatives, differentiation formulas for algebraic, trigonometric, logarithmic, and exponential functions, maxima and minima, integration and computation of areas, the Fundamental Theorem of Calculus, areas and volumes of solids of revolution, and applications.", 
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "MATH",
      "number": 152,
      "title": "Calculus and Analytic Geometry II",
      "description": "Topics of this course include inverse functions, methods of integration, improper integrals, hyperbolic functions, sequences and infinite series, power series, Taylor series, conic sections, polar coordinates, and applications.", 
      "prereq": [
        "MATH 151"
      ],
      "unlock": 1
    },
    {
      "type": "MATH",
      "number": 221,
      "title": "Introduction to Linear Algebra", 
      "description": "Topics of this course include: linear equations, Gauss-Jordan reduction, matrices and determinants and their properties, vector spaces and subspaces, basis and dimension, linear transformations, kernel and range, eigenvalues and eigenvectors, and matrix diagonalization.", 
      "prereq": [
        "MATH 151"
      ],
      "unlock": 1
    },
    {
      "type": "STAT",
      "number": 355,
      "title": "Introduction to Probability and Statistics for Scientists and Engineers", 
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
      "number": 141,
      "title": "Foundations of Biology: Cells, Energy and Organisms", 
      "description": "Major topics include structure and synthesis of nucleic acids and proteins, molecular genetics, prokaryotic and eukaryotic cell structure and function, biochemistry of energy transformation, and animal and plant development and physiology.", 
      "prereq": [],
      "unlock": 4,
      "lab": false
    },
    {
      "type": "BIOL",
      "number": 142,
      "title": "Foundations of Biology: Ecology and Evolution", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 141", "MATH 151"
      ],
      "unlock": 4,
      "lab": false
    },
    {
      "type": "BIOL",
      "number": 251,
      "title": "Human Anatomy and Physiology I", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 141", "CHEM 102"
      ],
      "unlock": 3, 
      "lab": true
    },
    {
      "type": "bLab",
      "number": 251,
      "title": "Human Anatomy and Physiology I Lab", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 251"
      ],
      "unlock": 1,
      "lab": true
    },
    {
      "type": "BIOL",
      "number": 252,
      "title": "Human Anatomy and Physiology II", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 251"
      ],
      "unlock": 3,
      "lab": true
    },
      {
      "type": "bLab",
      "number": 252,
      "title": "Human Anatomy and Physiology II Lab", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "bLab 251"
      ],
      "unlock": 1,
      "lab": true
    },
    {
      "type": "BIOL",
      "number": 275,
      "title": "Microbiology", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 141"
      ],
      "unlock": 3,
      "lab": true
    },
    {
      "type": "bLab",
      "number": 275,
      "title": "Microbiology Lab", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 275"
      ],
      "unlock": 2,
      "lab": true
    },
    {
      "type": "BIOL",
      "number": 302,
      "title": "Molecular and General Genetics", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 141",  "BIOL 142",  "MATH 151", "CHEM 102"
      ],
      "unlock": 4,
      "lab": true
    },
        {
      "type": "bLab",
      "number": 302,
      "title": "Molecular and General Genetics Lab", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 302"
      ],
      "unlock": 2,
      "lab": true
    },
    {
      "type": "BIOL",
      "number": 304,
      "title": "Plant Biology", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 303"
      ],
      "unlock": 3,
      "lab": true
    },
    {
      "type": "bLab",
      "number": 304,
      "title": "Plant Biology Lab", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 304"
      ],
      "unlock": 2,
      "lab": true
    },
    {
      "type": "BIOL",
      "number": 305,
      "title": "Comparative Animal Physiology", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 303", "PHYS 122"
      ],
      "unlock": 3,
      "lab": true
    },
        {
      "type": "bLab",
      "number": 305,
      "title": "Comparative Animal Physiology Lab", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 305"
      ],
      "unlock": 2,
      "lab": true
    },
    {
      "type": "BIOL",
      "number": 303,
      "title": "Cell Biology", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 302", "MATH 151"
      ],
      "unlock": 4,
      "lab": true
    },
    {
      "type": "bLab",
      "number": 303,
      "title": "Cell Biology Lab", 
      "description": "Major topics include fundamental concepts in ecology and evolution and emphasizes the fundamental interrelationship between these two fields of study.", 
      "prereq": [
        "BIOL 303"
      ],
      "unlock": 2,
      "lab": true
    },
    {
      "type": "CHEM",
      "number": 101,
      "title": "Principles of chemistry I", 
      "description": "An introduction to chemistry for science majors and other students who require a thorough grounding in the principles of chemistry.", 
      "prereq": ["MATH 151"],
      "unlock": 4,
      "lab": false

    },
    {
      "type": "CHEM",
      "title": "Principles of chemistry II",  
      "number": 102,
      "description": "Principles of chemical and physical equilibrium, liquids and solids, elementary thermodynamics, electron and proton transfer reactions, electrochemistry, chemical kinetics and a further study of the periodic properties of the elements.", 
      "prereq": [
        "CHEM 101"
      ],
      "unlock": 4,
      "lab": true
    },
    {
      "type": "cLab",
      "title": "Principles of chemistry II Lab",  
      "number": 102,
      "description": "Principles of chemical and physical equilibrium, liquids and solids, elementary thermodynamics, electron and proton transfer reactions, electrochemistry, chemical kinetics and a further study of the periodic properties of the elements.", 
      "prereq": [
        "CHEM 102"
      ],
      "unlock": 2,
      "lab": true
    },
    {
      "type": "GES",
      "title": "Physical Geography", 
      "number": 110,
      "description": "This course emphasizes classical mechanics.", 
      "prereq": [
      ],
      "unlock": 3,
      "lab": false
    },
    {
      "type": "GES",
      "title": "Principles of Geology", 
      "number": 111,
      "description": "This course emphasizes classical mechanics.", 
      "prereq": [
      ],
      "unlock": 3,
      "lab": false
    },
    {
      "type": "GES",
      "title": "Environmental Science and Conservation", 
      "number": 120,
      "description": "This course emphasizes classical mechanics.", 
      "prereq": [
      ],
      "unlock": 3,
      "lab": false
    },
    {
      "type": "PHYS",
      "title": "Introductory Physics I", 
      "number": 121,
      "description": "This course emphasizes classical mechanics.", 
      "prereq": [
        "MATH 151"
      ],
      "unlock": 4,
      "lab": false
    },
    {
      "type": "PHYS",
      "title": "Introductory Physics II", 
      "number": 122,
      "description": "This course emphasizes electricity, magnetism, heat and thermodynamics.", 
      "prereq": [
        "PHYS 121",
        "MATH 152"
      ],
      "unlock": 4,
      "lab": true
    },
    {
      "type": "pLab",
      "title": "Introductory Physics I Lab", 
      "number": 122,
      "description": "This course emphasizes classical mechanics.", 
      "prereq": [
        "PHYS 122"
      ],
      "unlock": 3,
      "lab": true
    },
    {
      "type": "PHYS",
      "title": "Fundamentals of Astronomy and Astrophysics", 
      "number": 304,
      "description": "This course emphasizes classical mechanics.", 
      "prereq": [
        "PHYS 122"
      ],
      "unlock": 3,
      "lab": false
    },
    {
      "type": "PHYS",
      "title": "Vibrations and Waves", 
      "number": 224,
      "description": "This course emphasizes classical mechanics.", 
      "prereq": [
        "PHYS 122"
      ],
      "unlock": 3,
      "lab": false
    }
  ]