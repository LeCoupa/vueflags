/**************************************************************************
 * DATA > CONTINENTS
 * BASED ON https://wiki.openstreetmap.org/wiki/Nominatim/Country_Codes
 ***************************************************************************/

const continents = [
  {
    code: "af",
    name: "Africa",
  },
  {
    code: "an",
    name: "Antarctica",
  },
  {
    code: "as",
    name: "Asia",
  },
  {
    code: "eu",
    name: "Europe",
  },
  {
    code: "na",
    name: "North America",
  },
  {
    code: "oc",
    name: "Oceania",
  },
  {
    code: "sa",
    name: "South America",
  },
] as const

export type Continent = typeof continents[number]

export default continents
