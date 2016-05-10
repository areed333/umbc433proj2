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
      "prereq": [
        "CMSC 202"
      ],
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
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 341,
      "prereq": [
        "CMSC 203"
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
      "prereq": [
        "CMSC 313"
      ],
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
      "number": 441,
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
      "prereq": [],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 426,
      "prereq": [
        "CMSC 421"
      ],
      "unlock": 0
    },
    {
      "type": "CMSC",
      "number": 431,
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
      "prereq": [
        "CMSC 447"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 451,
      "prereq": [
        "CMSC 202", 
        "CMSC 203"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 455,
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
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 471,
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 481,
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 483,
      "prereq": [
        "CMSC 421"
      ],
      "unlock": 1

    },
    {
      "type": "CMSC",
      "number": 232,
      "prereq": [
         "CMSC 202"
      ],
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
      "number": 427,
      "prereq": [],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 432,
      "prereq": [
        "CMSC 331", 
        "CMSC 341"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 433,
      "prereq": [
        "CMSC 331"
      ],
      "unlock": 3
    },
     {
      "type": "CMSC",
      "number": 436,
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 437,
      "prereq": [
        "CMSC 341", 
        "MATH 221" 
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 442,
      "prereq": [
        "CMSC 203", 
        "MATH 221" 
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 443,
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
      "prereq": [
        "CMSC 421",
        "MATH 481"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 446,
      "prereq": [
        "CMSC 331",
        "MATH 241"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 452,
      "prereq": [
        "CMSC 203"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 453,
      "prereq": [
        "CMSC 341",
        "MATH 241"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 457,
      "prereq": [
        "CMSC 203",
        "MATH 221                                                                                                                                                    "
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 465,
      "prereq": [
        "CMSC 461", 
        "CMSC 481"
      ],
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
      "number": 473,
      "prereq": [],
      "unlock": 3
    },
    {
      "type": "CMSC",
      "number": 475,
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 476,
      "prereq": [
        "CMSC 341"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 477,
      "prereq": [
        "CMSC 471"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 478,
      "prereq": [
        "CMSC 471"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 479,
      "prereq": [
        "CMSC 471"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 484,
      "prereq": [
        "CMSC 202"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 486,
      "prereq": [
        "MATH 152"
      ],
      "unlock": 1
    },
    {
      "type": "CMSC",
      "number": 487,
      "prereq": [
        "CMSC 421", 
        "CMSC 481"
      ],
      "unlock": 2
    },
    {
      "type": "CMSC",
      "number": 493,
      "prereq": [
        "CMSC 435", 
        "CMSC 471"
      ],
      "unlock": 2
    },
    {
      "type": "MATH",
      "number": 151,
      "prereq": [],
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
      "prereq": [
        "MATH 151"
      ],
      "unlock": 1
    },
    {
      "type": "STAT",
      "number": 355,
      "prereq": [
        "MATH 152"
      ],
      "unlock": 1
    },
    {
      "type": "BIOL",
      "number": 100,
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "BIOL",
      "number": 301,
      "prereq": [
        "BIOL 100"
      ],
      "unlock": 1
    },
    {
      "type": "BIOL",
      "number": 141,
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "BIOL",
      "number": 142,
      "prereq": [
        "BIOL 141"
      ],
      "unlock": 1
    },
    {
      "type": "CHEM",
      "number": 101,
      "prereq": [],
      "unlock": 0
    },
    {
      "type": "CHEM",
      "number": 102,
      "prereq": [
        "CHEM 101"
      ],
      "unlock": 1
    },
    {
      "type": "PHYS",
      "number": 121,
      "prereq": [
        "MATH 151"
      ],
      "unlock": 1
    },
    {
      "type": "PHYS",
      "number": 122,
      "prereq": [
        "PHYS 121",
        "MATH 152"
      ],
      "unlock": 2
    }]