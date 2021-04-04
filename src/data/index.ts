import type { Continent } from "./continents"
import continents from "./continents"
import type { Country } from "./countries"
import countries from "./countries"

// Codes & names helpers
const countryCodes = [...countries.map((country: Country) => country.code)] as const
const countryNames = [...countries.map((country: Country) => country.name)] as const

// Helpers types
type CountryCode = typeof countryCodes[number] | "unknown"
type CountryName = typeof countryNames[number] | "unknown"

// Exports
export { countries, continents, countryCodes, countryNames }
export type { CountryCode, CountryName, Country, Continent }
