var CMSC = [
    {
      "type": "CMSC",
      "number": 201,
      "unlock": [], // if size > 1
      "prereq": 0 // or chekc if preque is 0
    },
    {
      "type": "CMSC",
      "number": 202,
      "unlock": [
        "CMSC 201"
      ],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 203,
      "unlock": [
        "CMSC 202"
      ],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 304,
      "unlock": ["CMSC 202"],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 313,
      "unlock": [
        "CMSC 203"
      ],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 331,
      "unlock": ["CMSC 203"
      ],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 341,
      "unlock": ["CMSC 203"
      ],
      "prereq": 2
    },
    { // not in their code
      "type": "CMSC",
      "number": 345,
      "unlock": [
        "CMSC448"
      ],
      "prereq": 1
    }, // end
    {
      "type": "CMSC",
      "number": 411,
      "unlock": ["CMSC 313"],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 421,
      "unlock": [
        "CMSC 313",
        "CMSC 341"
      ],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 437,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 441,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 443,
      "unlock": ["CMSC 341","MATH 221","STAT 355"],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 447,
      "unlock": [
        "CMSC448"
      ],
      "prereq": 2
    }]

var cmscElective = [
    {
      "type": "CMSC",
      "number": 426,
      "unlock": [],
      "prereq": 0
    },
    {
      "type": "CMSC",
      "number": 431,
      "unlock": [],
      "prereq": 3
    },
    {
      "type": "CMSC",
      "number": 432,
      "unlock": [],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 433,
      "unlock": [],
      "prereq": 3
    },
    {
      "type": "CMSC",
      "number": 435,
      "unlock": [
        "CMSC493"
      ],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 436,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 448,
      "unlock": [],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 451,
      "unlock": [],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 455,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 456,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 461,
      "unlock": [
        "CMSC465",
        "CMSC466"
      ],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 481,
      "unlock": [
        "CMSC465",
        "CMSC466",
        "CMSC487"
      ],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 483,
      "unlock": [],
      "prereq": 1

    }]

var cmscElectiveOther = [
    {
      "type": "CMSC",
      "number": 232,
      "unlock": [],
      "prereq": 0
    },
    {
      "type": "CMSC",
      "number": 291,
      "unlock": [],
      "prereq": 0
    },
    {
      "type": "CMSC",
      "number": 299,
      "unlock": [],
      "prereq": 0
    },
    {
      "type": "CMSC",
      "number": 352,
      "unlock": [],
      "prereq": 0
    },
    {
      "type": "CMSC",
      "number": 404,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 427,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 452,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 453,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 457,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 465,
      "unlock": [],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 466,
      "unlock": [],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 471,
      "unlock": [
        "CMSC477",
        "CMSC478",
        "CMSC479",
        "CMSC493"
      ],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 473,
      "unlock": [],
      "prereq": 3
    },
    {
      "type": "CMSC",
      "number": 475,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 476,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 477,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 478,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 479,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 484,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 486,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 487,
      "unlock": [],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 493,
      "unlock": [],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 495,
      "unlock": [],
      "prereq": 0
    },
    {
      "type": "CMSC",
      "number": 498,
      "unlock": [],
      "prereq": 0
    },
    {
      "type": "CMSC",
      "number": 499,
      "unlock": [],
      "prereq": 0
    }]

var MATH = [
    {
      "type": "MATH",
      "number": 151,
      "unlock": [
      ],
      "prereq": 0
    },
    {
      "type": "MATH",
      "number": 152,
      "unlock": [
        "MATH 151"
      ],
      "prereq": 1
    },
    {
      "type": "MATH",
      "number": 221,
      "unlock": ["MATH 151"],
      "prereq": 1
    },
    {
      "type": "STAT",
      "number": 355,
      "unlock": ["MATH 152"
      ],
      "prereq": 1
    }]


var SCIENCE = [
    {
      "type": "BIOL",
      "number": 100,
      "unlock": [
        "BIOL301"
      ],
      "prereq": 0
    },
    {
      "type": "BIOL",
      "number": 301,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "BIOL",
      "number": 141,
      "unlock": [
        "BIOL142"
      ],
      "prereq": 0
    },
    {
      "type": "BIOL",
      "number": 142,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CHEM",
      "number": 101,
      "unlock": [
        "CHEM102"
      ],
      "prereq": 0
    },
    {
      "type": "CHEM",
      "number": 102,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "PHYS",
      "number": 121,
      "unlock": [
        "CMSC202",
        "PHYS122"
      ],
      "prereq": 1
    },
    {
      "type": "PHYS",
      "number": 122,
      "unlock": [],
      "prereq": 2
    }]