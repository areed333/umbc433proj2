var CMSC = [
    {
      "type": "CMSC",
      "number": 201,
      "unlock": [
        "CMSC202"
      ],
      "prereq": 0
    },
    {
      "type": "CMSC",
      "number": 202,
      "unlock": [
        "CMSC203",
        "CMSC232"
        "CMSC304",
        "CMSC313",
        "CMSC331",
        "CMSC341",
        "CMSC451",
        "CMSC484"
      ],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 203,
      "unlock": [
        "CMSC202",
        "CMSC313", 
        "CMSC341",
        "CMSC451",
        "CMSC452",
        "CMSC457"
      ],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 304,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 313,
      "unlock": [
        "CMSC411",
        "CMSC421",
        "CMSC431",
        "CMSC435"
      ],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 331,
      "unlock": [
        "CMSC431",
        "CMSC432"
      ],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 341,
      "unlock": [
        "CMSC345",
        "CMSC404",
        "CMSC421",
        "CMSC427",
        "CMSC431",
        "CMSC432",
        "CMSC435",
        "CMSC437",
        "CMSC441",
        "CMSC443",
        "CMSC447",
        "CMSC453",
        "CMSC455",
        "CMSC456",
        "CMSC461",
        "CMSC471",
        "CMSC475", 
        "CMSC476", 
        "CMSC481",
        "CMSC486",
        "CMSC498",
        "CMSC499"
      ],
      "prereq": 2
    },
    {
      "type": "CMSC",
      "number": 345,
      "unlock": [
        "CMSC448"
      ],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 411,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "CMSC",
      "number": 421,
      "unlock": [
        "CMSC426",
        "CMSC483",
        "CMSC487"
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
      "unlock": [],
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
        "MATH152",
        "MATH221",
        "PHYS121"
      ],
      "prereq": 0
    },
    {
      "type": "MATH",
      "number": 152,
      "unlock": [
        "STAT355",
        "PHYS122"
      ],
      "prereq": 1
    },
    {
      "type": "MATH",
      "number": 221,
      "unlock": [],
      "prereq": 1
    },
    {
      "type": "STAT",
      "number": 355,
      "unlock": [
        "CMSC202", 
        "CMSC441"
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