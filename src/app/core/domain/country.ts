//Interface to define datatypes for API response
export interface Country {
    name: Name;
    population: string;
    capital: string;
    subregion: string;
}

interface Name {
    common: string;
}