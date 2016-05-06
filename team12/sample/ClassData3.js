var CMSC = [
    {
      "type": "CMSC",
      "number": 201,
      "prereq": [], // if size > 1
      "unlock": 0 // or chekc if preque is 0
    },
    {
      "type": "CMSC",
      "number": 202,
      "prereq": [
        "CMSC 201"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 203,
      "prereq": [
        "CMSC 202"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 304,
      "prereq": ["CMSC 202"],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 313,
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 331,
      "prereq": ["CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 341,
      "prereq": ["CMSC 203"
      ],
      "unlock": 2
    },
    { // not in their code
      "type": "CMSC",
      "number": 345,
      "prereq": [
        "CMSC448"
      ],
      "unlock": 1
    }, // end
    {
      "type": "CMSC",
      "number": 411,
      "prereq": ["CMSC 313"],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 421,
      "prereq": [
        "CMSC 313",
        "CMSC 341"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 437,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 441,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 443,
      "prereq": ["CMSC 341","MATH 221","STAT 355"],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 447,
      "prereq": [
        "CMSC448"
      ],
      "unlock": 2
    }]

var cmscElective = [
    {
      "type": "CMSC",
      "number": 426,
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 431,
      "prereq": [],
      "unlock": 3
    },
    {
      "type": "CMSC",
      "number": 432,
      "prereq": [],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 433,
      "prereq": [],
      "unlock": 3
    },
    {
      "type": "CMSC",
      "number": 435,
      "prereq": [
        "CMSC493"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 436,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 448,
      "prereq": [],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 451,
      "prereq": [],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 455,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 456,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 461,
      "prereq": [
        "CMSC465",
        "CMSC466"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 481,
      "prereq": [
        "CMSC465",
        "CMSC466",
        "CMSC487"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 483,
      "prereq": [],
      "unlock": 1

    }]

var cmscElectiveOther = [
    {
      "type": "CMSC",
      "number": 232,
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 291,
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 299,
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 352,
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 404,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 427,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 452,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 453,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 457,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 465,
      "prereq": [],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 466,
      "prereq": [],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 471,
      "prereq": [
        "CMSC477",
        "CMSC478",
        "CMSC479",
        "CMSC493"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 473,
      "prereq": [],
      "unlock": 3
    },
    {
      "type": "CMSC",
      "number": 475,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 476,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 477,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 478,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 479,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 484,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 486,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 487,
      "prereq": [],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 493,
      "prereq": [],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 495,
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 498,
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 499,
      "prereq": [],
      "unlock": 0
    }]

var MATH = [
    {
      "type": "MATH",
      "number": 151,
      "prereq": [
      ],
      "unlock": 0
    },
    {
      "type": "MATH",
      "number": 152,
      "prereq": [
        "MATH 151"
      ],
      "unlock": 1
    },
    {
      "type": "MATH",
      "number": 221,
      "prereq": ["MATH 151"],
      "unlock": 1
    },
    {
      "type": "STAT",
      "number": 355,
      "prereq": ["MATH 152"
      ],
      "unlock": 1
    }]


var SCIENCE = [
    {
      "type": "BIOL",
      "number": 100,
      "prereq": [
        "BIOL301"
      ],
      "unlock": 0
    },
    {
      "type": "BIOL",
      "number": 301,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "BIOL",
      "number": 141,
      "prereq": [
        "BIOL142"
      ],
      "unlock": 0
    },
    {
      "type": "BIOL",
      "number": 142,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CHEM",
      "number": 101,
      "prereq": [
        "CHEM102"
      ],
      "unlock": 0
    },
    {
      "type": "CHEM",
      "number": 102,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "PHYS",
      "number": 121,
      "prereq": [
        "CMSC202",
        "PHYS122"
      ],
      "unlock": 1
    },
    {
      "type": "PHYS",
      "number": 122,
      "prereq": [],
      "unlock": 2
    }]