"use client";
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
function page() {
  const movie = {
    moviename: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
    screen: "4Dx",
    date: new Date(),
    language: "Hindi",
    type: "Action/Thriller",
    screens: [
      {
        name: "Screen 1",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 2",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
      {
        name: "Screen 3",
        location: "PVR Cinemas, Forum Mall, Koramangala",
      },
    ],
  };
  const screendetails = {
    name: "Screen 1",
    location: "PVR Cinemas, Forum Mall, Koramangala",
    timeslots: [
      {
        time: "10:00 AM",
        seats: [
          {
            type: "Platinum",
            price: "500",
            row: [
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "not available" },
                      { number: "6", status: "not available" },
                      { number: "7", status: "not available" },
                      { number: "8", status: "not available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "not available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "not available" },
                      { number: "8", status: "not available" },
                      { number: "9", status: "not available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "not available" },
                      { number: "6", status: "not available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "not available" },
                      { number: "2", status: "not available" },
                      { number: "3", status: "not available" },
                      { number: "4", status: "not available" },
                      { number: "5", status: "not available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "not available" },
                      { number: "8", status: "not available" },
                      { number: "9", status: "not available" },
                      { number: "10", status: "not available" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "Gold",
            price: "300",
            row: [
              {
                rowname: "D",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "not available" },
                      { number: "2", status: "not available" },
                      { number: "3", status: "not available" },
                      { number: "4", status: "not available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "not available" },
                      { number: "5", status: "not available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "E",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "not available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "not available" },
                      { number: "9", status: "not available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "F",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "Silver",
            price: "150",
            row: [
              {
                rowname: "G",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "I",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "J",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          }
        ],
      },
      {
        time: "12:00 AM",
        seats: [
          {
            type: "Platinum",
            price: "500",
            row: [
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "Gold",
            price: "300",
            row: [
              {
                rowname: "D",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "E",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "F",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "Silver",
            price: "150",
            row: [
              {
                rowname: "G",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "H",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "I",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          }
        ],
      },
      {
        time: "3:00 AM",
        seats: [
          {
            type: "Platinum",
            price: "500",
            row: [
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "Gold",
            price: "300",
            row: [
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "Silver",
            price: "150",
            row: [
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          }
        ],
      },
      {
        time: "5:00 AM",
        seats: [
          {
            type: "Platinum",
            price: "500",
            row: [
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "Gold",
            price: "300",
            row: [
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "Silver",
            price: "150",
            row: [
              {
                rowname: "A",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "B",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              },
              {
                rowname: "C",
                cols: [
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  },
                  {
                    seats: [
                      { number: "1", status: "available" },
                      { number: "2", status: "available" },
                      { number: "3", status: "available" },
                      { number: "4", status: "available" },
                      { number: "5", status: "available" },
                      { number: "6", status: "available" },
                      { number: "7", status: "available" },
                      { number: "8", status: "available" },
                      { number: "9", status: "available" },
                      { number: "10", status: "available" }
                    ]
                  }
                ]
              }
            ]
          }
        ],
      },
    ],
  };
  const [selectedtime, setselectedtime] = useState(screendetails.timeslots[0].time);
  // const [selectedseat, setselectedseat] = useState<any[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (rowname: string, colIndex: number, seatNumber: string) => {
    const seatId = `${rowname}-${colIndex}-${seatNumber}`;
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]
    );
  };
  function generateseatlayout() {
    const index = screendetails.timeslots.findIndex(
      (time: any) => time.time === selectedtime
    )
    // console.log(selectedseat)
    return(
      <div className="layout w-[60%] m-auto">
        {screendetails.timeslots[index].seats.map((seat: any) => {
          return (
            <div className="seat flex flex-col gap-5 p-5" >
              <h1>{seat.type} - {seat.price}</h1>
              <div className="rows flex flex-col gap-3">
                {seat.row.map((row: any) => {
                 return(
                  <div className="row flex items-center gap-2">
                  <h1 className="text-[18px]">{row.rowname}</h1>
                  <div className="rownumbers flex gap-14 items-center">
                    {row.cols.map((col: any,colIndex: number) => {
                      return(
                       <div className="col flex gap-2">
                         {col.seats.map((seatObj: any) => {
                        const seatId = `${row.rowname}-${colIndex}-${seatObj.number}`;
                        const isSelected = selectedSeats.includes(seatId);
                        const isAvailable = seatObj.status === "available";
                        return (
                          <div
                            key={seatId}
                            onClick={() =>
                              isAvailable && handleSeatClick(row.rowname, colIndex, seatObj.number)
                            }
                            className={`seat border w-[30px] h-[30px] flex items-center justify-center text-sm cursor-pointer
                              ${
                                isAvailable
                                  ? isSelected
                                    ? "bg-green-500 text-white"
                                    : "bg-white text-green-700"
                                  : "bg-gray-300 text-white cursor-not-allowed"
                              }`}
                          >
                            {seatObj.number}
                          </div>
                        );
                      })}
                       </div>
                      )
                    })}
                  </div>
                </div>
                 )
                })}
              </div>
            </div>
          );
        })}
      </div>
    )
  }
  return (
    <div>
      <div className="detils gap-2 items-center m-6 flex">
        <div className="icon">
          <Link href={"/"}><ChevronLeft className=" cursor-pointer" /></Link>
        </div>
        <div className="mvdet">
          <h1>{movie.moviename}</h1>
          <h6 className="text-[14px] font-bold text-gray-600">
            {movie.screens[0].name}:{movie.screens[0].location}
          </h6>
        </div>
      </div>
      <div className="screendet" >
        <div
          className="timeslots w-[100%] p-4 flex gap-3"
          style={{ backgroundColor: "#F5F5FA" }}
        >
          {screendetails.timeslots.map((time: any) => {
            return (
              <div className="timeslot w-[10%] p-2 text-center border-1 border-green bg-white text-green-600" style={{ backgroundColor: selectedtime === time.time ? "green" : "white",color: selectedtime === time.time ? "white" : "green"}}>
                <button className="cursor-pointer" onClick={() => setselectedtime(time.time)} >{time.time}</button>
              </div>
            );
          })}
        </div>
        <div className="genseatslayout p-5" style={{ backgroundColor: "#FAFAFA" }}>
        <div className="indicators flex gap-4 justify-center  ">
          <div className="not-ava flex items-center gap-2">
            <div className="box w-3 h-3" style={{ backgroundColor: "#D1D5DC" }}></div>
            <h1>Not Available</h1>
          </div>
          <div className="not-ava flex items-center gap-2">
            <div className="box w-3 h-3 border-1 border-green-500"></div>
            <h1>Available</h1>
          </div>
          <div className="not-ava flex items-center gap-2">
            <div className="box w-3 h-3 bg-green-500"></div>
            <h1>Selected</h1>
          </div>
        </div>
          {generateseatlayout()}
        </div>
      </div>
    </div>
  ); 
}

export default page;
