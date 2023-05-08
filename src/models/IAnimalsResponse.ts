export interface IAnimalsResponse {
    id: number;
    name: string;
    latinName: string;
    yearOfBirth: string;
    shortDescription: string;
    longDescription: string;
    imageUrl: string;
    medicine: string;
    isFed: boolean;
    lastFed: Date;
}